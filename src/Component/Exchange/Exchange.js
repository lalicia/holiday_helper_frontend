import React from 'react'

function Exchange() {



  return (
    <>
      <h2>Exchange Rate Checker</h2>
      <div>
        <label for="Amount">Amount</label>
        <input id="Amount"></input>
        <label for="Date">Date (optional)</label>
        <input id="Date"></input>
      </div>
      <div>
        <label for="From">From</label>
        <input id="From"></input>
        <label for="To">To</label>
        <input id="To"></input>
        <label for="Rate">Rate</label>
        <input id="Rate"></input>
      </div>
    </>
  )
}

export default Exchange