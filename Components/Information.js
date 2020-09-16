import React, {useState} from 'react'
import Head from 'next/head'
import ReactMapGL from 'react-map-gl'
import styles from "../styles/Information.module.scss";
import Contact from './Contact';
import { Marker } from 'react-map-gl'
import { Parallax } from "react-scroll-parallax";

const Information = () => {
    const [viewport, setViewport] = useState({
        latitude: 17.388681, 
        longitude: 78.491432,
        width: "22em",
        height: "23em",
        zoom: 14,
    
      });
    return (
        <Parallax y={[10, -10]}>
                <Parallax y={[100, -10]}>
            <h1 id="information" className={styles.title}>WE ARE HERE</h1>
            </Parallax>
            <div  className={styles.infoContainer}>
            {/* <img
					className={styles.backImg}
					src="/img/Flat-Mountains.svg"
					alt="image1"
				/> */}
            <div className={styles.mapBox}>
            <ReactMapGL
                {...viewport}
                 mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                className={styles.mapBox}
                onViewportChange={viewport => {
                setViewport(viewport);
                }}
            >  
            <Marker latitude={17.388681} longitude={78.491432}>
            <img
					className={styles.markerimg}
					src="/img/sri-global-logo.svg"
					alt="image1"
				/>
            </Marker>
                </ReactMapGL>
            </div>
            <Parallax y={[15, -10]} className={styles.addressBox}>
                <h3 className={styles.addtitle}>Address</h3>
                <h5 className={styles.addinfotitle}> Sri Global Home Care Services </h5>    
              <p className={styles.addinfo}>No.3-3-173 and 173/1, Chappal Bazar, Kachiguda, Hyderabad - 500027, 
                  RelianceDigital Back Side
              </p>   
              
                  <a href="https://www.google.com/maps/place/17%C2%B023'19.3%22N+78%C2%B029'29.2%22E/@17.3886861,78.489238,17z/data=!3m1!4b1!4m13!1m6!3m5!1s0x3bcb99c937c6c545:0x82c294e437eb271d!2sSVS+Institute+of+Neurosciences!8m2!3d17.3892854!4d78.4929238!3m5!1s0x0:0x0!7e2!8m2!3d17.3886813!4d78.4914325">
                  <button className={styles.navBtn}>
                  Get Directions
                  </button> 
                  </a>
                 
             
             <p>Or</p>
             <button className={styles.whatsApp}>
					<a href="https://wa.me/+919494129299">
					
				<img
					className={styles.whatsAppimage}
					src="/img/whatsapp.png"
					alt="image1"
					
					/>
					</a>
				</button>
            </Parallax>
            <Parallax y={[15, -10]} className={styles.conatctBox}>
                <Contact/>
            </Parallax>
        </div>
        </Parallax>
    )
}

export default Information
