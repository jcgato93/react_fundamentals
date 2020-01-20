import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/global.css'

import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badge firstName="Juan" lastName="Castillo" title="FullStack Developer" webPage="https://juan-castillo.web.app/" />, container);
