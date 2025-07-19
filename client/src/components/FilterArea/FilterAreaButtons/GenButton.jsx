import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function GenButton({ pantry, checked, keywordRef, recipeResults, setRecipeResults, useIngredients }) {
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const [errorOpen, setErrorOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleQuery = () => {
    const keyword = keywordRef?.current?.value.trim() ?? '';
    const hasKeyword = keyword.length > 0;
    const hasIngredients = checked && checked.length > 0;

    if (useIngredients) {
      if (!hasKeyword && !hasIngredients) {
        throw new Error("Please enter a keyword or select at least one ingredient.");
      }
    } else {
      if (!hasKeyword) {
        throw new Error("Please enter a keyword when ingredients are turned off.");
      }
    }

    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

    if (hasKeyword) {
      url += `&query=${encodeURIComponent(keyword)}`;
    }

    if (useIngredients && hasIngredients) {
      const ingredientsParam = checked.map(item => item.trim()).join(',');
      url += `&includeIngredients=${encodeURIComponent(ingredientsParam)}`;
    }

    console.log('Generated URL:', url);
    return url;
  };

  const getRecipes = async () => {
    try {
      const searchUrl = handleQuery();
      const response = await axios.get(searchUrl);

      const ids = response.data.results.map(r => r.id).join(',');
      if (!ids) {
        throw new Error("No recipe IDs found.");
      }

      const bulkUrl = `https://api.spoonacular.com/recipes/informationBulk?apiKey=${apiKey}&ids=${ids}`;
      const bulkResponse = await axios.get(bulkUrl);

      setRecipeResults(bulkResponse.data);
      localStorage.setItem('recipeResults', JSON.stringify(bulkResponse.data));
      console.log("Full recipe info:", bulkResponse.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setErrorMessage(error.message || "An unexpected error occurred.");
      setErrorOpen(true);
    }
  };

  return (
    <Stack className="GenButton" direction="row" spacing={2}>
      <Button variant="contained" onClick={getRecipes}>Run App</Button>
      
      <Snackbar
        open={errorOpen}
        autoHideDuration={3000}
        onClose={() => setErrorOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setErrorOpen(false)} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
