import React from 'react'
import logo from './logo.svg'

const NavBar = ({displayName}) => {
  return (
   <main className="nav-grid-container">
     <div className="nav-logo">
        <img src={logo} height={60} width={60}/>
     </div>
     <div className="nav-title">SFB Thing</div>
     <div className="nav-username">{displayName}</div>
     <div className="nav-logout"><button onClick={() => {}}>Logout</button></div>

    
    </main>
  )
}

export default NavBar