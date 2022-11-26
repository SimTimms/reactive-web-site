import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  cardWrapperOn: {
    display: 'flex',
    opacity: 1,
    width: '100%',
    height: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    filter: 'grayscale(0%) brightness(100%)',
    maxHeight: '90vh',
    position: 'absolute',
    boxSizing: 'border-box',
    top: 0,
  },
  cardWrapperOff: {
    opacity: 1,
    filter: 'grayscale(100%) brightness(10%)',
  },
  wrapperOne: {
    position: 'fixed',
    top: '-100vh',
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    flexDirection: 'column',
    transition: 'all 1s',
    zIndex: 102,
  },
  wrapperOneOn: {
    top: 0,
  },
}));
