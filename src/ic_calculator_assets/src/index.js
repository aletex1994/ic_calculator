import * as React from 'react';
import { createRoot } from 'react-dom/client';
import SignIn from './pages/login';

const container = document.getElementById('myApp');
const root = createRoot(container);

root.render(  
    <React.Fragment>
       <SignIn></SignIn>
    </React.Fragment>
       
);
