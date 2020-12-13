import React, { useState } from "react";
import tranAdd from "../../../assets/img/tran-add.jpg";

const TransactionDetails = ({ category, to, from, amount }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="b-tran-container">
      <div className="b-tran-all" onClick={() => setShowDetails(!showDetails)}>
        <div className="buy-tran">
          <img src={tranAdd} className="add" alt="" />
          <div className="buy-tran-text">
            <p>{category} BTC</p>
            <p>{new Date().toDateString()}</p>
          </div>
        </div>
        <div className="to-tran-text">
          <p>{`To: ${to}`}</p>
          <p>{`From: ${from}`}</p>
        </div>
        <div className="num-tran-text">
          <p>{`${amount} BTC`}</p>
          <p>{`$ ${Math.round(amount * 18229.72, 3)}`}</p>
        </div>
      </div>
      {showDetails && <div>Hey</div>}
    </div>
  );
};

export default TransactionDetails;
