import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';

export default function NavMenu() {
  const [view, setView] = React.useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const navFontSize = {
    fontSize: '0.65rem',
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="search" aria-label="search" className="navMenuButton">
        <ViewListIcon />
            <Typography gutterBottom variant="caption" component="div" sx={navFontSize}>
            Search
            </Typography>
      </ToggleButton>

      <ToggleButton value="favorites" aria-label="favorites" className="navMenuButton">
        <ViewListIcon />
            <Typography gutterBottom variant="caption" component="div" sx={navFontSize}>
            Favorites
            </Typography>
      </ToggleButton>

      <ToggleButton value="main-course" aria-label="main-course" className="navMenuButton">
        <ViewListIcon />
            <Typography gutterBottom variant="caption" component="div" sx={navFontSize}>
            Main Course
            </Typography>
      </ToggleButton>

      <ToggleButton value="desserts" aria-label="desserts" className="navMenuButton">
        <ViewListIcon />
            <Typography gutterBottom variant="caption" component="div" sx={navFontSize}>
            Desserts
            </Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}