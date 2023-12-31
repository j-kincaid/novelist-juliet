import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


const Header = () => {
  return (
      <header>
        <h1>Calendar Mysteries</h1>
          <span className='total-items'>Items: 1</span>
      </header>
    )
  }

const Item = () => {
  return (
    <div className='item'>
    <button className='remove-item' />
    <span className='item-name'>Novels</span>
    <div className='quantity'>
    <span className='qty-label'>QTY</span>
    <button className='increment'>+</button>
    <button className='decrement'>-</button>
    <span className='quantity-amount'>15</span>
    </div>

    </div>
  )
}
const root = createRoot(document.getElementById('root'));
// root.render(<Header />);
root.render(<Item />);