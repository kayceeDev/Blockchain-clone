import React from 'react';

const index = () => {
  return (
    <>
  <header>
        <img class="logo" src={require('../../assets/logo.png')} alt=""></img>
        <p class="title">Blockchain<span>.com</span></p>
        <nav>
            <ul>
                <li>Send</li>
                <li>|</li>
                <li>Request</li>
                <li>|</li>
                <li>Swap</li>
                <li>|</li>
                <li>Buy/Sell Crypto</li>
                <li>|</li>
                <li>Earn Interest</li>
                <li>|</li>
                <li>Borrow</li>
            </ul>

            <ul>
                <li>Security</li>
                <li>|</li>
                <li>R</li>
                <li>|</li>
                <li>S</li>
            </ul>
            </nav>
   
            </header>
            </>
  );
};

export default index;