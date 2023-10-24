import React, { useEffect, useRef } from "react";

import {
	SiTypescript,
	SiJavascript,
	SiCss3,
	SiReact,
	SiRedux,
	SiPostman,
	SiNextdotjs,
	SiHtml5,
	SiGit,
	SiNpm,
	SiSass,
	SiTailwindcss,
	SiMongodb,
	SiFirebase,
	SiExpo,
	SiJest,
} from "react-icons/si";

import VanillaTilt from "vanilla-tilt";
import styles from "./skillsbox.module.scss";

const SkillsBox = () => {
	useEffect(() => {
		VanillaTilt.init(document.querySelectorAll(".card"), {
			max: 20,
			speed: 400,
		});
	}, []);
	return (
		<div className={styles.grid}>
			<div
				className={`card ${styles.card}`}
				data-tilt
				data-tilt-reverse='true'
				data-tilt-glare
				data-tilt-max-glare='0.8'
				data-tilt-scale='1.1'
			>
				<SiReact size={48} />
				<p>Reactjs</p>
			</div>
			<div
				className={`card ${styles.card}`}
				data-tilt
				data-tilt-reverse='true'
				data-tilt-glare
				data-tilt-max-glare='0.8'
				data-tilt-scale='1.1'
			>
				<SiRedux size={48} />
				<p>Redux</p>
			</div>
			<div
				className={`card ${styles.card}`}
				data-tilt
				data-tilt-reverse='true'
				data-tilt-glare
				data-tilt-max-glare='0.8'
				data-tilt-scale='1.1'
			>
				<SiCss3 size={48} />
				<p>CSS</p>
			</div>
			<div
				className={`card ${styles.card}`}
				data-tilt
				data-tilt-reverse='true'
				data-tilt-glare
				data-tilt-max-glare='0.8'
				data-tilt-scale='1.1'
			>
				<SiHtml5 size={48} />
				<p>HTML</p>
			</div>
			<div
				className={`card ${styles.card}`}
				data-tilt
				data-tilt-reverse='true'
				data-tilt-glare
				data-tilt-max-glare='0.8'
				data-tilt-scale='1.1'
			>
				<SiJavascript size={48} />
				<p>Javascript</p>
			</div>
			<div
				className={`card ${styles.card}`}
				data-tilt
				data-tilt-reverse='true'
				data-tilt-glare
				data-tilt-max-glare='0.8'
				data-tilt-scale='1.1'
			>
				<SiTypescript size={48} />
				<p>Typescript</p>
			</div>
			<div
				className={`card ${styles.card}`}
				data-tilt
				data-tilt-reverse='true'
				data-tilt-glare
				data-tilt-max-glare='0.8'
				data-tilt-scale='1.1'
			>
				<SiMongodb size={48} />
				<p>Mongodb</p>
			</div>
			<div
				className={`card ${styles.card}`}
				data-tilt
				data-tilt-reverse='true'
				data-tilt-glare
				data-tilt-max-glare='0.8'
				data-tilt-scale='1.1'
			>
				<SiSass size={48} />
				<p>SASS</p>
			</div>
			<div
				className={`card ${styles.card}`}
				data-tilt
				data-tilt-reverse='true'
				data-tilt-glare
				data-tilt-max-glare='0.8'
				data-tilt-scale='1.1'
			>
				<SiNextdotjs size={48} />
				<p>Nextjs</p>
			</div>
			<div
				className={`card ${styles.card}`}
				data-tilt
				data-tilt-reverse='true'
				data-tilt-glare
				data-tilt-max-glare='0.8'
				data-tilt-scale='1.1'
			>
				<SiFirebase size={48} />
				<p>Firebase</p>
			</div>
			<div
				className={`card ${styles.card}`}
				data-tilt
				data-tilt-reverse='true'
				data-tilt-glare
				data-tilt-max-glare='0.8'
				data-tilt-scale='1.1'
			>
				<SiTailwindcss size={48} />
				<p>TailwindCSS</p>
			</div>
			<div
				className={`card ${styles.card}`}
				data-tilt
				data-tilt-reverse='true'
				data-tilt-glare
				data-tilt-max-glare='1'
				data-tilt-scale='1.1'
			>
				<SiGit size={48} />
				<p>GIT</p>
			</div>
			<div
				className={`card ${styles.card}`}
				data-tilt
				data-tilt-reverse='true'
				data-tilt-glare
				data-tilt-max-glare='1'
				data-tilt-scale='1.1'
			>
				<SiReact size={48} />
				<p>React Native</p>
			</div>
			<div
				className={`card ${styles.card}`}
				data-tilt
				data-tilt-reverse='true'
				data-tilt-glare
				data-tilt-max-glare='1'
				data-tilt-scale='1.1'
			>
				<SiExpo size={48} />
				<p>Expo</p>
			</div>
			<div
				className={`card ${styles.card}`}
				data-tilt
				data-tilt-reverse='true'
				data-tilt-glare
				data-tilt-max-glare='1'
				data-tilt-scale='1.1'
			>
				<SiJest size={48} />
				<p>JEST</p>
			</div>
		</div>
	);
};

export default SkillsBox;
