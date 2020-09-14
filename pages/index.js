import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import Welcome from '../Components/Welcome'
import Services from '../Components/Services'
import Reviews from '../Components/Reviews'
import Information from '../Components/Information'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Welcome/>
      <Services/>
      <Reviews/>
      <Information/> 
       <Footer/>
    </div>
  )
}
