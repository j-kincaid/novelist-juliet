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


const title = "Juliet Kincaid, Writer"
const myTitleId = "main-title"
const name = "Juliet Kincaid"
const desc = "Mystery, Historical Fiction and Fantasy Novelist"
const element = (
<>
<h1 id={myTitleId}>{name}, Writer</h1>  
<p className="main-desc">{desc}</p>
</>
) 
const root = createRoot(document.getElementById('root'));
root.render(element);