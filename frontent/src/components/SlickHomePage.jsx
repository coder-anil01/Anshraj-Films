import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickHomePage = () => {
  return (
    <div>
      <Carousel>
            <div>
                <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113108/Pink_e7iayh.jpg" />
                <p className="legend">visit</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113086/Zindagi-Gulzar-Hai_sf0i0c.jpg" />
                <p className="legend">Zindagi Gulzar Hai</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113084/Chupan-Chupai-Netflix-Nirvana-Digital_c5odpf.jpg" />
                <p className="legend">Chupan Chupai</p>
            </div>
        </Carousel>
    </div>
  )
}

export default SlickHomePage
