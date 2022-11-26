import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    background: '#fff',
    borderRadius: 10,
    padding: 20,
    minWidth: 100,
    maxWidth: 500,
    width: '80%',
    position: 'fixed',
    bottom: 20,
    zIndex: 103,
    margin: 'auto',
    boxShadow: '5px 5px 30px 40px rgba(0,0,0,0.3)',
  },
  close: {
    position: 'absolute',
    right: -10,
    top: -10,
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
    '&:hover': { background: '#e8cf95' },
  },
  wrapper: {
    opacity: 1,
    transition: 'all 1700ms',
    minHeight: 40,
    display: 'fixed',
  },

  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: 20,
    width: 'calc(100% - 60px)',
  },
  row: {
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  hidden: { opacity: 0 },
}));
