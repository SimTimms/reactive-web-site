import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  rootButton: {
    position: 'absolute',
    color: '#fff',
    textShadow: '0px 0px 5px  #fff',
    fontSize: '1.2rem !important',
    cursor: 'pointer',
    transition: 'all 1200ms',
    zIndex: 20,
    '&:hover': {
      transition: 'all 200ms',

      color: '#f285ee !important',
      textShadow: '5px 0px 15px rgba(0,0,0,0.3)',
    },
  },
}));
