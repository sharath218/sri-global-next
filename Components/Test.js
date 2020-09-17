import React from "react";
import styles from "../styles/Test.module.scss";

const Test = () => {
	return (
		<div>
			<div className={styles.context}>
				<h1>Pure Css Animated Background</h1>
			</div>

			<div className={styles.area}>
				<ul className={styles.circles}>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	);
};

export default Test;
