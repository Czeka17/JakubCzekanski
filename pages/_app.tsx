// _app.tsx

import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import LoadingScreen from '@/components/LoadingScreen';
import '../public/globals.css';
import styles from './animations.module.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [appLoading, setAppLoading] = useState(true);
  const [loadingBarProgress, setLoadingBarProgress] = useState(0);
  const [delayedTransition, setDelayedTransition] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      const font = new FontFaceObserver('Poppins');

      try {
        await font.load();
        setAppLoading(false);
        setTimeout(() => {
          setDelayedTransition(true);
        }, 300);
      } catch (error) {
        console.error('Error loading fonts:', error);
        setAppLoading(false);
        setTimeout(() => {
          setDelayedTransition(true);
        }, 300);
      }
    };

    const fetchData = async () => {
      try {
        const totalSteps = 100;
        const stepDuration = 20;

        for (let step = 0; step <= totalSteps; step++) {
          setLoadingBarProgress((step / totalSteps) * 100);
          await new Promise((resolve) => setTimeout(resolve, stepDuration));
        }
        await loadFonts();
      } catch (error) {
        console.error('Error loading data:', error);
        setAppLoading(false);
        setTimeout(() => {
          setDelayedTransition(true);
        }, 300);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {!delayedTransition ? <div className={`${styles["loading-screen"]} ${appLoading ? '' : styles["fade-out"]}`}>
        <LoadingScreen />
      </div>
      :
      <div className={`${styles["app-content"]} ${appLoading ? styles["fade-out"] : styles["fade-in"]}`}>
        <Component {...pageProps} />
      </div>}
    </div>
  );
};

export default App;
