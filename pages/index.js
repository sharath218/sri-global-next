import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import Welcome from '../Components/Welcome'
import Services from '../Components/Services'
import Reviews from '../Components/Reviews'
import Information from '../Components/Information'
import Footer from '../Components/Footer'
import { ParallaxProvider } from 'react-scroll-parallax';
import Test from '../Components/Test'

export default function Home() {
  return (
    <ParallaxProvider>
      {/* <Test/> */}
      <Navbar/>
      <Welcome/>
      <Services/>
      <Reviews/>
      <Information/> 
       <Footer/>
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
    </ParallaxProvider>
  )
}
