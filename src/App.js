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

  // FUNCTIONS
  const handleClick = (index) => {
    // Declaring a new variable to have the same data as receiptState
    // Notice the spread operator here so the state will actually get updated
    // instead of just being copied.
    let allReceipts = [...receiptState]
    // Change paid from false to true after receipt is clicked
    allReceipts[receiptState.indexOf(index)].paid = !allReceipts[receiptState.indexOf(index)].paid
    // Set new state values for receiptState and trigger a rerender after clicking a receipt
    setReceiptState(allReceipts)
  }

  // JSX
  return (
    <>
      <header>
        <h1 className="name">Korilla Receipts</h1>
      </header>
      <main className='container'>
        {/* Filter out receipts so only unpaid receipts show on screen. 
        Then map through each object and render the unpaid Receipt.js component */}
        {receiptState
          .filter((receipt) => receipt.paid === false)
          .map((receipt, id) => {
            return <Receipt handleClick={handleClick} receipt={receipt} key={id} />
          })
        }
      </main>
    </>
  );
}

export default App;
