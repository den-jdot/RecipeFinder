import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function PantryToggle({ showPantry, setShowPantry }) {
  const handleToggle = (event) => {
    setShowPantry(event.target.checked);
  };

  return (
    <FormControl component="fieldset">
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              color="primary"
              checked={showPantry}
              onChange={handleToggle}
            />
          }
          label="Show Pantry"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}