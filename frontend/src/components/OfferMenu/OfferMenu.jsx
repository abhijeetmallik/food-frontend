import React, { useRef, useState } from "react";
import "./OfferMenu.css";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { assets } from "../../assets/assets";


const restaurants = [
  {
    img: assets.offer1,
    discount: "20% OFF UPTO ₹50",
    name: "Restaurant 1",
    rating: "4.6",
    deliveryTime: "15-20 mins",
    description: "Short description",
    location: "India",
  },
  {
    img: assets.offer2,
    discount: "20% OFF UPTO ₹50",
    name: "Restaurant 2",
    rating: "4.6",
    deliveryTime: "15-20 mins",
    description: "Short description",
    location: "India",
  },
  {
    img: assets.offer3,
    discount: "20% OFF UPTO ₹50",
    name: "Restaurant 1",
    rating: "4.6",
    deliveryTime: "15-20 mins",
    description: "Short description",
    location: "India",
  },
  {
    img: assets.offer4,
    discount: "20% OFF UPTO ₹50",
    name: "Restaurant 2",
    rating: "4.6",
    deliveryTime: "15-20 mins",
    description: "Short description",
    location: "India",
  },
  {
    img: assets.offer1,
    discount: "20% OFF UPTO ₹50",
    name: "Restaurant 1",
    rating: "4.6",
    deliveryTime: "15-20 mins",
    description: "Short description",
    location: "India",
  },
  {
    img: assets.offer2,
    discount: "20% OFF UPTO ₹50",
    name: "Restaurant 2",
    rating: "4.6",
    deliveryTime: "15-20 mins",
    description: "Short description",
    location: "India",
  },
  
];

const OfferMenu = () => {
  const sliderRef = useRef(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setIsLeftDisabled(scrollLeft <= 0);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
      
      <div className="restaurant-container">
        <div className="label-container">
          <h1>Explore our offers</h1>
          
            <FaChevronCircleLeft className="restaurant-arrow-left"
            onClick={scrollLeft}
            disabled={isLeftDisabled} />
          
            &nbsp; &nbsp;
            
            <FaChevronCircleRight className="restaurant-arrow-right"
            onClick={scrollRight}
            disabled={isRightDisabled} />
          
        </div>
        <div
          className="card-slider"
          ref={sliderRef}
          onScroll={handleScroll}
        >
          {restaurants.map((restaurant, index) => (
            <div className="restaurant-card" key={index}>
              <div className="image-container">
                <img src={restaurant.img} alt={restaurant.name} />
                <div className="discount-badge">{restaurant.discount}</div>
              </div>
              {/* <h3 className="restaurant-name">{restaurant.name}</h3> */}
              <div className="info-container">
                <div className="info-row">
                  {/* <div className="rating">
                    <span className="rating-star">
                      <i className="bi bi-star-fill star"></i>
                    </span>
                    <span className="review-count">({restaurant.rating})</span>
                  </div>
                  <div className="delivery-info">
                    <i className="bi bi-dot"></i> {restaurant.deliveryTime}
                  </div> */}
                </div>
                {/* <p>{restaurant.description}</p>
                <p>{restaurant.location}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default OfferMenu;
