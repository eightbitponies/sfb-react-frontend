import React, { useState } from 'react'

const Register = ({setActiveUserId, displayName, setDisplayName, toggleForm}) => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(emailAddress + ':' + password);
        const API_URL = "http://localhost:8080/user/register";     
        const loginUser = {id:"", displayName, emailAddress, password};

        const postOptions = {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify(loginUser)
        }
        const response = await fetch(API_URL, postOptions);
        const responseJson = await response.json();
        console.log(responseJson.id);
        toggleForm('login');
    }

   
    return (
        <main className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="displayName">Display Name</label>
                <input autoComplete="off" value={displayName} onChange={(e) => setDisplayName(e.target.value)} type="displayName" placeholder="Display Name" id="displayName" name="displayName" />
                
                <label htmlFor="email">Email</label>
                <input autoComplete="off" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder="Email Address" id="email" name="email" />

                <label htmlFor="password">Password</label>
                <input autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                <button>Register</button>

            </form>
            <button className="link-button" onClick={() => toggleForm('login')}>Already have an account?  Login here!</button>
        </main>
    )
}

export default Register