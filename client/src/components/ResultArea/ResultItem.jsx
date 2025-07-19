import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function ResultItem(props) {

  // const [selectedId, setSelectedId] = useState(null);

  return (
    <Card className={`ResultItem ${props.selected ? 'selected' : ''}`} variant="outlined" sx={{ maxWidth: 360 }} onClick={props.onSelect}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {props.dish}
          </Typography>
        </Stack>
      <img
        src={props.image}
        alt={props.title}
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
      />
        </Box>
        <Divider sx={{ width: '100%'}} />
        <Box sx={{ p: 1 }}>
          <Typography gutterBottom variant="body2" component="div">
            {props.itemAmount}
          </Typography>
        </Box>
      <Divider sx={{ width: '100%'}} />
        <Box sx={{ p: 1 }}>
          <Typography gutterBottom variant="body2" component="div">
            {props.readyInMinutes} minutes || {props.weightWatcherSmartPoints} WW Points
          </Typography>
        </Box>
      <Divider sx={{ width: '100%'}} />
        <Box sx={{ p: 1 }}>
          <Typography gutterBottom variant="body2" component="div">
            {props.spoonacularScore?.toFixed(1)}% Score
          </Typography>
        </Box>
      {/* <Box sx={{ p: 2 }}>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Easy" size="small" />
          <Chip label="Medium" size="small" />
          <Chip label="Hard" size="small" />
        </Stack>
      </Box> */}
    </Card>
  );
}


// //state bsp [recipes,setRecipes = useState([]);
// State in der Komponente erstellen und bis setter (setRecipes) zum "button" durchgeben
// setter setzt Response.data
// State daten (recipes) durchgeben zur der darstellenden Komponente. Verwende Mapfunktion und stelle die properties dar die du brauchst z.B
//      `recipes.map( el => return (
//           <h1>el.title</h1>
//           …
//      ) https://spoonacular.com/food-api/docs#Get-Analyzed-Recipe-Instructions