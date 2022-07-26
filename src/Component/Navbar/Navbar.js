import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
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
  )
}

export default Navbar