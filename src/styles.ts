import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    background: '#353b45',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'auto',
  },
  tim: {
    transition: 'all 1700ms',
    filter: 'grayscale(100%) brightness(30%)',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
    height: '100vh',
  },
  timOn: {
    filter: 'grayscale(0%) brightness(100%)',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  state1: {
    display: 'flex',
    width: '100%',
    opacity: 1,
    transition: 'all 700ms',
    position: 'relative',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  state2: {
    display: 'flex',
    width: '60%',
    opacity: 1,
    transition: 'all 700ms',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  state3: {
    opacity: 1,
  },
}));
