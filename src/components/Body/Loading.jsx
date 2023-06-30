import { ScaleLoader } from 'react-spinners';
import styles from './loading.module.scss';
import logo from '../../img/logo.png';

function Loading() {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logoLoading}>
        <div>{/* <h5>Weather</h5> */}</div>
        <div>
          <img src={logo} alt="logo" />
          <ScaleLoader color="#5cadec" height={15} />
        </div>
      </div>
    </div>
  );
}

export default Loading;
