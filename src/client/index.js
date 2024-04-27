import React from 'react';
import { createRoot } from 'react-dom/client';

import './statics/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
