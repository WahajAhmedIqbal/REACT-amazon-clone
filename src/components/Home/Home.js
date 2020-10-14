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
      <Product
        id="091"
        title="Rich Dad Poor Dad"
        price={11.08}
        rating={3}
        image="https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Stop_Worrying_and_Start_Living.JPG"
      />
    </div>
  );
}

export default Home;
