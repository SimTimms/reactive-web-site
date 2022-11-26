import { makeStyles } from '@mui/styles';
import { ENUM_COLORS } from '../../enum';

export const useStylesOne = makeStyles((theme) => ({
  button: {
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 1300ms',
    margin: 4,
    paddingTop: 5,
    paddingBottom: 5,
    background: 'rgba(0,0,0,0)',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    '&:hover': {
      transition: 'all 300ms',
      opacity: 1,
      background: 'rgba(0,0,0,0.7)',
    },
  },
}));
