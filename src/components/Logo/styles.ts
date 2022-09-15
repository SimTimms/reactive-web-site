import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  logo: {
    maxWidth: 200,
    position: 'fixed',
    top: 'calc(50% - 80px)',
    left: 'calc(50% - 100px)',
    zIndex: 12,
    transition: 'all 700ms',
  },
  logoOn: {
    position: 'fixed',
    top: 10,
    left: 10,
  },
}));
