import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validation from './LoginValidation';
const Login = () => {
  const [values,setValues] = useState({
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
      <div className="login-form"> 
        <h2>Login</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" name='email' onChange={handleInput} />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" name='password' onChange={handleInput} />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <button type='submit'>Log In</button>
          <Link to="/signup">Create Account</Link>
        </form>
      </div>
    </>
  );
};

export default Login;
