import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState, useEffect, useRef } from 'react';

//UNUSED NOW

export default function IngredientsToggle({ useIngredients, setUseIngredients }) {
  const handleChange = (event, newValue) => {
    if (newValue !== null) setUseIngredients(newValue === 'on');
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={useIngredients ? 'on' : 'off'}
      exclusive
      onChange={handleChange}
      aria-label="ingredient-usage"
    >
      <ToggleButton value="on">Ingredients On</ToggleButton>
      <ToggleButton value="off">Ingredients Off</ToggleButton>
    </ToggleButtonGroup>
  );
}