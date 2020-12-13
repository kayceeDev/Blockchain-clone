import React, { useState } from "react";
import Login from "../../login/Login";
import airdrop from "../../../assets/img/airdrop.png";
import image6 from "../../../assets/img/image6.png";
import arrow from "../../../assets/img/arrow-border.png";
import DashBoard from "../SideBar/Dashboard";

const Index = ({ categories }) => {
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(0)
  const {component} = categories[value]
  return (
    <main>
      <section className="navigation">
        <div className="total">
          <div>
            <p>Total Balance</p>
            <p> ${amount}.00</p>
          </div>

          <div className="cursor-div">
            <img src={arrow} alt="" />
          </div>
        </div>

        <div className="others">
          {categories.map((category, index) => {
            return (
              <button className={category.sideclass} key={index}
              onClick={() => setValue(index)}>
                <img src={category.img} className={category.imgclass} alt="" />
                {category.category}
              </button>
            );
          })}
        </div>

        <div className="final">
          <button className="airdrops">
            <img src={airdrop} className="img-btc" alt="" />
            Airdrops
          </button>
          <button className="airdrops">
            <img src={image6} className="img-btc" alt="" />
            Exchange
          </button>
        </div>
      </section>

      
        {component}

        {/* <DashBoard categories={categories} /> */}
        
      
    </main>
  );
};

export default Index;
