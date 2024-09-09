import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ClassList from './components/ClassList';
import ClassDetails from './components/ClassDetails';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4a90e2',
    },
    secondary: {
      main: '#f5a623',
    },
    background: {
      default: '#f0f0f0',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<ClassList />} />
        <Route path="/class/:className" element={<ClassDetails />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
