import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function AddField({ onAdd }) {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      onAdd(inputValue.trim());
      setInputValue('');
      event.preventDefault();
    }
  };

  return (
    <Box component="form" sx={{ '& .MuiTextField-root': { m: 0.5 } }} noValidate autoComplete="off">
      <TextField
        id="filled-required"
        label="Add Item"
        variant="filled"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Box>
  );
}
