/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Form from './Form'
import Member from './Member'

import * as yup from "yup"
import schema from "./validation/formSchema"
import formSchema from './validation/formSchema';

const initialFormValues = {
  name: "",
  email: "",
  // Checkbox
  jam: false,
  indie: false,
  funk: false,
  blues: false,
  folk: false,
  // Dropdown
  role: ""
}

const initialFormErrors = {
  name: "",
  email: "",
  role: ""
}

const initialMembers = [];
const initialDisabled = true;

function App() {

  const [members, setMembers] = useState(initialMembers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getMembers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
      setMembers(res.data)
      })
      .catch(err => {
      console.log(err)
    })
  }
  
  const postNewMember = newMember => {
    axios.post('https://reqres.in/api/users', newMember)
      .then(res => {
      setMembers([res.data, ...members])
      })
      .catch(err => {
      console.log(err)
      })
    setFormErrors(initialFormValues)
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      
    })
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      genres: ['jam', 'indie', 'funk', 'blues', 'folk'].filter(genre => formValues[genre])
    }
    postNewMember(newMember)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="container">
      <header>
        <h1>New Band Member Onboarding</h1>
      </header>
      
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
