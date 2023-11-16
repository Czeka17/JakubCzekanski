import styles from "./header.module.scss";
import { useState,useEffect,useRef, RefObject } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function Header() {
	const [letterStatus, setLetterStatus] = useState([]);
  const codeRef: RefObject<HTMLDivElement> = useRef(null);

  const handleCodeClick = () => {
    codeRef.current?.setAttribute('contentEditable', 'true');
    codeRef.current?.focus();
  };

  const handleCodeBlur = () => {
    codeRef.current?.setAttribute('contentEditable', 'false');
  };
 
  const fullCode = `
  <main>
    <div className={styles.container}>
      <div className={styles.header__box}>
        <h2 className={styles["header__box-h2"]}>
          Hello!
        </h2>
      </div>
      <div className={styles.header__box}>
        <p className={styles["header__box-text"]}>
          Welcome to my porfolio page!
        </p>
      </div>
    </div>
  </main>
  `;

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
        <div className={styles["header__content-code"]} ref={codeRef}
        onClick={handleCodeClick}
        onBlur={handleCodeBlur}
        contentEditable={false}>
        <SyntaxHighlighter language="jsx" style={materialDark} className={styles["transparent-background"]}>
  {fullCode}
</SyntaxHighlighter>

        </div>
			</div>
		</header>
	);
}
export default Header;
