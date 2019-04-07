import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Components/NavBar';
import SubmitForm from './Components/SubmitForm';
//import './Styles/eboard.css'

ReactDOM.render(<NavBar />, document.getElementById('navbar'));

ReactDOM.render(<SubmitForm />, document.getElementById('form'));