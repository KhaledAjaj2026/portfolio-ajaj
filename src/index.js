import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.scss'
import reportWebVitals from './reportWebVitals';
import HeaderBar from './components/HeaderBar';
import HomePage from './components/HomePage';
import Spacer from './components/Spacer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import White from './components/White';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <White />
    <HeaderBar />
    <Spacer />
    <HomePage />
    <Spacer />
    <Skills />
    <Spacer />
    <Projects />
    <Spacer />
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
