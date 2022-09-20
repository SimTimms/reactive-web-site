import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  tim: {
    transition: 'all 1700ms',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
    height: '100vh',
    cursor: 'pointer',
  },
  timOn: {
    transition: 'all 500ms',
  },
}));
