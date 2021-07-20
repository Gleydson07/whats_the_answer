import { createTheme } from '@material-ui/core/styles';
import interrogateImg from '../assets/images/interrogate.svg'

export const theme = createTheme({
  overrides: {
      MuiCssBaseline: {
          '@global': {
              body: {
                // backgroundColor: "#f7f7f7",
                backgroundImage: `url(${interrogateImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }
          }
      }
  }
});