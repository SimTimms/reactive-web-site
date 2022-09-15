import { reactiveWeb } from '../../assets';
import { useStyles } from './styles';

export default function Logo(props: { isOn: boolean }): JSX.Element {
  const classes = useStyles();
  const { isOn } = props;
  return (
    <div>
      <img
        src={reactiveWeb}
        className={`${classes.logo} ${isOn && classes.logoOn}`}
      />
    </div>
  );
}
