import React from 'react';
import reactDom from 'react-dom';
import CounterApp from './CounterApp';
import './assets/css/estilos.css';






const divRoot = document.querySelector('#root');

reactDom.render(<CounterApp value={0} />, divRoot);
// reactDom.render(<PrimeraApp saludo="Hola mundo"/>, divRoot);

// reactDom.render(<PrimeraApp saludo="Hola mundo"/>, divRoot);

// reactDom.render(<PrimeraApp saludo={123}/>, divRoot);
