import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function StapleToggle({ showStaples, setShowStaples }) {
  const handleToggle = (event) => {
    setShowStaples(event.target.checked);
  };

  return (
    <FormControl component="fieldset">
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              color="primary"
              checked={showStaples}
              onChange={handleToggle}
            />
          }
          label="Show Staples"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}