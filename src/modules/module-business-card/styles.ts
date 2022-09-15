import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    width: '100%',
    height: '100%',
    padding: 10,
    boxSizing: 'border-box',
    maxWidth: 300,
    opacity: 0,
    transition: 'all 1700ms',
  },
  cardWrapperOn: {
    opacity: 1,
  },
  cardWrapperBox: {
    borderRadius: 0,
    position: 'relative',
    zIndex: 11,
    width: '100%',
    boxSizing: 'border-box',
  },
  tim: { transition: 'all 1700ms', marginLeft: 'auto' },
  cardDesign: {
    width: '100%',
    paddingTop: '60%',
    zIndex: 10,
    borderRadius: 4,
    boxShadow: '5px 5px 10px rgba(0,0,0,0.3)',
    backgroundColor: '#e2e2df',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxSizing: 'border-box',
    position: 'relative',
    opacity: 1,
    filter: 'grayscale(70%)',
    '&:hover': { filter: 'grayscale(0%)' },
  },
  cardDesignPos: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(255,255,255,0.9)',
    padding: 20,
  },

  title: {
    width: '100%',
    textAlign: 'center',
    borderRadius: '3px 3px 0 0',
    paddingTop: 3,
  },
  titleFont: {
    fontSize: '12px !important',
    fontWeight: '800 !important',
  },

  cardUp: {},
  description: {
    textAlign: 'center',
    borderRadius: 2,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 4,
  },
  descriptionTwo: {
    textAlign: 'center',
    borderRadius: 0,
    marginRight: 10,
    marginLeft: 10,
  },
  descriptionFont: {
    fontSize: '14px !important',
  },
}));
