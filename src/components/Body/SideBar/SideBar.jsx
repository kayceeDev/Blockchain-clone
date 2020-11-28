import React, { useState } from "react";
import Login from '../../login/Login'


import DashBoard from '../SideBar/Dashboard'

const Index = ({ categories }) => {
  const [amount, setAmount] = useState(0);
  return (
    <main>
      <section className="navigation">
        <div className="total">
          <div>
            <p>Total Balance</p>
            <p> ${amount}.00</p>
          </div>

          <div className="cursor-div">
            <p>0</p>
          </div>
        </div>

        <div className="others">
          {categories.map((category, index) => {
            return (
              <button type="button" className={category.sideclass} key={index}>
                <img src={'../../../assets/img/home.png'} className={category.imgclass} alt="" />
                {category.category}
              </button>
            );
          })}
        </div>

        <div className="final">
          <button className="airdrops">Airdrops</button>
          <button className="airdrops">Exchange</button>
        </div>
      </section>

      <section className="dashboard-component">
      <DashBoard categories={categories}/>
        <div className="right-side">
          <div className="top-right-side">
            <p>
              Bitcoin (BTC) <span>0</span>
            </p>

            <p>Current Price</p>
            <p>$19,268.39</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
