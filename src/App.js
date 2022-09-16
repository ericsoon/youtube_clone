import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';

import { VideoDetail, ChannelDetail, SearchFeed, Navbar } from './components';
import Feed from './components/Feed';
import ToggleColorModeProvider from './utils/ToggleColorMode';

const App = () => (
  <ToggleColorModeProvider>
    <CssBaseline />
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </ToggleColorModeProvider>
);

export default App;
