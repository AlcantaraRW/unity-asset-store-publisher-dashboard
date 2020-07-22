import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      white: string;
      highlight: string;
      danger: string;
      line: string;
    };

    text: {
      primary: string;
      secondary: string;
    };
  }
}
