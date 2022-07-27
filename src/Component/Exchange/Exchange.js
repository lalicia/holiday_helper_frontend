import React, { useEffect, useState } from 'react'


function Exchange() {

  const [url, setUrl] = useState(``)
  const [historical, setHistorical] = useState("")
  const [to, setTo] = useState("")
  const [from, setFrom] = useState("")
  const [amount, setAmount] = useState("")
  const [rate, setRate] = useState("")
  const [result, setResult] = useState("")
  

  const myHeaders = new Headers();
  myHeaders.append("apikey", "ceOxREYQmPl9dCBWITKCRKxEnL7Ydg4Z");
  
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  useEffect(() => {
    async function getRates() {
      const response = await fetch(url, requestOptions)
      const response2 = await fetch(historical, requestOptions)

      let data = await response.json()
      let data2 = await response2.json()
  
      console.log(data)
      console.log(data2)
      setResult(data.result)
      setRate(data.info.rate)
    }
    getRates()
  }, [url])

  // fetch("https://api.apilayer.com/fixer/timeseries?start_date={start_date}&end_date={end_date}", requestOptions)


  
  
  function handleClick() {
    setUrl(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`)
    setHistorical(`https://api.apilayer.com/fixer/timeseries?start_date=2022-07-18&end_date=2022-07-25&base=${from}&symbols=${to}`)
  }

  return (
    <>
      <h2>Exchange Rate Checker</h2>
      <div>
        <label htmlFor="Amount">Amount</label>
        <input id="Amount" onChange={(e) => {setAmount(e.target.value)}}></input>
      </div>
      <div>
        <label htmlFor="From">From</label>
        <input id="From" onChange={(e) => {setFrom(e.target.value)}}></input>
        <label htmlFor="To">To</label>
        <input id="To" onChange={(e) => {setTo(e.target.value)}}></input>
        <label htmlFor="Rate">Rate</label>
        <input id="Rate" value={rate}></input>
      </div>
      <h3>{result}</h3>
      <button onClick={handleClick}>Get Rate</button>
      <h4>The last 7 days trend</h4>
    </>
  )
}

export default Exchange