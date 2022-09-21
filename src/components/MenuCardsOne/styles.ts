import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  cardWrapperOn: {
    display: 'flex',
    opacity: 1,
    transition: 'all 700ms',
    width: '100%',
    height: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 'auto',
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    overflow: 'hidden',
    filter: 'grayscale(0%) brightness(100%)',
  },
  cardWrapperOff: {
    opacity: 1,
    filter: 'grayscale(100%) brightness(10%)',
  },
}));
