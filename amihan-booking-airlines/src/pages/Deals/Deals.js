import "./deals.css";
import image1 from '../../assets/3.png';
import image2 from '../../assets/4.png';
import image3 from '../../assets/5.png';

import Carousel from 'react-bootstrap/Carousel';

export default function Deals() {
  return (
    <div className="container w-100 mt-5 min-vh-100">
      <div className="row justify-content-center text-center w-100 mx-auto">
        <h1 id="DealsText">DEALS</h1>

        <div className="border-dark rounded-1 w-100 w-md-75 w-lg-50 mx-auto carousel-wrapper">
          <Carousel data-bs-theme="dark" className="custom-carousel">
            <Carousel.Item>
              <div className="image-container">
                <img className="carousel-img d-block" src={image1} alt="First slide" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="image-container">
                <img className="carousel-img d-block" src={image2} alt="Second slide" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="image-container">
                <img className="carousel-img d-block" src={image3} alt="Third slide" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="mt-5">
          <h1 id="PromosText">PROMOS</h1>
          <div className="row m-4 gap-md-3 gap-0 justify-content-center rounded">

            <div id="FirstPromo" className="pt-4 px-4 col-12 col-md-5 col-lg-3 mb-4 text-center rounded">
              <h4 className="m-0 p-0">Amihan ₱1 Fare</h4>
              <p className="text-start text-light mt-3 fw-bolder">Description:</p>
              <div className="bg-dark px-2 rounded py-3">
                <p className="text-dark text-start">Experience the skies for as low as ₱1 base fare! Don’t miss out on this limited-time seat sale to your favorite local destinations. Perfect for budget-conscious travelers and spontaneous adventurers. Taxes and fees apply.</p>
              </div>
              <p className="text-end text-white mt-2">Promo duration: August 1, 2025 - August 31, 2025</p>
            </div>

            <div id="SecondPromo" className="pt-4 px-4 col-12 col-md-5 col-lg-3 mb-4 text-center rounded">
              <h4 className="m-0 p-0">Fly More, Save More</h4>
              <p className="text-start text-light mt-3 fw-bolder">Description:</p>
              <div className="bg-light px-2 rounded py-3">
                <p className="text-dark text-start">The more you book, the more you save! Enjoy tiered discounts when booking multiple seats in a single transaction—perfect for families, friends, and travel groups. Book 2 seats for 10% off, 4 for 15%, and 6 or more for 20% off!</p>
              </div>
              <p className="text-end text-light mt-2">Promo duration: July 1, 2025 - November 30, 2025</p>
            </div>

            <div id="ThirdPromo" className="pt-4 px-4 col-12 col-md-5 col-lg-3 mb-4 text-center rounded">
              <h4 className="m-0 p-0">Amihan GoLite</h4>
              <p className="text-start text-white mt-3 fw-bolder">Description:</p>
              <div className="bg-dark px-2 rounded py-3">
                <p className="text-dark text-start">Skip the check-in line and fly with just your carry-on! The Amihan GoLite promo offers discounted fares for passengers traveling light. Perfect for weekend getaways, quick business trips, and minimalist explorers.</p>
              </div>
              <p className="text-end text-white mt-2">Promo duration: June 15, 2025 - December 31, 2025</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
