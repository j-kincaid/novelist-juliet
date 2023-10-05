import { createRoot } from 'react-dom/client';

const title = "Juliet Kincaid, Writer"
const desc = "Mystery, Historical Fiction and Fantasy Novelist"
const element = (
<>
<h1>{title}</h1>  
<p>{desc}</p>
console.log(element);
</>
) 
const root = createRoot(document.getElementById('root'));
root.render(element);