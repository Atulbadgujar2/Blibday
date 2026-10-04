import { useContext } from 'react';
import { useTheme } from './ThemeProvider';

export const useThemeHelper = () => useContext(useTheme);
