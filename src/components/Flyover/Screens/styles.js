import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  blankScreen: {
    transition: 'all 700ms',
    width: '30%',
    height: '30%',
    background: '#000',
    position: 'absolute',
    top: '24%',
    left: '36%',
    zIndex: 1,
    opacity: 0,
  },
  blankScreenOff: { opacity: 1 },
  shadow: {
    width: '80%',
    height: '80%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    zIndex: 0,
    filter: 'brightness(0%) blur(10px)',
    opacity: 0.5,
    marginTop: '14%',
    marginLeft: '4%',
  },
}));
