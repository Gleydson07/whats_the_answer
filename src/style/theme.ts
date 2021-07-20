import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  overrides: {
      MuiCssBaseline: {
          '@global': {
              body: {
                // backgroundColor: "#f7f7f7",
                backgroundImage: `url(${"/interrogate.svg"})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }
          }
      }
  }
});