import React, { useState } from "react";
import data from "../../../data2";

const Dashboard = ({ categories }) => {
  const [slider, setSlider] = useState(data);
  const [value, setValue] = useState(0);

  const { component, name, classes } = slider[value];
  return (
    <>
      <div className="left-side">
        <div className="top-left-side">
          <p>{name}</p>
          <p>$0.00</p>
        </div>

        <div className="slider">
          {slider.map((slide, index) => {
            return (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className={`${classes} ${index === value && "active"}`}
                >
                  {name}
                </button>
            );
          })}
          {/* <button className="sl-tot active">Total</button>
            <button className="sl-wal">Wallet</button>
            <button className="sl-har">Hardware</button> */}
        </div>
        {component}
      </div>
    </>
  );
};

export default Dashboard;
