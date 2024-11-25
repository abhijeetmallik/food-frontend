import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p className='aboutus'>About Us <br /> <span>The Cakes Floor Location</span></p>
      <div className="app-download-platforms">
        {/* <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" /> */}
      </div>

      {/* About Section */}
      {/* <section className="about-section">
        <div className="container">
          <div className="row">
      
            <div className="image-column">
              <div className="inner-column wow fadeInLeft">
                
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      title="Rahul Kumar Yadav"
                      src={assets.cakesfloor}
                      alt="Rahul Kumar Yadav"
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>

          <div className="sec-title">
            <span className="title">Our Future Goal</span>
            <p>We want to lead in innovation & Technology</p>
          </div>
        </div>

      </section> */}


      {/* <br /> */}
      <div className="mapbox" data-mapbox>
        <figure>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5605529587974!2d84.62549517395048!3d25.251722129492766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d410f67931695%3A0x76f17ad79f808dd!2sA%20one%20fast%20food!5e0!3m2!1sen!2sin!4v1732214806727!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </div>
    </div>
  )
}

export default AppDownload
