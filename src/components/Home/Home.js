import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
        alt="amazon banner"
      />

      {/* Products */}
      <div className="home_row">
        <Product
          id="091"
          title="Rich Dad Poor Dad"
          price={11.08}
          rating={4.44}
          image="https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Stop_Worrying_and_Start_Living.JPG"
        />
        <Product
          id="091"
          title="Ps5"
          price={499.99}
          rating={2.44}
          image="https://cnet4.cbsistatic.com/img/VTAxb26k3Bq8j9LR0c-5_ol_wS8=/940x0/2020/09/16/1d4050d2-6148-4d5e-93ad-172ab1a86907/001-playstation-5.png"
        />
      </div>
      <div className="home_row">
        <Product
          id="091"
          title="Iphone-x"
          price={829}
          rating={5}
          image="https://specials-images.forbesimg.com/imageserve/5ee6b36bc0e4020006640320/960x0.jpg?fit=scale"
        />
        <Product
          id="091"
          title="amazon alexa "
          price={49.08}
          rating={1}
          image="https://images.indianexpress.com/2018/10/amazon-echo-plus-2018-main.jpg"
        />
        <Product
          id="091"
          title="Among Us"
          price={11.08}
          rating={5}
          image="https://assets.mspimages.in/wp-content/uploads/2020/09/Among-US-1024x538.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="091"
          title="MacBookPro"
          price={1222}
          rating={2}
          image="https://9to5mac.com/wp-content/uploads/sites/6/2020/03/MacBook-Air-2020-Top-Features-9to5mac.jpg?quality=82&strip=all"
        />
      </div>
    </div>
  );
}

export default Home;
