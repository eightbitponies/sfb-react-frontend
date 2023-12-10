import React from 'react'

const Home = ({ activeUserId, displayName }) => {
    return (
        <div>
            Welcome, {displayName}!
            You are logged in using ID:  {activeUserId}
        </div>
    )
}

export default Home