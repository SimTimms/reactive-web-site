import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  widgetWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: `140px !important`,
    padding: 20,
    borderRadius: 10,
    margin: 20,
    border: '2px solid #fff',
    filter: 'grayscale(100%) brightness(10%)',
    transition: 'all 2300ms',
    opacity: 0,
  },
  widgetWrapperOn: {
    transition: 'all 300ms',
    opacity: 1,
    filter: 'grayscale(0%) brightness(100%)',
    textShadow:
      '0px 0px 14px #fe02fb, 0px 0px 14px #fe02fb,0px 0px 14px #fe02fb',
    boxShadow:
      '0px 0px 14px #fe02fb, 0px 0px 14px #fe02fb,inset 0px 0px 14px #fe02fb',
  },
  neonSign: {
    fontSize: `30px !important`,
    color: '#fff',

    fontWeight: '200 !important',
    fontFamily: `'Monoton', cursive !important`,
  },
}));
