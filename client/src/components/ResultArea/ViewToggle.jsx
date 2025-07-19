import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState, useEffect, useRef } from 'react';

export default function ViewToggle({ view, setView }) {
  const handleChange = (event, newValue) => {
    if (newValue !== null) setView(newValue === 'Search');
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={view ? 'Search' : 'Favorites'}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="Search">Search</ToggleButton>
      <ToggleButton value="Favorites">Favorites</ToggleButton>
    </ToggleButtonGroup>
  );
}