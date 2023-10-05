import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./home.css";
import {
  FaMobileAlt,
  FaUser,
  FaGooglePlay,
  FaApple,
  FaCheckCircle
} from "react-icons/fa";
import { BsCart,} from "react-icons/bs";
import meesho from "./asset/meesho-img.jpg";
import womens from "./asset/womens_store.jpg";
import mens from "./asset/mens_store.jpg";
import kids from "./asset/kids_store.jpg";
import homedecor from "./asset/homedecor.jpg";
import healthcare from "./asset/healthcare.jpg";
import kitchen from "./asset/kitchen.jpg";
import accessories from "./asset/accessories.jpg";
import footwear from "./asset/footwear.jpg";
import electronics from "./asset/electronics.jpg";
import kid1 from "./asset/dress/kid1.jpg";
import kid2 from "./asset/dress/kid2.jpg";
import men1 from "./asset/dress/men1.jpg";
import men2 from "./asset/dress/men2.jpg";
import women1 from "./asset/dress/women1.jpg";
import women2 from "./asset/dress/women2.jpg";

function Home() {
  function mensnavigate(){
    Navigator("/mens");
    }
    function kidsnavigate(){
    Navigator("/kids");
    }
    function womensnavigate() {
    Navigator("/womens");
    }
  const product = [
    {
      image: kid1,
      name: "kids dress",
      price: 240,
      offer: "19%offer",
      deliverytype: "Free Delivery",
      rating: "3.8*",
      reviews: "163 Reviews"
    },
    {
      image: kid2,
      name: "kids dress",
      price: 220,
      offer: "27%offer",
      deliverytype: "Free Delivery",
      rating: "4.3*",
      reviews: "196 Reviews"
    },
    {
      image: men1,
      name: "mens dress",
      price: 180,
      offer: "10%offer",
      deliverytype: "Free Delivery",
      rating: "2.8*",
      reviews: "120 Reviews"
    },
    {
      image: men2,
      name: "mens dress",
      price: 200,
      offer: "15%offer",
      deliverytype: "Free Delivery",
      rating: "4.5*",
      reviews: "170 Reviews"
    },
    {
      image: women1,
      name: "woens dress",
      price: 280,
      offer: "20%offer",
      deliverytype: "Free Delivery",
      rating: "4.1*",
      reviews: "164 Reviews"
    },
    {
      image: women2,
      name: "womens dress",
      price: 240,
      offer: "15%offer",
      deliverytype: "Free Delivery",
      rating: "3.8*",
      reviews: "136 Reviews"
    }
  ];
  
  return (
    <div className="home">
      <div className="navbar">
        <ul className="nav-left">
          <li>
            <Link to="/">meesho</Link>
          </li>
          <li>
            <input
              type={Text}
              id="search"
              placeholder="Try Saree,kurti are serarch by product code"
            />
          </li>
        </ul>
        <ul className="nav-right">
          <li>
            <FaMobileAlt />
            Download App
          </li>
          <hr />
          <li>Become a Supplier</li>
          <hr />
          <li className="fauser">
            <FaUser />
          </li>
          <li className="nav-right-profile">Profile</li>
          <li className="bscart">
            <BsCart />
          </li>
          <li className="nav-right-cart">Cart</li>
        </ul>
      </div>
      <div className="nav-child">
        <ul>
          <li>
            <Link to="/kids" onClick={kidsnavigate}>Kids Collection</Link>
          </li>
          <li>
            <Link to="/mens" onClick={mensnavigate}>Mens Collection</Link>
          </li>
          <li>
            <Link to="/womens" onClick={womensnavigate}>Women Collection</Link>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="app-container">
          <div className="app-left">
            <h1>
              Lowest Prices
              <br />
              Best Quality Shopping
            </h1>
            <ul>
              <li>Free Delivery</li>
              <hr />
              <li>Cash on Delivrey</li>
              <hr />
              <li>Easy Return</li>
            </ul>
            <button>
              <FaGooglePlay /> Download the Meeesho App
            </button>
          </div>
          <div className="app-right">
            <img src={meesho} alt="app-img" className="app-img" />
          </div>
        </div>
        {/*App container close div */}
        <div className="top-categories-title">
          <div className="stright-line"></div>
          <h1>Top Categories to choose from</h1>
          <div className="stright-line-1"></div>
        </div>
        {/* top-categories-title */}
        <div className="fashion-banner">
          <div className="fashion-womens">
            <Link>
              <img src={womens} alt="womens-img" className="w-store" />
            </Link>
          </div>
          <div className="fashion-right">
            <div className="fashion-mens">
              <Link>
                <img src={mens} alt="mens-img" className="m-store" />
              </Link>
            </div>
            <div className="fashion-kids">
              <Link>
                <img src={kids} alt="kids-img" className="k-store" />
              </Link>
            </div>
          </div>
        </div>
        {/*Fashion banner close div */}
        <div className="essential-banner">
          <button className="view-button">View All</button>
          <div className=" essential-img">
            <div className="homedecor-img">
              <Link>
                <img
                  src={homedecor}
                  alt="homedecor-img"
                  className="homedecor"
                />
              </Link>
              <button>Home Decor</button>
            </div>
            <div className="kitchen-img">
              <Link>
                <img src={kitchen} alt="kichen-img" className="kitchen" />
              </Link>
              <button>Kitchen Appliances</button>
            </div>
            <div className="healthcare-img">
              <Link>
                <img
                  src={healthcare}
                  alt="healthcare-img"
                  className="healthcare"
                />
              </Link>
              <button> Health Care</button>
            </div>
          </div>{" "}
          {/*Essential img close div */}
        </div>{" "}
        {/* Essential close div */}
        <div className="newstyle-banner">
          <button className="newstyle-view-button">View All</button>
          <div className=" newstyle-img">
            <div className="accessories-img">
              <Link>
                <img
                  src={accessories}
                  alt="accessories-img"
                  className="accessories"
                />
              </Link>
              <button>Accessories</button>
            </div>
            <div className="footwear-img">
              <Link>
                <img src={footwear} alt="footwear-img" className="footwear" />
              </Link>
              <button>FootWear</button>
            </div>
            <div className="electronics-img">
              <Link>
                <img
                  src={electronics}
                  alt="electronics-img"
                  className="elelctronics"
                />
              </Link>
              <button> Electronics</button>
            </div>
          </div>
        </div>{" "}
        {/*newstyle-banner close tag */}
        <div className="reseller-banner">
          <div className="reseller-content">
            <h3>Become a Reseller and</h3>
            <h1>
              Start your Online Business
              <br />
              with Zero Investment
            </h1>
            <div className="reseller-button">
              <button className="reseller-playstore-button">
                <FaGooglePlay /> <p>GET IN ON</p> <span>Google Play</span>
              </button>
              <button className="reseller-apple-button">
                <FaApple />
                <p>Available on The</p> <span>App Store</span>
              </button>
            </div>
          </div>
        </div>{" "}
        {/* reseller close div */}
        <Link>
          <div className="meesho-supplier">
            <h1>Register as a Meesho Supplier</h1>
            <p>Sell your products to crores of customers at 0% commission</p>
            <ul>
              <li>
                <FaCheckCircle style={{ paddingRight: "10px" }} />
                Grow your business 10x
              </li>
              <hr />
              <li>
                <FaCheckCircle style={{ paddingRight: "10px" }} />
                Enjoy 100% Profit
              </li>
              <hr />
              <li>
                <FaCheckCircle style={{ paddingRight: "10px" }} />
                Sell all over India
              </li>
            </ul>
            <button>Sign up now</button>
          </div>{" "}
          {/* meesho supplier close div*/}
        </Link>
        <div className="products">
          <div className=" product-for-you">
            <span>Products For You</span>
            <select id="sort-by">
              <option>Relevance</option>
              <option>New Arrival</option>
              <option>Price(High to Low)</option>
              <option>Price(Low to High)</option>
              <option>Rating</option>
              <option>Discount</option>
            </select>
            <div className="product-filters">
              <h4> FLITERS</h4>
              <p>1000+ Products</p>
              </div>
          </div>
          <div className="product-box">
            {product.map((value) => {
              return (
                <div className="product-container">
                  <img id="product-img" src={value.image} alt={value.name} />
                  <div className="product-details">
                    <h3 id="product-name">{value.name}</h3>
                    <h1 id="product-price">{value.price}</h1>
                    <p id="product-offer">{value.offer}</p>
                    <p id="product-delivery-type">{value.deliverytype}</p>
                    <p id="product-rating">{value.rating}</p>
                    <p id="product-reviews">{value.reviews}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*Container close div */}
    </div>
  );
}
export default Home;
