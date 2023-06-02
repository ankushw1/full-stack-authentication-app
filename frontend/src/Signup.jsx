import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
        <h2>Sign Up</h2>
        <form action="#">
        <div>
      <label htmlFor="Name">Name</label>
      <input type="email" placeholder='Enter Name' />
    </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter Email' />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter Password' />
        </div>
        <button>Sign Up</button>
        <Link to='/'>Login</Link>
        </form>
        </>
      )
    }

export default Signup
