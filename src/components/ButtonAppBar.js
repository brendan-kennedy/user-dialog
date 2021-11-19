import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

     {/* Lightning Button */}

          <Link to="/lightning" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained" sx={{ backgroundColor: 'rgba(32, 31, 31, 0.637)'}} > Lightning</Button>
          </Link>
  
      {/* Cumulus Cloud Button */}

          <Link to="/smokeplume" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained" sx={{ backgroundColor: 'rgba(32, 31, 31, 0.637)'}} > Smoke Plume</Button>
          </Link>

      {/* Cumulus Cloud Button */}

          <Link to="/cumulus" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained" sx={{ backgroundColor: 'rgba(32, 31, 31, 0.637)'}} > Cumulus Cloud</Button>
          </Link>

      {/* Attached Anvil Cloud Button */}

          <Link to="/attached" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained" sx={{ backgroundColor: 'rgba(32, 31, 31, 0.637)'}} > Attached Anvil Cloud</Button>
          </Link>
      
      {/* Detached Anvil Cloud Button */}

          <Link to="/detached" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained" sx={{ backgroundColor: 'rgba(32, 31, 31, 0.637)'}} > Detached Anvil Cloud</Button>
          </Link>

      {/* Triboelectrification Button */}

          <Link to="/tribo" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained" sx={{ backgroundColor: 'rgba(32, 31, 31, 0.637)'}} > Triboelectrification</Button>
          </Link>

    {/* Thick Cloud Button */}

          <Link to="/thick" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained" sx={{ backgroundColor: 'rgba(32, 31, 31, 0.637)'}} > Thick Cloud</Button>
          </Link>

    {/* Debris Cloud Button */}

          <Link to="/debris" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained" sx={{ backgroundColor: 'rgba(32, 31, 31, 0.637)'}} > Debris Cloud</Button>
          </Link>

    {/* Disturbed Weather Button */}

          <Link to="/disturbed" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained" sx={{ backgroundColor: 'rgba(32, 31, 31, 0.637)'}} > Disturbed Weather</Button>
          </Link>

    {/* Surface Electric Field Mill */}

          <Link to="/sefm" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained" sx={{ backgroundColor: 'rgba(32, 31, 31, 0.637)'}} > Surface Electric Field Mill</Button>
          </Link>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


