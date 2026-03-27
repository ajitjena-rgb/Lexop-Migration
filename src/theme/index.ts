// Radiant UI Chakra theme — sourced from Radiant repo
// workflow-manager/src/radiant/theme/src/lib/
import { extendTheme } from '@chakra-ui/react';
import { ThemeColors as C } from './colors';

const ButtonTheme = {
  baseStyle: {
    borderRadius: '16px',
    fontFamily: 'inherit',
    outline: 0,
    _focus: { outline: 0, boxShadow: 'none' },
    _active: { outline: 0, boxShadow: 'none' },
    _disabled: { opacity: 1, pointerEvents: 'none', cursor: 'not-allowed' },
  },
  sizes: {
    sm: {
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18px',
      px: '0.5rem',
      height: '30px',
    },
    md: {
      borderRadius: '16px',
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '24px',
      px: '2rem',
      py: '9px',
      height: '42px',
    },
    lg: {
      borderRadius: '16px',
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '24px',
      px: '2rem',
      py: '18px',
      height: '60px',
    },
  },
  variants: {
    primary: {
      bg: C.primary.green.emerald,
      color: C.grayscale.white,
      _hover: { bg: C.primary.green.dark },
      _disabled: { color: C.grayscale.greyDisabled, bg: C.grayscale.grey },
    },
    secondary: {
      bg: C.grayscale.grey,
      color: C.primary.black,
      _hover: { bg: C.grayscale.greySpecial },
      _disabled: { color: C.grayscale.greyDisabled },
    },
    minimal: {
      bg: 'transparent',
      color: C.primary.black,
      _hover: { color: C.primary.green.main },
      _disabled: { color: C.grayscale.greyDisabled },
      px: 2,
    },
    danger: {
      bg: C.accent.red,
      color: C.grayscale.white,
      _hover: { bg: C.accent.ruby },
      _disabled: { color: C.grayscale.greyDisabled, bg: C.grayscale.grey },
    },
    link: {
      color: C.primary.green.main,
      p: 0,
      fontSize: '14px',
      fontWeight: '700',
      _hover: { textDecoration: 'none' },
      _disabled: { color: C.grayscale.greyDisabled },
    },
    pagination: {
      bg: 'transparent',
      borderRadius: '8px',
      color: C.primary.grey[2],
      fontWeight: 400,
      _hover: { color: C.primary.black, fontWeight: 700 },
      _active: { color: C.primary.black, bg: C.additional.green.light, fontWeight: 700 },
      _disabled: { color: C.grayscale.greyDisabled },
      width: '30px',
      height: '30px',
      minWidth: '30px',
      px: 0,
    },
  },
  defaultProps: { size: 'md', variant: 'primary' },
};

const TabsTheme = {
  parts: ['tab', 'tablist', 'tabpanel'],
  baseStyle: {
    tab: {
      color: C.primary.grey[2],
      border: '0px',
      fontSize: '14px',
      fontWeight: '400',
      _selected: {
        outline: 0,
        boxShadow: 'none',
        color: C.primary.black,
        borderBottom: '3px solid',
        borderColor: C.primary.black,
        borderRadius: '3px',
        fontWeight: '700',
      },
      _active: { outline: 0, boxShadow: 'none' },
    },
    tablist: { border: '0px' },
    tabpanel: { outline: 0, px: 0 },
  },
  variants: {
    line: {
      tab: { _selected: { color: C.primary.black, fontWeight: '700' } },
      tablist: { borderBottom: '0px' },
    },
  },
  defaultProps: { variant: 'line' },
};

export const theme = extendTheme({
  fonts: {
    body: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
    heading: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
  },
  colors: {
    brand: {
      emerald: C.primary.green.emerald,
      dark: C.primary.green.dark,
    },
  },
  styles: {
    global: {
      body: {
        color: C.primary.black,
        bg: C.grayscale.white,
        fontSize: '14px',
      },
    },
  },
  components: {
    Button: ButtonTheme,
    Tabs: TabsTheme,
  },
});

export default theme;
