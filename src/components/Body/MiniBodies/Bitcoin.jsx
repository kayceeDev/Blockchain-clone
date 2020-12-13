import React, { useEffect, useState } from "react";
import "./bitcoin.css";
import bitcoinImg from "../../../assets/img/bitcoin.png";
import items from "../../../bitcoinData";
import index from "../../Header/Navbar/Navbar";

import TransactionDetails from "./TransactionDetails";

const allCategories = [
  "All",
  ...new Set(items.map((item) => item.category)),
  "Transferred",
];

const Bitcoin = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(items);
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(items);
  });

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <section className="usd-component">
      <div className="b-top">
        <div className="b-top-left">
          <div>
            <img src={bitcoinImg} alt="" />
            <p>Bitcoin</p>
          </div>
          <p className="b-top-desc">
            Bitcoin (BTC) is the original crypto and the internet's digital
            currency.{" "}
            <a href="#">
              <span>Learn More</span>
            </a>
          </p>
        </div>
        <button>Buy BTC</button>
      </div>
      <div className="b-center">
        <div className="b-center-row">
          <p>BTC Balance</p>
          <p>$0.00</p>
          <p>Request BTC</p>
        </div>

        <div className="b-center-row">
          <p>BTC Price</p>
          <p>$16,911.74</p>
          <p>
            -$1,081.90 (6.01)% <span>this week</span>
          </p>
        </div>
      </div>

      <div className="b-tran-header">
        <div className="slider b-slide">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setValue(index);
                filterItems(category);
              }}
              className={`sl-har ${index === value && "active"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="b-btns-right">
          <button>
            {" "}
            <img src="assets/img/download.png" alt="" />
            Download
          </button>
          <button>
            <img src="assets/img/search.png" alt="" /> Search
          </button>
        </div>
      </div>
      {menuItems.map((item, index) => {
        return <TransactionDetails key={index} {...item} />;
      })}
    </section>
  );
};

export default Bitcoin;
