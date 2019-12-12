import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
