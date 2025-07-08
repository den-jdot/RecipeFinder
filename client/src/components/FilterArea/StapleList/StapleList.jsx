import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import BlenderIcon from '@mui/icons-material/Blender';
import DeleteIcon from '@mui/icons-material/Delete';

export default function StapleList({staples, setStaples}) {

const handleDelete = (stapleToRemove) => {
  setStaples((prev) => prev.filter(item => item !== stapleToRemove));
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {staples.map((value, index) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(value)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined}>
              <ListItemIcon>
                <BlenderIcon />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}