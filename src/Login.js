import React, { useState } from 'react'

const Login = ({setActiveUserId, setDisplayName, toggleForm}) => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(emailAddress + ':' + password);
        const API_URL = "http://localhost:8080/user/login";     
        const loginUser = {id:"", displayName:"", emailAddress, password};

        const postOptions = {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify(loginUser)
        }
        const response = await fetch(API_URL, postOptions);
        const responseJson = await response.json();
        console.log(responseJson);
        setActiveUserId(responseJson.id);
        setDisplayName(responseJson.displayName);
    }

   
    return (
        <main className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input autoComplete="off" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder="Email Address" id="email" name="email" />

                <label htmlFor="password">Password</label>
                <input autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                <button>Log In</button>

            </form>
            <button className="link-button" onClick={() => toggleForm('register')}>Don't have an account?  Register here!</button>
        </main>
    )
}

export default Login