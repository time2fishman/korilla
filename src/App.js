import React, { useState } from 'react';
import './App.css';
import Receipt from './components/Receipt';

const initialState = [
  {
    id: 1,
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
      drink: 'Korchata',
      cost: 22,
    },
    paid: false,
  },
  {
    id: 2,
    person: 'Jerrica',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
      drink: 'Korchata',
      cost: 19,
    },
    paid: false,
  },
  {
    id: 3,
    person: 'Matt',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20,
    },
    paid: false,
  },
];


function App() {
  // STATE
  const [receiptState, setReceiptState] = useState(initialState)
  // console.log(receiptState);

  return (
    <>
      <header>
        <h1 className="name">Korilla Receipts</h1>
      </header>
      <main className='container'>
        {receiptState.map((element, id) => {
          return <Receipt receipt={element} key={id}/>
        })}
        {/* <Receipt receiptState={receiptState[1]}/>
        <Receipt receiptState={receiptState[2]}/> */}
      </main>
    </>
  );
}

export default App;
