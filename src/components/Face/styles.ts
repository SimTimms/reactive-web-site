import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: 26,
    alignItems: 'center',
    background: '#e8cf95',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 3,
    boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
    border: '1px solid #fff',
  },
  eye: {
    background: '#222',
    height: 10,
    width: 4,
    borderRadius: 3,
    margin: 2,
  },
  mouth: {
    background: '#222',
    height: 2,
    width: 6,
    borderRadius: 3,
    margin: '0 auto 2px auto',
  },
}));
