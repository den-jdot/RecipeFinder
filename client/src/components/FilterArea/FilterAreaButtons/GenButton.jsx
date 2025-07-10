import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function GenButton({pantry}) {

  const handleQuery = () => {
  let query = '<url>?ingredients=';

  pantry.forEach((item, index) => {
    if (index === 0) {
      query += item.trim();
    } else {
      query += ',+' + item.trim();
    }
  });

  const url = `${query}`;
  console.log(url);
  };

  return (
    <Stack className="GenButton" direction="row" spacing={2}>
      <Button variant="contained" onClick={handleQuery}>Run App</Button>

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