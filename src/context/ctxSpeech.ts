import React from 'react';

export const ThemeContext = React.createContext<{
  bold?: string;
  text?: string;
  toggleTheme: (value: { bold: string; text: string }) => void;
}>({
  bold: '',
  text: '',
  toggleTheme: () => {},
});
