import { makeStyles } from '@mui/styles';
import { ENUM_COLORS } from '../../enum';

export const useStylesOne = makeStyles((theme) => ({
  button: {
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 2300ms',
    margin: 4,
    width: '20%',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'rgba(0,0,0,0)',
    display: 'flex',
    alignItems: 'center',
    opacity: 0.8,
    '&:hover': { transition: 'all 300ms', color: '#222', opacity: 1 },
  },
}));
