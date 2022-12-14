import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  circleOne: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: `2px solid #19bfb7`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 5px 1px #19bfb7, inset 0 0 5px 1px rgba(0,0,0,0.3)',
    transition: 'all 700ms',
    position: 'fixed',
    top: 'calc(50% - 20px)',
    right: 'calc(50% - 20px)',
    zIndex: 12,
  },
  moveTop: {
    position: 'fixed',
    right: 10,
    top: 10,
  },
  circleTwo: {
    width: 26,
    height: 26,
    borderRadius: '50%',
    border: `1px solid #19bfb7`,
    boxShadow:
      '0 0 5px 7px rgba(255,255,255,0.1), inset 0 0 5px 1px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'all 500ms',
    color: 'rgba(255,255,255,0.9)',
    '&:hover': {
      border: `1px solid #fff`,
      background: 'rgba(25,	191,	183,1)',
      color: 'rgba(255,255,255,1)',
      boxShadow:
        '0 0 5px 7px rgba(255,255,255,0.8), inset 0 0 5px 1px rgba(0,0,0,0.1)',
    },
  },
}));
