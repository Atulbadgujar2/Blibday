import React, { createContext, useEffect, useState, useContext } from 'react';
import { lightColors, darkColors } from "./Colors";
import { useColorScheme } from 'react-native';
export const ThemeContex = createContext({
  dark: false,
  colors: lightColors,
  setScheme: () => {},
});

export const ThemeProvider = props => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme == "dark");

  useEffect(() => {
    setIsDark(colorScheme == "dark");
  }, [colorScheme]);
  const defaultTheme = {
    dark: isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: scheme => setIsDark(scheme == 'dark'),
  };
  return (
    <ThemeContex.Provider value={defaultTheme}>
      {props.children}
    </ThemeContex.Provider>
  )
}

// Create custom heek for accessing all the value
export const useTheme = ThemeContex

