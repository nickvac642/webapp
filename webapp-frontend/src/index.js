import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Components/NavBar';
import SubmitForm from './Components/SubmitForm';

ReactDOM.render(<NavBar />, document.getElementById('navbar'));

ReactDOM.render(<SubmitForm />, document.getElementById('form'));