import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='menu-styles' >
      <div className='logo'> logo</div>
       
        <div>
          <nav className='main-menu'>
            <ul >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/packing-list'>Packing List</Link>
              </li>
              <li>
                <Link to='/weather'>Weather Forecast</Link>
              </li>
              <li>
                <Link to='/exchange'>Exchange Rates</Link>
              </li>
              <li>
                <Link to='/contacts'>Emergency Contacts</Link>
              </li>
            </ul>
          </nav>
       </div>
    </div>
  )
}

export default Navbar