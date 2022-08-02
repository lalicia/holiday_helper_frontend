import React from 'react'
import Search from "./Search.js";
import List from "./List.js";

import {DummyData} from "./DummyData.js"

function Contacts() {
  return (
    <div>
      <h2>Emergency Contacts</h2>
      <Search />
      
      <div className="selected-contacts">
        <div className="ambulance-contact">
          <h4>Ambulance</h4>
          <h4>{DummyData[0].ambulance}</h4>
        </div>
        
        <div className="fire-contact">
          <h4>Fire</h4>
          <h4>{DummyData[0].fire}</h4>
        </div>
        
        <div className="police-contact">
          <h4>Police</h4>
          <h4>{DummyData[0].police}</h4>
        </div>

        <div className="embassy-contact">
          <h4>Embassy</h4>
          <h4>{DummyData[0].embassy}</h4>
        </div>

      </div>

      <h3>A-Z Country Directory</h3>
      <div className="emergency-directory">
        <div className="country-list">
          <h5>Country</h5>
          
        </div>

        <div className="ambulance-list">
          <h5>Ambulance</h5>
        </div>

        <div className="fire-list">
          <h5>Fire</h5>
        </div>

        <div className="police-list">
          <h5>Police</h5>
        </div>

        <div className="embassy-list">
          <h5>Embassy</h5>
        </div>


      </div>

    </div>
  )
}

export default Contacts