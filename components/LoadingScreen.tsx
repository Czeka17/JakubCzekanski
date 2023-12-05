import React, { useEffect } from 'react';
import { FaCode } from 'react-icons/fa';
import styles from './LoadingScreen.module.scss'

const LoadingScreen: React.FC = () => {
  const ref = React.createRef<any>();

  useEffect(() => {
    if (ref.current) {
      ref.current.continuousStart();
    }

    return () => {
      if (ref.current) {
        ref.current.complete();
      }
    };
  }, []);

  return (
    <div className={styles.main}>
      <p className={styles.text}>JC<FaCode/></p>
      <div className={styles.wrapper}>
    <div className={styles.circle}></div>
    <div className={styles.circle}></div>
    <div className={styles.circle}></div>
    <div className={styles.shadow}></div>
    <div className={styles.shadow}></div>
    <div className={styles.shadow}></div>
</div>
    </div>
  );
};

export default LoadingScreen;
