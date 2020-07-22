import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components';

import AsyncStorage from '@react-native-community/async-storage';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IThemeContextData {
  currentTheme: DefaultTheme;
  toggleTheme(): void;
}

const THEME_KEY = 'currentThemeTitle';

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(light);

  useEffect(() => {
    AsyncStorage.getItem(THEME_KEY).then(themeTitle => {
      setCurrentTheme(themeTitle === light.title ? light : dark);
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setCurrentTheme(theme => (theme.title === dark.title ? light : dark));
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(THEME_KEY, currentTheme.title);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContextData {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
