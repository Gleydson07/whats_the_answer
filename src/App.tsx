import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { QuestionsProvider } from './hooks/useQuestions';
import { Routes } from './Routes';
import { theme } from './style/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuestionsProvider>
        <Routes />
      </QuestionsProvider>
    </ThemeProvider>
  );
}

export default App;
