import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  overrides: {
      MuiCssBaseline: {
          '@global': {
              body: {
                background: "#3494E6",
              }
          }
      }
  }
});