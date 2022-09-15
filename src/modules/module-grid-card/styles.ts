import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    width: '20%',
    height: '20%',
    padding: 10,
    boxSizing: 'border-box',
    opacity: 0,
    transition: 'opacity 1700ms, background-color 5000ms',
    margin: 0,
    boxShadow: '2px 2px 10px rgba(0,0,0,0.7)',
    background: '#ed4eeb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  cardWrapperYellow: {
    background: '#f2bd68',
  },
  cardWrapperPurple: {
    background: '#ed4eeb',
  },
  cardWrapperOn: {
    opacity: 1,
    background: '#19bfb7',
    '&:hover': {
      transition: 'opacity 700ms,background-color 100ms',
      background: '#f2bd68',
    },
  },
  cardWrapperOnPurple: {
    opacity: 1,
    background: '#19bfb7',
    '&:hover': {
      transition: 'opacity 700ms,background-color 100ms',
      background: '#ed4eeb',
    },
  },
  cardWrapperBox: {
    zIndex: 11,
    width: '100%',
    minHeight: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}));
