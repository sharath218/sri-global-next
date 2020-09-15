import React from "react";
import styles from "../styles/Welcome.module.scss";
import { Parallax } from "react-scroll-parallax";

const Welcome = () => {
	return (
		<div className={styles.welcomeBox}>
				<div className={styles.welcomeContainer}>
			<div>
				<img
					className={styles.steth}
					src="/img/steth.png"
					alt="image1"
					/>
				</div>
			<div className={styles.welcomeTextConatiner}>
				<Parallax y={[20,-20]}>	
				<img
					className={styles.welcomeTextLogo}
					src="/img/sri-global-logo.svg"
					alt="image1"
				/>
				</Parallax>
				<Parallax y={[30,-10]} >
					<h1 className={styles.welcomeTextTitle}>
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
				</Parallax>
				<h3 className={styles.welcomeTextSubTitle}>Home Care Nursing Services</h3>
				<p className={styles.welcomeTextInfo}>
					stay in the<span className={styles.texthighlight}> Comfort </span>&amp;<span className={styles.texthighlight}> Safety </span> of your own home
				</p>
				<div className={styles.callbtnbox}>
				<a href="tel:9494129299">
				<button className={styles.navbtn}>
					+91 1234567890
				</button>
				</a>
				<a href="tel:9494129299">
				<button className={styles.navbtn}>
					+91 1234567890
				</button>
				</a>
				</div>
				{/* <a href="https://api.whatsapp.com/send?phone=+919494129299">Send Message</a> */}
				<button className={styles.whatsApp}>
					<a href="https://wa.me/+919494129299">
					
				<img
					className={styles.whatsAppimage}
					src="/img/whatsapp.png"
					alt="image1"
					
					/>
					</a>
				</button>
			</div>
			<Parallax y={[50,-50]}>	
			<div className={styles.welcomeImageConatiner}>
				<img
					className={styles.welcomeImage}
					src="/img/nurses withlogo.svg"
					alt="image1"
				/>
			</div>
			</Parallax>
		</div>
	
		</div>
	);
};

export default Welcome;
