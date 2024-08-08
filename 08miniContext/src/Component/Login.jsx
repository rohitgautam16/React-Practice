import React, { useState, useContext } from 'react' // Import useContext from react

import UserContext from '../context/userContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
          e.preventDefault()
          setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' 
               value={username}
               onChange={(e) => setusername(e.target.value)}
               placeholder='username' />
               {"       "}
        <input type='password' 
               value={password}
               onChange={(e) => setpassword(e.target.value)}
               placeholder='password'/>
        <button onClick={handleSubmit}>Login Now</button>
    </div>
  )
}

export default Login
