import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
// readers.map(item, index) => { })
// <h1 className={message =="correct" ? "CologChange" : "" }>blah</h1> to change the css of a state change