// App.js
import React from 'react';
import BillDetails from './bill';
import ItemList from './item';
import TotalAmount from './totalamount';
import { jsPDF } from 'jspdf';
import './AApp.css';

function Bill() {
    const [items, setItems] = React.useState([]);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const calculateTotalAmount = () => {
        return items.reduce(
            (total, item) =>
                total +
                item.quantity *
                item.price, 0);
    };

    const handleDownloadPDF = () => {
        const pdf = new jsPDF();
        pdf.text('Számla', 20, 20);

        // Add items to PDF
        items.forEach((item, index) => {
        let yPos = 40 + index * 30;

        pdf.text(`Tárgy: ${item.item}`, 20, yPos);
        pdf.text(`Mennyiség: ${item.quantity}`, 20, yPos + 8);
        pdf.text(`Ár: ${item.price}`, 20, yPos + 16);
        });


        // Add total amount to PDF
        const totalAmount =
            calculateTotalAmount();
        pdf.text(
            `Teljes összeg: 
                    $${totalAmount.toFixed(2)}`, 20, 180);

        // Save the PDF
        pdf.save('osszesito.pdf');
    };

    return (
        <div className="App">
            <h1>Bill/Invoice Generator</h1>
            <BillDetails onAddItem={handleAddItem} />
            <ItemList items={items}
                onDeleteItem={handleDeleteItem} />
            <TotalAmount
                total={calculateTotalAmount()} />
            <button
                onClick={handleDownloadPDF}>Download PDF</button>
        </div>
    );
}

export default Bill;