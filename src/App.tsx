import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from './style/theme';
import { Routes } from './Routes';
import { QuestionsProvider } from './components/hooks/useQuestions';

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
