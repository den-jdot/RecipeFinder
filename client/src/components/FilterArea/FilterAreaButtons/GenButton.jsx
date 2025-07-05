import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function GenButton() {
  return (
    <Stack className="GenButton" direction="row" spacing={2}>
      <Button variant="contained">Run App</Button>

    </Stack>
  );
}