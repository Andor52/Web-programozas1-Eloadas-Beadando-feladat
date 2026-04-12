// components/TotalAmount.js
import React from 'react';

const TotalAmount = ({ total }) => {
    return (
        <div className="total">
            <h3>
                Teljes összeg:
                ${total.toFixed(2)}
            </h3>
        </div>
    );
};

export default TotalAmount;