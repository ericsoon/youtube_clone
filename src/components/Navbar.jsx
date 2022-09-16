import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Brightness4, Brightness7 } from '@mui/icons-material';

import { ColorModeContext } from '../utils/ToggleColorMode';
import Searchbar from './SearchBar';
import { logo } from '../utils/constants';

const Navbar = () => {
  const colorMode = useContext(ColorModeContext);

  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        // background: '#000',
        top: 0,
        justifyContent: 'space-between' }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>

      <IconButton color="inherit" sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>

      <Searchbar />
    </Stack>
  );
};

export default Navbar;
