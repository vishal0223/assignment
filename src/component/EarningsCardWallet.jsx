import React from 'react';
import { WalletOutlined } from '@ant-design/icons';


const EarningsCardWallet = ({ earnings, growth }, props) => {
  return (
    <div className="earnings-card">

      <div className="icon-wallet">
        <WalletOutlined />
      </div>
      
      <div className="earnings-info">
        <p>Earnings</p>
        <p style={{ fontSize: "20px", fontWeight: "600" }}>{earnings}</p>
        <p><span className={growth > 5 ? 'positive' : 'negative'}>
          {growth > 5 ? `↑ ${growth}% ` : `↓ ${Math.abs(growth)}% `}
        </span>this month</p>
      </div>
    </div>
  );
};

export default EarningsCardWallet;
