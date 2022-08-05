import React from 'react'
import Search from "./Search.js";
import List from "./List.js";

import {DummyData} from "./DummyData.js"
import Emergency from './Emergency/Emergency.js';

function Contacts() {
  return (
    <div>
      <h2>Emergency Contacts</h2>
      {/* <Search /> */}
      <Emergency />
      
    </div>
  )
}

export default Contacts