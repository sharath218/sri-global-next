import React from "react";
import styles from "../styles/Reviews.module.scss";
import Slider from "react-slick";
import { Parallax } from "react-scroll-parallax";

const Reviews = () => {
	const settings = {
		
		dots: true,
		infinite: true,
		speed: 500,
		
		initialSlide: 0,
		autoplay: true,
		responsive: [
		  {
			breakpoint: 2024,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };
  return (
    <div id="reviews" className={styles.reviewContainer}>
      <Parallax y={[100, -10]} className={styles.titlebox}>
        <h1  className={styles.title}>
          REVIEWS<span className={styles.span}></span>
        </h1>
      </Parallax>
      <div className={styles.reviewbox} >
        <Slider {...settings}  >
          <div className={styles.reviewCard}>
		   <h3>hcbhbhmsndscnmdmnsjmnx cn</h3>
		   <p>-bndchbcd</p>
          </div>
		  <div className={styles.reviewCard}>
		   <h3>hcbhbhmsndscnmdmnsjmnx cn</h3>
		   <p>-bndchbcd</p>
          </div>
		  <div className={styles.reviewCard}>
		   <h3>hcbhbhmsndscnmdmnsjmnx cn</h3>
		   <p>-bndchbcd</p>
          </div>
		  <div className={styles.reviewCard}>
		   <h3>hcbhbhmsndscnmdmnsjmnx cn</h3>
		   <p>-bndchbcd</p>
          </div>
		  <div className={styles.reviewCard}>
		   <h3>hcbhbhmsndscnmdmnsjmnx cn</h3>
		   <p>-bndchbcd</p>
          </div>
		  <div className={styles.reviewCard}>
		   <h3>hcbhbhmsndscnmdmnsjmnx cn</h3>
		   <p>-bndchbcd</p>
          </div>

        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
