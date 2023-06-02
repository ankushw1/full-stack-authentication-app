import React from 'react'
import { Link } from 'react-router-dom'
import validation from './SignupValidation'
import { useState } from 'react'

const Signup = () => {

  const [values,setValues] = useState({
    name:'',
    email:'',
    password:''
  })
  const [errors,setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev,[event.target.name] : [event.target.value]}))
  }
  const handleSubmit =(event) => {
    event.preventDefault()
    setErrors(validation(values))

  }

    return (
        <>
        <h2>Sign Up</h2>
        <form action="#" onSubmit={handleSubmit}>
        <div>
      <label htmlFor="Name">Name</label>
      <input type="name" placeholder='Enter Name'name='name' onChange={handleInput}/>
      {errors.name && <span>{errors.name}</span>}

    </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter Email' name='email' onChange={handleInput}/>
          {errors.email && <span>{errors.email}</span>}

        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter Password' name='password' onChange={handleInput}/>
          {errors.password && <span>{errors.password}</span>}

        </div>
        <button>Sign Up</button>
        <Link to='/'>Login</Link>
        </form>
        </>
      )
    }

export default Signup
