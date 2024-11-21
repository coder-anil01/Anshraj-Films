import React from 'react'
import SlickHomePage from '../components/SlickHomePage'
import '../style/HomePage.css'
const HomePage = () => {
  return (
    <>
      {/* Top carsol */}
        <SlickHomePage/>

        {/* MONETIZATION */}
        <div className='monetization'>
          <h1 className='homepage-h1'>MONETIZATION</h1>
          <h3 className='homepage-h3'>AUDIO & VIDEO DISTRIBUTION ON</h3>

          <div className="homepage-monetization-images">
              <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113083/homepage-monetization-spotify_jqywrn.jpg" alt="" />
              <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113083/homepage-monetization-youtube_exyy64.jpg" alt="" />
              <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113083/homepage-monetization-amazon-prime_kzlidj.jpg" alt="" />
              <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113108/homepage-monetization-itunes_lwelyb.jpg" alt="" />
          </div>
        </div>

      {/* ABOUT */}
      <div className="about">
        <h1 className='homepage-h1'>ABOUT US</h1>
          <p>Nirvana Digital empowers content owners to monetize their music and video on premiere Internet, OTT and mobile platforms including YouTube, Amazon, HULU, Netflix, Apple iTunes, Spotify and more. We work with small, medium and large content owners and help them showcase their content worldwide to generate revenue immediately.</p>
          <p>Nirvana Digital also owns one of the largest YouTube Networks in Asia - monetizing and providing Rights Management of over 400,000 videos from studios, networks, broadcasters, rights holders, labels and independent creators.</p>
      </div>
      {/* NEWS */}
      <div className="news">
        <h1>NEWS</h1>
        <div className="news-card-container">
          <div className="news-card">
            <div>
              <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113084/news_meetthedrapers_355X176_p53bim.jpg" alt="" className="news-img" />
            </div>
            <p>Aug 09, 2024</p>
            <h2>Indian Best web series</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptates delectus aliquid odio doloribus nesciunt, non corrupti eaque. Nostrum, dolore?
              <a href="">more...</a>
            </p>
          </div>
          <div className="news-card">
            <div>
              <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113082/BilzMusic-Main_kvxoku.jpg" alt="" className="news-img" />
            </div>
            <p>Aug 09, 2024</p>
            <h2>Indian Best web series</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptates delectus aliquid odio doloribus nesciunt, non corrupti eaque. Nostrum, dolore?
              <a href="">more...</a>
            </p>
          </div>
          <div className="news-card">
            <div>
              <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113084/Pinakin-Thakkar_hwmo0m.jpg" alt="" className="news-img" />
            </div>
            <p>Aug 09, 2024</p>
            <h2>Indian Best web series</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptates delectus aliquid odio doloribus nesciunt, non corrupti eaque. Nostrum, dolore?
              <a href="">more...</a>
            </p>
          </div>
          <div className="news-card">
            <div>
              <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113084/news_meetthedrapers_355X176_p53bim.jpg" alt="" className="news-img" />
            </div>
            <p>Aug 09, 2024</p>
            <h2>Indian Best web series</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptates delectus aliquid odio doloribus nesciunt, non corrupti eaque. Nostrum, dolore?
              <a href="">more...</a>
            </p>
          </div>
          <div className="news-card">
            <div>
              <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113082/BilzMusic-Main_kvxoku.jpg" alt="" className="news-img" />
            </div>
            <p>Aug 09, 2024</p>
            <h2>Indian Best web series</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptates delectus aliquid odio doloribus nesciunt, non corrupti eaque. Nostrum, dolore?
              <a href="">more...</a>
            </p>
          </div>
          <div className="news-card">
            <div>
              <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113084/Pinakin-Thakkar_hwmo0m.jpg" alt="" className="news-img" />
            </div>
            <p>Aug 09, 2024</p>
            <h2>Indian Best web series</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptates delectus aliquid odio doloribus nesciunt, non corrupti eaque. Nostrum, dolore?
              <a href="">more...</a>
            </p>
          </div>
        </div>
      </div>

      {/* NETWORKS */}
      <div className="homepage-networks">
        <h1 className="homepage-h1">ANSHRAJ YOUTUBE NETWORK</h1>
        <div className="homepage-networks-card-container">
          <div className="homepage-networks-card">
            <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113085/youtube-logo_lvrgri.png" />
            <div>30000+ Videos</div>
          </div>
          <div className="homepage-networks-card">
            <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113085/youtube-logo_lvrgri.png" />
            <div>5B + Views</div>
          </div>
        </div>
      </div>
      {/* CONTACT */}

    </>
  )
}

export default HomePage
