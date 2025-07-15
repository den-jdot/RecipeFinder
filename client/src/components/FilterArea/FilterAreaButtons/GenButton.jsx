import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';

export default function GenButton({ pantry, checked, keyword, recipeResults, setRecipeResults }) {
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const handleQuery = () => {
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

    // Add keyword if present
    if (keyword && keyword.trim()) {
      url += `&query=${encodeURIComponent(keyword.trim())}`;
    }

    // Add ingredients one by one
    if (checked && checked.length > 0) {
      const ingredientsParam = checked.map(item => item.trim()).join(',');
      url += `&includeIngredients=${encodeURIComponent(ingredientsParam)}`;
      console.log('Checked items: ', ingredientsParam);
    }

    url += `&number=10`; // how many recipes to fetch
    return url;
  };

  // Fetch recipes and their full data
  const getRecipes = async () => {
    try {
      const searchUrl = handleQuery();
      const response = await axios.get(searchUrl);

      // Get the recipe IDs
      let idParam = '';
      response.data.results.forEach((recipe, index) => {
        if (index === 0) {
          idParam += recipe.id;
        } else {
          idParam += ',' + recipe.id;
        }
      });

      if (!idParam) {
        console.warn("No recipe IDs found.");
        return;
      }

      // Fetch full info with informationBulk
      const bulkUrl = `https://api.spoonacular.com/recipes/informationBulk?apiKey=${apiKey}&ids=${idParam}`;
      const bulkResponse = await axios.get(bulkUrl);

      // Save to React state
      setRecipeResults(bulkResponse.data);

      // Save to localStorage
      localStorage.setItem('recipeResults', JSON.stringify(bulkResponse.data));

      console.log("Full recipe info:", bulkResponse.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <Stack className="GenButton" direction="row" spacing={2}>
      <Button variant="contained" onClick={getRecipes}>Run App</Button>
    </Stack>
  );
}


// // let paramString += Array.map((el,idx) => {
//       if(idx == 0) {
//          return `${el} `
//      } else {
//         return ,+${el} `
//  }

// //Format: "<url>?ingridients="apple,+banana,+kiwi,...+,Grape";

// async function getRecipes() {
// query =   ingridients= ${deineAufgabe}  `
// const config = {
// url: `https://api.spoonacular.com/food/ingredients/9266/information?${query}&amount=${amount} `
// method: "get",
// }
// const Response = await axios(config);
// //irgendwas mit dem Response object machen
// console(Response.data);
// //…
// }

// OLD CODE
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import axios from 'axios';

// export default function GenButton({pantry}) {

//   const handleQuery = () => {
//   let query = 'ingredients=';

//   pantry.forEach((item, index) => {
//     if (index === 0) {
//       query += item.trim();
//     } else {
//       query += ',+' + item.trim();
//     }
//   });

//   const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=e7330c2aa0b44eb0aa51874ed4bcd670&${query}`;
//   console.log(url);
//   return url;
//   };

//   const getRecipes = async () => {
//     const config = {
//      url: handleQuery(), 
//      method: "get",
//     };
//     try {
//       const response = await axios(config);
//       console.log(response);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//     }
//   }

//   return (
//     <Stack className="GenButton" direction="row" spacing={2}>
//       <Button variant="contained" onClick={getRecipes}>Run App</Button>

//     </Stack>
//   );
// }