import React from 'react';
import { Stack, useTheme } from '@mui/material';

import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      sx={{ overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((item) => (
        <button
          type="button"
          onClick={() => setSelectedCategory(item.name)}
          className="category-btn"
          style={{ background: item.name === selectedCategory && '#fc1503', color: theme.palette.text.primary }}
          key={item.name}
        >
          <span
            style={{ color: item.name === selectedCategory ? '#fff' : 'red',
              marginRight: '15px',
            }}
          >
            {item.icon}
          </span>
          <span style={{ opacity: item.name === selectedCategory ? '1' : '0.8' }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
