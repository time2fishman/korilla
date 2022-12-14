import React from 'react';
import '../Receipt.css'

const Receipt = (props) => {
    // console.log(props.receiptState)
    return (
        <div className='receipt'>
            <h2 className='person'>{props.receiptState.person}</h2>
            <ul className='order'>
                <li className='main'><span>Main: </span>{props.receiptState.order.main}</li>
                <li className='protein'><span>Protein: </span>{props.receiptState.order.protein}</li>
                <li className='rice'><span>Rice: </span>{props.receiptState.order.rice}</li>
                <li className='sauce'><span>Sauce: </span>{props.receiptState.order.sauce}</li>
                <li className='drink'><span>Drink: </span>{props.receiptState.order.drink}</li>
                <li className='cost'><span>Cost: </span>{props.receiptState.order.cost}</li>
            </ul>
        </div>
    );
};

export default Receipt;