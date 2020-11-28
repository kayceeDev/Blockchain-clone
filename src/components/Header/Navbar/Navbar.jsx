import React from "react";

import logo from "../../../assets/img/logo.png";
import send from "../../../assets/img/send.png";
import recieve from "../../../assets/img/recieve.png";
import swap from "../../../assets/img/swap.png";
import buy from "../../../assets/img/buy.png";
import Earn from "../../../assets/img/earn.png";
import borrow from "../../../assets/img/borrow.png";
import security from "../../../assets/img/security.png";
import reset from "../../../assets/img/reset.png";
import settings from "../../../assets/img/settings.png";

const index = () => {
  return (
    <>
      <header>
        <img class="logo" src={logo} alt="" />
        <p class="title">
          Blockchain<span>.com</span>
        </p>
        <nav>
          <ul>
            <li>
              {" "}
              <img src={send} alt="" /> Send
            </li>
            <li>|</li>
            <li>
              <img src={recieve} alt="" /> Request
            </li>
            <li>|</li>
            <li>
              <img src={swap} class="swap" alt="" /> Swap
            </li>
            <li>|</li>
            <li>
              <img src={buy} class="buy" alt="" /> Buy/Sell Crypto
            </li>
            <li>|</li>
            <li>
              <img src={Earn} class="buy" alt="" /> Earn Interest
            </li>
            <li>|</li>
            <li>
              <img src={borrow} alt="" /> Borrow
            </li>
          </ul>

          <ul>
            <li>
              <img src={security} class="buy" alt="" />
              Security
            </li>
            <li>|</li>
            <li>
              <img src={reset} class="buy" alt="" />
            </li>
            <li>|</li>
            <li>
              <img src={settings} class="buy" alt="" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default index;
