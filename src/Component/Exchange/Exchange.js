import React, { useEffect, useState } from 'react';
import {Chart, data} from "./Chart"

function Exchange() {

  const [url, setUrl] = useState(``)
  const [historical, setHistorical] = useState("")
  const [to, setTo] = useState("")
  const [from, setFrom] = useState("")
  const [amount, setAmount] = useState("")
  const [rate, setRate] = useState("")
  const [result, setResult] = useState("")
  

  const myHeaders = new Headers();
  myHeaders.append("apikey", "YvAG8rpVVJsK2lU4u4TQ4XsG2pZJFxJu");
  
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
  
      // console.log(data)
      console.log(data2.rates)
      setResult(data.result)
      setRate(data.info.rate)
    }
    getRates()
  }, [url])



const yesterday = Date.now() - 86400000;
const eightDays = Date.now() - 691200000;

// console.log(yesterday)

let unix_timestamp = yesterday

const date = new Date(unix_timestamp);

const year = date.getFullYear();
const month = (('0' + (date.getMonth()+1)).slice(-2));
const day = ('0' + date.getDate()).slice(-2);

const formattedTime = `${year}-${month}-${day}`;

// console.log(formattedTime)


let unix_timestamp2 = eightDays

const date2 = new Date(unix_timestamp2);

const year2 = date2.getFullYear();
const month2 = (('0' + (date2.getMonth()+1)).slice(-2));
const day2 = ('0' + date2.getDate()).slice(-2);

const formattedTime2 = `${year2}-${month2}-${day2}`;

// console.log(formattedTime2)



  function handleClick() {
    setUrl(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`)
    setHistorical(`https://api.apilayer.com/fixer/timeseries?start_date=${formattedTime2}&end_date=${formattedTime}&base=${from}&symbols=${to}`)
  }

  console.log()

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
      <Chart/>
    </>
  )
}

export default Exchange;
