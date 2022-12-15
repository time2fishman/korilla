import React from 'react';
import '../Receipt.css'

const Receipt = (props) => {
    // JSX
    return (
        // Run the handleClick function on App.js after div(receipt) is clicked
        <div onClick={() => props.handleClick(props.receipt)} className='receipt'>
            <h2 className='person'>{props.receipt.person}</h2>
            <ul className='order'>
                <li className='main'><span>Main: </span>{props.receipt.order.main}</li>
                <li className='protein'><span>Protein: </span>{props.receipt.order.protein}</li>
                <li className='rice'><span>Rice: </span>{props.receipt.order.rice}</li>
                <li className='sauce'><span>Sauce: </span>{props.receipt.order.sauce}</li>
                <li className='drink'><span>Drink: </span>{props.receipt.order.drink}</li>
                <li className='cost'><span>Cost: </span>{props.receipt.order.cost}</li>
            </ul>
        </div>
    );
};

export default Receipt;