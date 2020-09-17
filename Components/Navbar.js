import React, { useState,useEffect } from "react";
import styles from "../styles/Navbar.module.scss";
const Navbar = () => {
	const [ham, setham] = useState(false);
	const [nav, setNav] = useState(false);

	useEffect(function onFirstMount() {
		const navbackground = () => {
			if(window.scrollY >= 10 ){
				setNav(true);
			}else{
				setNav(false);
			}
		}
	
		window.addEventListener("scroll", navbackground);
	  }, []); 


	
	return (
		<div  className={ nav ? styles.navContainertrans : styles.navContainer}>
			<div className={styles.logoContainer}>
				<img
					className={styles.navLogoImage}
					src="/img/sri-global-logo.svg"
					alt="image1"
				/>
				<h1 className={styles.navLogoName}>
					Sri Gl
					<span className={styles.globebox}><img
					className={styles.globe}
					src="/img/globe.gif"
					alt="image1"
					/>
					<img
					className={styles.globering}
					src="/img/globe-ring.svg"
					alt="image1"
					/>
					</span>
					bal
				</h1>
			</div>

			<nav className={ !ham ? styles.navLinks : styles.slide }>
				
					<a href="/#services"><button onClick={()=>{setham(false)}} className={styles.navbtn}>SERVICES</button></a>
				
				
					<a href="/#reviews"><button onClick={()=>{setham(false)}} className={styles.navbtn}>REVIEWS</button></a>
				
				
					<a href="/#information"><button onClick={()=>{setham(false)}} className={styles.conatctbtn}>Contact Us</button></a>
				
			</nav>

			<div className={styles.menu} onClick={()=>{setham(!ham)}}>
            <div className={!ham ? styles.rect1 : styles.flip1}></div>
            <div className={!ham ? styles.rect2 : styles.flip2}></div>
            <div className={!ham ? styles.rect3 : styles.flip3}></div>
          </div>
		</div>
	);
};

export default Navbar;
