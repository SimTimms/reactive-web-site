import { useStyles } from './styles';

export default function Face(props: { color: string }): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div style={{ display: 'flex' }}>
        <div className={classes.eye}></div>
        <div className={classes.eye}></div>
      </div>
      <div className={classes.mouth}></div>
    </div>
  );
}
