import styles from "./header.module.scss";
import { useState,useEffect,useRef, RefObject } from "react";
import {FaCode, FaLightbulb} from 'react-icons/fa'
import { RiComputerFill } from "react-icons/ri";

function Header() {
	const [letterStatus, setLetterStatus] = useState([]);
  const [light,setLight] = useState(true)
  const [animateChain, setAnimateChain] = useState(false);
  const [destroyLight, setDestroyLight] = useState([]);

  function destroyLightHandler(light:string){
    setDestroyLight((prevLights) => ({
      ...prevLights,
      [light]:true,
    }))
  }
  const handleLightSwitch = () => {
     setLight(prevState => !prevState)
     setAnimateChain(true);
     setTimeout(() => {
       setAnimateChain(false);
     }, 2000);
  }

	  const handleClick = (letter:string) => {
		setLetterStatus((prevStatus) => ({
		  ...prevStatus,
		  [letter]: true,
		}));
	  };
	return (
		<header className={styles.header}>
			<div className={styles.header__content}>
				<div>
					<p className={styles["header__content-p"]}>Hello, my name is</p>
					<h2 className={styles["header__content-name"]}> <span
              onClick={() => handleClick("1")}
              className={letterStatus["1"] ? styles.clicked : styles.clickable}
            >
            J
            </span>
            <span
              onClick={() => handleClick("2")}
              className={letterStatus["2"] ? styles.clicked : styles.clickable}
            >
              A
            </span>
            <span
              onClick={() => handleClick("3")}
              className={letterStatus["3"] ? styles.clicked : styles.clickable}
            >
              K
            </span>
            <span
              onClick={() => handleClick("4")}
              className={letterStatus["4"] ? styles.clicked : styles.clickable}
            >
              U
            </span>
            <span
              onClick={() => handleClick("5")}
              className={letterStatus["5"] ? styles.clicked : styles.clickable}
            >
              B
            </span><br/>
			<span onClick={() => handleClick("6")}
              className={letterStatus["6"] ? styles.clicked : styles.clickable}>C</span>
			<span onClick={() => handleClick("7")}
              className={letterStatus["7"] ? styles.clicked : styles.clickable}>Z</span>
			<span onClick={() => handleClick("8")}
              className={letterStatus["8"] ? styles.clicked : styles.clickable}>E</span>
			<span onClick={() => handleClick("9")}
              className={letterStatus["9"] ? styles.clicked : styles.clickable}>K</span>
			<span onClick={() => handleClick("10")}
              className={letterStatus["10"] ? styles.clicked : styles.clickable}>A</span>
			<span onClick={() => handleClick("11")}
              className={letterStatus["11"] ? styles.clicked : styles.clickable}>Ń</span>
			<span onClick={() => handleClick("12")}
              className={letterStatus["12"] ? styles.clicked : styles.clickable}>S</span>
			<span onClick={() => handleClick("13")}
              className={letterStatus["13"] ? styles.clicked : styles.clickable}>K</span>
			<span onClick={() => handleClick("14")}
              className={letterStatus["14"] ? styles.clicked : styles.clickable}>I</span>
			  </h2>
					<p className={styles["header__content-p"]}>
						Aspiring Fullstack Developer
					</p>
				</div>
    
        <div className={styles.line}>
          {!destroyLight["1"] ? <div className={`${light ? styles.bulb : styles.bul} ${light ? styles.turn : styles.turnoff}`} onClick={() => destroyLightHandler("1")}><FaLightbulb/>{light && <div className={styles.light}></div>}</div>: <div className={`${light ? styles.bulb : styles.bul} ${styles.destroyAnimation}`}><FaLightbulb/>{light && <div className={styles.light}></div>}<div className={styles.destroyed}></div></div>}
        </div>
        <div className={styles.line2}>
          {!destroyLight["2"] ? <div className={`${light ? styles.bulb : styles.bul} ${light ? styles.turn2 : styles.turnoff}`} onClick={() => destroyLightHandler("2")}><FaLightbulb/>{light && <div className={styles.light}></div>}</div> : <div className={`${light ? styles.bulb : styles.bul} ${destroyLight ? styles.destroyAnimation : ""}`}><FaLightbulb/>{light && <div className={styles.light}></div>}<div className={styles.destroyed}></div></div>}
        </div>
        <div
          className={`${styles.pullchain} ${
            light ? styles.chainOn : ''
          } ${animateChain ? styles.chainAnimation : ''}`}
          onClick={handleLightSwitch}
        >
    <div className={styles.chain}></div>
    <div className={styles.handle}></div>
</div>
<div className={styles.floatingSvg}><RiComputerFill size={36}/></div>
<div className={styles.floatingSvg2}><FaCode size={48}/></div>
			</div>
		</header>
	);
}
export default Header;
