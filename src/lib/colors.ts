import defaultTheme from 'windicss/defaultTheme';

export const colors: Record<string, Record<number, string>> = {
  ...defaultTheme.colors,
  gray: {
    50: '#f9fafb',
    100: '#eaeaeb',
    200: '#cacbcd',
    300: '#a7a9ac',
    400: '#696c71',
    500: '#282d34',
    600: '#24292f',
    700: '#181b20',
    800: '#121518',
    900: '#0c0e10',
  },
  primary: {
    50: '#e6fffa', // Lightest Teal
    100: '#b2f5ea',
    200: '#81e6d9',
    300: '#4dc8c2',
    400: '#30afb6',
    500: '#199a9b', // Mid Teal
    600: '#0e7f86',
    700: '#0a6b70',
    800: '#055657', // Darker Teal
    900: '#02403c', // Darkest Teal
  },
};
