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


const root = createRoot(document.getElementById('root'));
root.render(<Header />);