import * as React from 'react';
import { useState } from 'react';
import { HeroHeader } from '../HeroHeader';
import Button from '@mui/material/Button';

const RecipeArea = ({selectedRecipe}) => {
  
  const [portions, setPortions] = useState(1);
  const [portionInput, setPortionInput] = useState("1");

    if (!selectedRecipe) {
    return (
      <div className="RecipeArea">
        <HeroHeader text="Recipe Details" />
        <p>Select a recipe to see details.</p>
      </div>
    );
  }

  const ingredients = selectedRecipe.extendedIngredients || [];
  const steps = selectedRecipe.analyzedInstructions?.[0]?.steps || [];
  const servings = selectedRecipe.servings || 1;

    const handlePortionChange = (e) => {
      const value = e.target.value;
      setPortionInput(value);

        const num = Number(value);
        if (!isNaN(num)) {
        setPortions(num);
    }
    };

  return (
    <>
      <div className="RecipeArea">
        <HeroHeader text="Recipe Details" />

        <h2>{selectedRecipe.title}</h2>

        <img
          src={selectedRecipe.image} />

      <ul className="ingredient-list">
        {ingredients.map((item, index) => {
          const unit = item.measures.metric.unitShort.toLowerCase();
          const isScalable = unit !== "servings";

          const rawAmount = item.measures.metric.amount;
          const baseAmount = selectedRecipe.servings && isScalable
            ? rawAmount / selectedRecipe.servings
            : rawAmount;

          const displayAmount = isScalable ? baseAmount * portions : rawAmount;

          return (
            <li key={index}>
              {isScalable ? (
                <>
                  <span className="ingredient-amount">
                    {Math.round(displayAmount * 10) / 10}
                    {` ${item.measures.metric.unitShort}`}
                  </span>{" "}
                  - {item.name}
                </>
              ) : (
                <>{item.name}</>
              )}
            </li>
          );
        })}
      </ul>

        <h2>Portions</h2>
        <input
          type="number"
          value={portionInput}
          onChange={handlePortionChange}
          style={{ width: '60px', marginBottom: '1rem' }}
        />

        <h2>Instructions</h2>
          {steps.length > 0 ? (
            <ol>
              {steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
            </ol>
          ) : (
            <p>No detailed instructions available.</p>
          )}

        <h2>Sources</h2>
        <p>
          Original Recipe:&nbsp;
          <a href={selectedRecipe.sourceUrl} target="_blank" rel="noopener noreferrer">
            {selectedRecipe.sourceName || 'Link'} 
          </a>
          <span> | </span>
          <a href={selectedRecipe.spoonacularSourceUrl} target="_blank" rel="noopener noreferrer">
            {'Spoonacular' || 'Link'}
          </a>
        </p>



      </div>

      
    </>
  );
};

export default RecipeArea;
