import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState, useEffect, useRef } from 'react';

export default function ViewToggle({ view, setView }) {
  const handleChange = (event, newValue) => {
    if (newValue !== null) setView(newValue === 'on');
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={view ? 'on' : 'off'}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="on">Search</ToggleButton>
      <ToggleButton value="off">Favorites</ToggleButton>
    </ToggleButtonGroup>
  );
}