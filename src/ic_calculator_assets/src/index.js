import * as React from 'react';
import { createRoot } from 'react-dom/client';

import Counter from './components/counter';


const container = document.getElementById('myApp');
const root = createRoot(container);

root.render(   
         <Counter/> 
);
