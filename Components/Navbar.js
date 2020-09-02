import React from "react";
import styles from "../styles/Navbar.module.scss";
const Navbar = () => {
	return (
		<div className={styles.navContainer}>
			<div className={styles.logoContainer}>
				<img
					className={styles.navLogoImage}
					src="/img/sri-global-logo.svg"
					alt="image1"
				/>
				<h1 className={styles.navLogoName}>SRI-GLOBAL</h1>
			</div>

			<nav className={styles.navLinks}>
				<button className={styles.navbtn}>
					<a href="/#services">SERVICES</a>
				</button>
				<button className={styles.navbtn}>
					<a href="/#reviews">REVIEWS</a>
				</button>
				<button className={styles.conatctbtn}>
					<span>Contact Us</span>
				</button>
			</nav>
		</div>
	);
};

export default Navbar;
