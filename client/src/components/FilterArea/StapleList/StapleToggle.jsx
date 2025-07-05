import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function StapleToggle() {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>

        <FormControlLabel
          value="Show Staples"
          control={<Switch color="primary" />}
          label="Show Staples"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}