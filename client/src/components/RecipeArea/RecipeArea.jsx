import * as React from 'react';
import { useState } from 'react';
import { HeroHeader } from '../HeroHeader';
import Button from '@mui/material/Button';

const RecipeArea = () => {
  const [portions, setPortions] = useState(1);
  const [portionInput, setPortionInput] = useState("1");

  const ingredients = [
    { name: 'Water', unit: 'ml', amountPerPortion: 120 },
    { name: 'Flour', unit: 'g', amountPerPortion: 200 },
    { name: 'Salt', unit: 'g', amountPerPortion: 4 },
    { name: 'Yeast', unit: 'g', amountPerPortion: 2 },
  ];

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

        <h2>Pizzateig</h2>

        <ul className="ingredient-list">
          {ingredients.map((item, index) => (
            <li key={index}>
              {item.name}{' '}
              <span className="ingredient-amount">
                {item.amountPerPortion * ( portions || 0)}
                {item.unit}
              </span>
            </li>
          ))}
        </ul>

        <h2>Portions</h2>
        <input
          type="number"
          value={portionInput}
          onChange={handlePortionChange}
          style={{ width: '60px', marginBottom: '1rem' }}
        />

        <h2>Difficulty</h2>
        <p>
          Easy
        </p>
        <h2>Instructions</h2>
        <p>
          1. Dissolve the yeast in the lukewarm water. Then mix it with the flour and salt  in a bowl until a dough forms.
        </p>
      </div>
    </>
  );
};

export default RecipeArea;
