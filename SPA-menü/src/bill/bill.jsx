// components/BillDetails.js
import React, { useState } from 'react';

const BillDetails = ({ onAddItem, onDeleteItem }) => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddItem = () => {
        if (!item.trim()) {
            setErrorMessage(`Please input data in the Item section.`);
            return;
        }

        // Check if the item contains only alphabetical characters
        if (!/^[a-zA-Z]+$/.test(item)) {
            setErrorMessage(`Item should only contain 
                alphabetical characters.`);
            return;
        }
        const newItem = { item, quantity, price };
        onAddItem(newItem);
        setItem('');
        setQuantity(1);
        setPrice(0);
        setErrorMessage('');
    };

    return (
        <div>
            <label>Tárgy:</label>
            <input type="text"
                value={item}
                onChange={
                    (e) =>
                        setItem(e.target.value)} />
            <label>Mennyiség:</label>
            <input type="number"
                value={quantity}
                onChange={
                    (e) =>
                        setQuantity(e.target.value)} />
            <label>Ár:</label>
            <input type="number"
                value={price}
                onChange={
                    (e) =>
                        setPrice(e.target.value)} />
            <button
                onClick={handleAddItem}>
                Hozzáadás
            </button>
            <p style={{ color: 'red' }}>{errorMessage}</p>

        </div>
    );
};

export default BillDetails;