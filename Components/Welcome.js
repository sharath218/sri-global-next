import React from "react";
import styles from "../styles/Welcome.module.scss";
const Welcome = () => {
	return (
		<div className={styles.welcomeContainer}>
			<div className={styles.welcomeTextConatiner}>
				<img
					className={styles.steth}
					src="/img/steth.png"
					alt="image1"
					/>
				<img
					className={styles.welcomeTextLogo}
					src="/img/sri-global-logo.svg"
					alt="image1"
				/>
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
				
			<div className={styles.welcomeImageConatiner}>
				<img
					className={styles.welcomeImage}
					src="/img/nurses withlogo.svg"
					alt="image1"
				/>
			</div>
		</div>
	);
};

export default Welcome;