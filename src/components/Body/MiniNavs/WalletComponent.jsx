import React, {useState} from 'react';

import data from '../../../data'

const WalletComponent = () => {
  const [categories, setCategories] = useState(data)
  return (
    <>
       {categories.map((category, index) => {
        return (
          <div className="total-others" key={index}>
            <div className="each-total">
              <div>
                <p className="each-us">{category.category}</p>
              </div>
              <div className="each-cur">
                <p>$0.00</p>
                <p>$0.00</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WalletComponent;