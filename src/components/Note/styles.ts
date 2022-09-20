import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  noteWrapper: {
    zIndex: 12,
    width: '10%',
    marginRight: '2%',
    boxSizing: 'border-box',
    filter: 'grayscale(100%) brightness(200%)',
    opacity: 0.8,
    overflow: 'hidden',
    height: '100%',
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  note: {
    boxSizing: 'border-box',
    position: 'absolute',
    top: '0%',
    transition: 'all 600ms ',
    width: '100%',
    height: '100%',
  },
  noteOff: {
    top: `90%`,
  },
  noteWrapperOff: {
    top: '100%',
  },
}));
