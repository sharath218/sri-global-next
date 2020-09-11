import React from "react";
import styles from "../styles/Reviews.module.scss";
import Slider from "react-slick";
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
    <div className={styles.reviewContainer}>
      <div className={styles.titlebox}>
        <h1 className={styles.title}>
          REVIEWS<span className={styles.span}></span>
        </h1>
      </div>
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
