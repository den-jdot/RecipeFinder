import * as React from 'react';
import Button from '@mui/material/Button';
import { useRef, useState, useEffect } from 'react';
import ResultItem from './ResultItem';
import { HeroHeader } from '../HeroHeader';
import ViewToggle from './ViewToggle';
// import PageviewTwoToneIcon from '@mui/icons-material/PageviewTwoTone';

const ResultArea = ({recipeResults, selectedRecipe, setSelectedRecipe, staples, favorites, setFavorites, view, setView}) => {
    console.log('recipeResults:', recipeResults);


return (
    <>
    
    <div className="ResultArea">
        <div className="ResultAreaHeader">
            <ViewToggle view={view} setView={setView}></ViewToggle>
            {/* <PageviewTwoToneIcon /> */}
            <HeroHeader text="Recipe Results" />

        </div>
        {view === true
            ? recipeResults.length > 0
                ? recipeResults.map((recipe) => (
                    <ResultItem
                    key={recipe.id}
                    id={recipe.id}
                    dish={recipe.title}
                    image={recipe.image}
                    selected={recipe.id === selectedRecipe?.id}
                    readyInMinutes={recipe.readyInMinutes}
                    weightWatcherSmartPoints={recipe.weightWatcherSmartPoints}
                    spoonacularScore={recipe.spoonacularScore}
                    ingredients={recipe.extendedIngredients}
                    staples={staples}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    onSelect={() =>
                        setSelectedRecipe((prev) =>
                        prev?.id === recipe.id ? null : recipe
                        )
                    }
                    />
                ))
                : <p>No recipes found yet.</p>
            : favorites.length > 0
                ? favorites.map((fav) => (
                    <ResultItem
                    key={fav.id}
                    id={fav.id}
                    dish={fav.title}
                    image={fav.image}
                    selected={fav.id === selectedRecipe?.id}
                    readyInMinutes={fav.readyInMinutes}
                    weightWatcherSmartPoints={fav.weightWatcherSmartPoints}
                    spoonacularScore={fav.spoonacularScore}
                    ingredients={fav.extendedIngredients}
                    staples={staples}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    onSelect={() =>
                        setSelectedRecipe((prev) =>
                        prev?.id === fav.id ? null : fav
                        )
                    }
                    />
                ))
                : <p>No favorites saved yet.</p>
            }
               

    </div>
    </>
)}

export default ResultArea;





// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { useRef, useState, useEffect } from 'react';
// import ResultItem from './ResultItem';
// import { HeroHeader } from '../HeroHeader';
// import ViewToggle from './ViewToggle';
// // import PageviewTwoToneIcon from '@mui/icons-material/PageviewTwoTone';

// const ResultArea = ({recipeResults, selectedRecipe, setSelectedRecipe, staples, favorites, setFavorites, view, setView}) => {
//     console.log('recipeResults:', recipeResults);


// return (
//     <>
    
//     <div className="ResultArea">
//         <div className="ResultAreaHeader">
//             <ViewToggle view={view} setView={setView}></ViewToggle>
//             {/* <PageviewTwoToneIcon /> */}
//             <HeroHeader text="Recipe Results" />
            
//         </div>
//     {Array.isArray(recipeResults) && recipeResults.length > 0 ? (
//         recipeResults.map((recipe) => (
//         <ResultItem
//         key={recipe.id}
//         id={recipe.id}
//         dish={recipe.title}
//         image={recipe.image}
//         selected={recipe.id === selectedRecipe?.id}
//         // itemAmount={${recipe.extendedIngredients.length} ingredients}
//         readyInMinutes={recipe.readyInMinutes}
//         weightWatcherSmartPoints={recipe.weightWatcherSmartPoints}
//         spoonacularScore={recipe.spoonacularScore}
//         ingredients={recipe.extendedIngredients}
//         staples={staples}
//         favorites={favorites}
//         setFavorites={setFavorites}
//         onSelect={() => 
//             setSelectedRecipe((prev) => (prev?.id === recipe.id ? null : recipe))}
//         />
//         ))
//     ) : (
//     <p>No recipes found yet.</p>
//     )}
               

//     </div>
//     </>
// )}

// export default ResultArea;