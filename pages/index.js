import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import Welcome from '../Components/Welcome'
import Services from '../Components/Services'
import Reviews from '../Components/Reviews'
import Information from '../Components/Information'
import Footer from '../Components/Footer'
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <ParallaxProvider>
      <Navbar/>
      <Welcome/>
      <Services/>
      <Reviews/>
      <Information/> 
       <Footer/>
    </ParallaxProvider>
  )
}
