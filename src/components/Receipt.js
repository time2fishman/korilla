import React from 'react';
import '../Receipt.css'

const Receipt = () => {
    return (
        <div className='receipt'>
            <h2 className='person'>Karolin</h2>
            <ul className='order'>
                <li className='main'><span>Main: </span>Burrito</li>
                <li className='protein'><span>Protein: </span>Tofu</li>
                <li className='rice'><span>Rice: </span>Purple Rice</li>
                <li className='sauce'><span>Sauce: </span>Green Crack</li>
                <li className='drink'><span>Drink: </span>Korchata</li>
                <li className='cost'><span>Cost: </span>22</li>
            </ul>

        </div>
    );
};

export default Receipt;