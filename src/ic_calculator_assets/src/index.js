import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';

const element = <h1>Hello World</h1>;
//console.log(element)
ReactDOM.render(<Counter/>, document.getElementById('root'));