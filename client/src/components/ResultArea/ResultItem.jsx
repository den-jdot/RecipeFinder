import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ResultItem(props) {
  const ingredients = props.ingredients || [];
  const totalIngredients = ingredients.length;

  const stapleSet = new Set(props.staples?.map(s => s.toLowerCase()));
  const stapleCount = ingredients.filter(i =>
    stapleSet.has(i.name.toLowerCase())
  ).length;

  const isFavorited = props.favorites.some(fav => fav.id === props.id);

  const toggleFavorite = (e) => {
    e.stopPropagation(); // Prevent onSelect

    if (isFavorited) {
      props.setFavorites(prev => prev.filter(fav => fav.id !== props.id));
    } else {
      props.setFavorites(prev => [
        ...prev,
        {
          id: props.id,
          title: props.dish,
          image: props.image,
          readyInMinutes: props.readyInMinutes,
          weightWatcherSmartPoints: props.weightWatcherSmartPoints,
          spoonacularScore: props.spoonacularScore,
          extendedIngredients: props.ingredients
        }
      ]);
    }
  };

  return (
    <Card
      className={`ResultItem ${props.selected ? 'selected' : ''}`}
      variant="outlined"
      sx={{ maxWidth: 360, position: 'relative' }}
      onClick={props.onSelect}
    >
      {/* Heart Icon */}
      {isFavorited ? (
        <FavoriteIcon
          onClick={toggleFavorite}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'red',
            cursor: 'pointer'
          }}
        />
      ) : (
        <FavoriteBorderIcon
          onClick={toggleFavorite}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'gray',
            cursor: 'pointer'
          }}
        />
      )}

      <Box sx={{ p: 2 }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.dish}
          </Typography>
        </Stack>
        <img
          src={props.image}
          alt={props.dish}
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>

      <Divider sx={{ width: '100%' }} />
      <Box sx={{ p: 1 }}>
        <Typography variant="body2">{totalIngredients} ingredients ({stapleCount} staples)</Typography>
      </Box>
      <Divider sx={{ width: '100%' }} />
      <Box sx={{ p: 1 }}>
        <Typography variant="body2">
          {props.readyInMinutes} minutes || {props.weightWatcherSmartPoints} WW Points
        </Typography>
      </Box>
      <Divider sx={{ width: '100%' }} />
      <Box sx={{ p: 1 }}>
        <Typography variant="body2">
          {props.spoonacularScore?.toFixed(1)}% Score
        </Typography>
      </Box>
    </Card>
  );
}
