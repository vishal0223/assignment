import React from 'react';
import { ShoppingOutlined } from '@ant-design/icons';


const EarningsCardBag = ({ earnings, growth }, props) => {
  return (
    <div className="earnings-card">

      <div className="icon-bag">
        <ShoppingOutlined />
      </div>

      <div className="earnings-info">
        <p>Earnings</p>
        <p style={{ fontSize: "20px", fontWeight: "600" }}>{earnings}</p>
        <p><span className={growth > 0 ? 'positive' : 'negative'}>
          {growth > 0 ? `↑ ${growth}% ` : `↓ ${Math.abs(growth)}% `}
        </span>this month</p>
      </div>
    </div>
  );
};

export default EarningsCardBag;
