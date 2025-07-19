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
    {Array.isArray(recipeResults) && recipeResults.length > 0 ? (
        recipeResults.map((recipe) => (
        <ResultItem
        key={recipe.id}
        id={recipe.id}
        dish={recipe.title}
        image={recipe.image}
        selected={recipe.id === selectedRecipe?.id}
        // itemAmount={${recipe.extendedIngredients.length} ingredients}
        readyInMinutes={recipe.readyInMinutes}
        weightWatcherSmartPoints={recipe.weightWatcherSmartPoints}
        spoonacularScore={recipe.spoonacularScore}
        ingredients={recipe.extendedIngredients}
        staples={staples}
        favorites={favorites}
        setFavorites={setFavorites}
        onSelect={() => 
            setSelectedRecipe((prev) => (prev?.id === recipe.id ? null : recipe))}
        />
        ))
    ) : (
    <p>No recipes found yet.</p>
    )}
               

    </div>
    </>
)}

export default ResultArea;