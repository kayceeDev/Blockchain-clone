import React from 'react';

const index = () => {
  return (
    <main>
    <section class="navigation">
        <div class="total">
            <div>
                <p>Total Balance</p>
                <p>$ 0.00</p>
            </div>

            <div class="cursor-div">
                <p>0</p>
            </div>
        </div>

        <div class="others">
            <button class="dashboard">
                Dashboard
            </button>
            <button class="us">
                U.S. Dollars
            </button>
            <button class="euros">
                Euros
            </button>
            <button class="pounds">
                Pounds
            </button>
            <button class="bitcoin">
                Bitcoin
            </button>
            <button class="ether">
                Ether
            </button>
            <button class="bitcoin-cash">
                Bitcoin Cash
            </button>
            <button class="stellar">
                Stellar
            </button>
            <button class="algorand">
                Algorand
            </button>
            <button class="usdigital">
                USD Digital
            </button>
            <button class="tether">
                Algorand
            </button>
        </div>

        <div class="final">
            <button class="airdrops">
                Airdrops
            </button>
            <button class="airdrops">
                Exchange
            </button>
        </div>
    </section>
</main>
  );
};

export default index;