import React from 'react'
import NavBar from './NavBar'

const Home = ({ activeUserId, displayName }) => {
    return (
        <main>
            <NavBar activeUserId={activeUserId} displayName = {displayName}/>
            
            Welcome, {displayName}!
            You are logged in using ID:  {activeUserId}
        </main>
    )
}

export default Home