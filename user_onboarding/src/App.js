/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Form from './Form'
import Member from './Member'

import * as yup from "yup"
import schema from "../validation/formSchema"

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  // Checkbox
  terms: false,
  jam: false,
  metal: false,
  indie: false,
  alternative: false,
  funk: false,
  blues: false,
  folk: false,
  // Dropdown
  role: ""
}

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: false,
  role: ""
}

const initialMembers = [];
const initialDisabled = true;

function App() {

  const [members, setMembers] = useState(initialMembers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErros, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = () => {
    
  }

  const formSubmit = () => {

  }

  return (
    <div className="App">
      <h1>New Band Member Onboarding</h1>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErros}
      />
    </div>
  );
}

export default App;
