import React from "react";
import AppCss from '../App.css'

function Home() {
  return (
    <div>

        <div className="add-to-cart">
            <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" alt="empty" srcset="" />
        </div>

      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg" alt="" width={50} />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: "i phone 11" });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
