import React, {useState} from 'react'
import './Navbar.css';
import { Link } from "react-router-dom"
import { Icon } from '@iconify/react';


function Navbar() {
  const [active, setActive] = useState(false)
  const DisplayMenu = () => {
    setActive(!active)
  }
  return (
    <div className='header' >
      <div className='headerlogo'> logo</div>
       
        <div className='menu'>
          <nav className={active ? 'navbar active':'Navbar' }>
          <ul >
            <div className='closed'>
              <Icon icon="mdi:window-close" className='close' onClick={DisplayMenu} />
            </div>
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
        <div className='hamburger-icon'>
          <Icon icon="charm:menu-hamburger" className='hamburger-menu'onClick={DisplayMenu} />
        </div>
       </div>
    </div>
  )
}

export default Navbar