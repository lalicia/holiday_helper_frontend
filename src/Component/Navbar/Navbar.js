import React, {useState} from 'react'
import './Navbar.css';
import { Link } from "react-router-dom"
// import Hamburger from 'hamburger-react'
import { Close, MenuOutlined } from '@material-ui/icons'


function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const DisplayMenu = () => {
    setOpen(!isOpen)
  }
  return (
    <div className='menu-styles' >
      <div className='logo'> logo</div>
       
        <div className='menu'>
          <nav>
          <ul >
            <div className='closed'>
              <Close className='closed' onClick={DisplayMenu} />
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
        <div className="menubar">
          <MenuOutlined className='menu' onClick={DisplayMenu} />
        </div>

        
       </div>
    </div>
  )
}

export default Navbar