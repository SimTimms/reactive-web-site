import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  blankScreen: {
    transition: 'all 700ms',
    width: '30%',
    height: '30%',
    background: '#000',
    position: 'absolute',
    top: '9vw',
    left: '20vw',
    zIndex: 1,
    opacity: 0,
  },
  blankScreenOff: { opacity: 1 },
}));
