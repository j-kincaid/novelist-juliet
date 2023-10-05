import { createRoot } from 'react-dom/client';

const title = "Juliet Kincaid, Writer"
const myTitleId = "main-title"
const name = "Juliet Kincaid"
const desc = "Mystery, Historical Fiction and Fantasy Novelist"
const element = (
<>
<h1 id={myTitleId}>{name}, Writer</h1>  
<p className="main-desc">{desc}</p>
console.log(element);
</>
) 
const root = createRoot(document.getElementById('root'));
root.render(element);