import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  wrapper: {
    zIndex: 12,
    marginTop: '0',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    opacity: 0,
    transition: 'all 200ms',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  wrapperOn: {
    opacity: 1,
  },
  h1Title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '3vw !important',
    fontFamily: `'Rubik Burned', cursive !important`,
    textShadow: '4px 4px 6px rgba(0,0,0,1)',
  },
  wrapperTwo: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  wrapperThree: {
    position: 'absolute',
    width: '70%',
    top: '24%',
    height: '34%',
    left: '14%',
    zIndex: 12,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  screen: {
    position: 'absolute',
    width: '40%',
    top: '66%',
    height: '14%',
    left: '28%',
    zIndex: 12,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'hidden',
    border: '1px solid #444',
    boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.5)',
  },

  screenText: {
    color: '#fff',
    fontSize: '1.2vw !important',
    width: '100%',
    textAlign: 'center',
  },
}));
