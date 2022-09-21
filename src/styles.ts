import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    background: '#353b45',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    overflow: 'hidden',
    width: '100vw',
    height'100%'
  },
  menuWrapper: {
    background: 'rgba(0, 0, 0, 0.)',
    zIndex: 100,
    position: 'fixed',
    top: 0,
    left: 0,
    opacity: 0,
    width: '100vw',
    height: '100vh',
    marginTop: '-100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 700ms',
  },
  menuWrapperOn: {
    background: 'rgba(0, 0, 0, 0.8)',
    marginTop: '0',
    top: 0,
    left: 0,
    opacity: 1,
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
