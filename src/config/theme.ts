import { FontWeight } from '../types/typography';

export const theme = {
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          outline: 'none',
        },
      },
    },
  },
  spacing: 10,
  appBarHeight: 64,
  gridNegativeMargin: 12,
  sideNavWidth: 250,
  rfpHeaderHeight: 90,
  fixedHeaderHeight: 48,
  rightToolbarWidth: 56,
  rightPersistentDrawerWidth: 300,
  mainContainerPaddingTop: 30,
  mainContainerPaddingLeft: 250 + 12, // 250 from sideNavWidth
  mainContainerpaddingRight: 12,
  mainContainerpaddingBottom: 30,
  palette: {
    background: {
      default: '#F9FAFB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    primary: {
      main: '#435FBB',
      dark: '#24305A',
      light: '#A3B0DA',
      border: 'rgba(67, 95, 187, 0.5)',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#EF8354',
      dark: '#C06036',
      light: '#EABFAC',
      border: 'rgba(239, 131, 84, 0.5)',
      contrastText: '#FFFFFF',
    },
    actions: {
      main: '#E0E0E0',
      background: 'rgba(0, 0, 0, 0.08)',
      disabledText: 'rgba(0, 0, 0, 0.26)',
    },
    success: {
      main: '#4CAF50',
      dark: '#3B873E',
      light: '#7BC67E',
      border: 'rgba(76, 175, 80, 0.5)',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#2196F3',
      dark: '#0B79D0',
      light: '#64B6F7',
      border: 'rgba(33, 150, 243, 0.5)',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FF9800',
      dark: '#C77700',
      light: '#FFB547',
      border: 'rgba(255, 152, 0, 0.5)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    error: {
      main: '#F44336',
      dark: '#E31B0C',
      light: '#F88078',
      border: 'rgba(244, 67, 54, 0.5)',
      contrastText: '#FFFFFF',
    },
    other: {
      stroke: 'rgba(0, 0, 0, 0.23)',
      divider: '#E0E0E0',
      backdrop: 'rgba(0, 0, 0, 0.5)',
      snackbar: '#323232',
      activeRating: '#FFB400',
    },
  },
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195,
  },
  easing: {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  typography: {
    helperText: {
      fontSize: 12,
      fontWeight: FontWeight.NORMAL,
    },
    inputText: {
      fontSize: 16,
      fontWeight: FontWeight.NORMAL,
    },
    tooltip: {
      fontSize: 10,
      fontWeight: FontWeight.MEDIUM,
    },
    h1: {
      fontSize: 96,
      fontWeight: FontWeight.LIGHT,
    },
    h2: {
      fontSize: 60,
      fontWeight: FontWeight.LIGHT,
    },
    h3: {
      fontSize: 48,
      fontWeight: FontWeight.NORMAL,
    },
    h4: {
      fontSize: 34,
      fontWeight: FontWeight.NORMAL,
    },
    h5: {
      fontSize: 24,
      fontWeight: FontWeight.NORMAL,
    },
    h6: {
      fontSize: 20,
      fontWeight: FontWeight.MEDIUM,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: FontWeight.NORMAL,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: FontWeight.MEDIUM,
    },
    body1: {
      fontSize: 16,
      fontWeight: FontWeight.NORMAL,
    },
    body2: {
      fontSize: 14,
      fontWeight: FontWeight.MEDIUM,
    },
    button: {
      fontSize: 14,
      fontWeight: FontWeight.MEDIUM,
    },
    caption: {
      fontSize: 12,
      fontWeight: FontWeight.NORMAL,
    },
    overline: {
      fontSize: 12,
      fontWeight: FontWeight.NORMAL,
    },
  },
};

export default theme;
