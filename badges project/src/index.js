import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/global.css'

import  BadgeNew   from "./pages/BadgeNew.js";

const container = document.getElementById('app');

ReactDOM.render(<BadgeNew /> , container);