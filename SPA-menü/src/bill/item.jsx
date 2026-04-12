// components/ItemList.js
import React from 'react';

const ItemList = ({ items, onDeleteItem }) => {
    return (
        <div className="item-list">
            <h2>Bevársáló lista</h2>
            {items.map((item, index) => (
                <div className="item" key={index}>
                    <div>{item.item}</div>
                    <div>
                        Mennyiség:
                        {item.quantity}
                    </div>
                    <div>Ár: ${item.price}</div>
                    <button onClick={
                        () =>
                            onDeleteItem(index)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ItemList;