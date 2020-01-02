import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; // CSS from Bootstrap
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css'; // My own CSS
import App from './App';

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

ReactDOM.render(<App />, document.getElementById('root'));
