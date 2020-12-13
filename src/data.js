import React from "react";

import home from "./assets/img/home.png";
import dollar from "./assets/img/dollar.png";
import euro from "./assets/img/euro.png";
import pound from "./assets/img/pound.png";
import bitcoin from "./assets/img/bitcoin.png";
import bitcoinCash from "./assets/img/bitcoin-cash.png";
import stellar from "./assets/img/stellar.png";
import ether from "./assets/img/ether.png";
import algorand from "./assets/img/algorand.png";
import usdigital from "./assets/img/usdigital.png";
import tether from "./assets/img/tether.png";
import Dashboard from "./components/Body/SideBar/Dashboard";
import Bitcoin from "./components/Body/MiniBodies/Bitcoin";

const nav = [
  {
    category: " Dashboard",
    sideclass: "dashboard",
    img: home,
    imgclass: "img-dash",
    subsideclass: "each-us",
    component: <Dashboard/>
  },
  {
    category: " U.S. Dollars",
    sideclass: "us",
    img: dollar,
    imgclass: "img-dollar",
    subsideclass: "each-us",
  },
  {
    category: "Euros",
    sideclass: "euros",
    img: euro,
    imgclass: "img-euro",
    subsideclass: "each-us",
  },
  {
    category: " Pounds",
    sideclass: "pounds",
    img: pound,
    imgclass: "img-dollar",
    subsideclass: "each-us",
  },
  {
    category: "Bitcoin",
    sideclass: "bitcoin",
    img: bitcoin,
    imgclass: "img-btc",
    subsideclass: "each-us",
    component: <Bitcoin/>
  },
  {
    category: " Ether",
    sideclass: "ether",
    img: ether,
    imgclass: "img-btc",
    subsideclass: "each-us",
  },
  {
    category: "Bitcoin Cash",
    sideclass: "bitcoin-cash",
    img: bitcoinCash,
    imgclass: "img-btc",
    subsideclass: "each-us",
  },
  {
    category: "Bitcoin Cash",
    sideclass: "bitcoin-cash",
    img: stellar,
    imgclass: "img-btc",
    subsideclass: "each-us",
  },
  {
    category: "Algorand",
    sideclass: "algorand",
    img: algorand,
    imgclass: "img-btc",
    subsideclass: "each-us",
  },
  {
    category: "USD Digital",
    sideclass: "usdigital",
    img: usdigital,
    imgclass: "img-btc",
    subsideclass: "each-us",
  },

  {
    category: " Tether",
    sideclass: "tether",
    img: tether,
    imgclass: "img-btc",
    subsideclass: "each-us",
  },
];

export default nav;
