import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  cardWrapperOn: {
    display: 'flex',
    opacity: 1,
    transition: 'all 700ms',
    width: '80vw',
    height: '80vh',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    overflow: 'hidden',
    filter: 'grayscale(0%) brightness(100%)',
  },
  cardWrapperOff: {
    opacity: 1,
    filter: 'grayscale(100%) brightness(10%)',
  },
}));
