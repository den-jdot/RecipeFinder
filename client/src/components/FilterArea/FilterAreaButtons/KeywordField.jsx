import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function KeywordField() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 0.5 } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-multiline-static"
          label="Search"
          multiline
          rows={4}
          placeholder="Placeholder"
          variant="filled"
        />
      </div>
    </Box>
  );
}