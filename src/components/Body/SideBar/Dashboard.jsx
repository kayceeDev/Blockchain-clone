import React, { useState } from "react";
import data from "../../../data2";
import arrow from "../../../assets/img/arrow.png";
import bitcoin from "../../../assets/img/bitcoin.png";
const duration = ['Day', 'Week', 'Month', 'Year', 'All']

const Dashboard = ({ categories }) => {
  const [slider, setSlider] = useState(data);
  const [sliderValue, setSliderValue] = useState(0);
  const [value, setValue] = useState(0);
  
  const { component, name, classes } = slider[sliderValue];
  return (
    <section className="dashboard-component">
      <div className="left-side">
        <div className="top-left-side">
          <p>{name}</p>
          <p>$0.00</p>
        </div>

        <div className="slider">
          {slider.map((slide) => {
            return (
              <button
                key={slide.id}
                onClick={() => setSliderValue(slide.id)}
                className={`${classes} ${slide.id === sliderValue && "active"}`}
              >
                {slide.name}
              </button>
            );
          })}
        </div>
        {component}
      </div>
      <div className="right-side">
        <div className="top-right-side">
          <p>
            <img src={bitcoin} class="top-img" alt="" /> Bitcoin (BTC){" "}
            <img src={arrow} alt="" />
          </p>

          <p>Current Price</p>
          <p>$19,268.39</p>
          <p>
            $4,883.89 (37.32)% <span> &nbsp; this month</span>
          </p>
        </div>

        <div class="middle-right-side"></div>
        <div class="bottom-right-side">
          {duration.map((duration, index)=>{
            return(
          
            <button  onClick={()=>setValue(index)} className={` ${index === value && "active"}`}>{duration}</button>
            )
          })}
        </div>
        <div class="bottom-right-side-end">
          <button>Buy Bitcoin</button>
          <button>Swap Bitcoin</button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
