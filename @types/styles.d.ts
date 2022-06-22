// import original module declaration
import 'styled-components';
import { string } from 'yup';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      disabledColor: string;
    };
  }
}
