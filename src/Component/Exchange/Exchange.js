import React, { useEffect, useState } from 'react';
//import {Chart, data} from "./Chart" - component moved into here
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
//choosing type of chart
import { Line } from 'react-chartjs-2';
import './Exchange.css';


function Exchange() {

  const [url, setUrl] = useState(``)
  const [historical, setHistorical] = useState("")
  const [to, setTo] = useState("")
  const [from, setFrom] = useState("")
  const [amount, setAmount] = useState("")
  const [rate, setRate] = useState("")
  const [result, setResult] = useState("")
  const [bottomAxis, setBottomAxis] = useState([])
  const [sideAxis, setSideAxis] = useState([])
  
  //needed to send through API fetch, will not accept apikey without this
  const myHeaders = new Headers();
  myHeaders.append("apikey", "o62KHCs9aHwr3OhHAVnkz6ldvYGc4edD");
  
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

  
      setResult(data.result)
      setRate(data.info.rate)
      //fake data to use to not have to request from API
      // let data2 = {
      //               "success": true,
      //               "timeseries": true,
      //               "start_date": "2022-07-20",
      //               "end_date": "2022-07-27",
      //               "base": "USD",
      //               "rates": {
      //                   "2022-07-20": {
      //                       "GBP": 0.83535
      //                   },
      //                   "2022-07-21": {
      //                       "GBP": 0.83365
      //                   },
      //                   "2022-07-22": {
      //                       "GBP": 0.833021
      //                   },
      //                   "2022-07-23": {
      //                       "GBP": 0.833021
      //                   },
      //                   "2022-07-24": {
      //                       "GBP": 0.834304
      //                   },
      //                   "2022-07-25": {
      //                       "GBP": 0.82957
      //                   },
      //                   "2022-07-26": {
      //                       "GBP": 0.830825
      //                   },
      //                   "2022-07-27": {
      //                       "GBP": 0.822205
      //                   }
      //               }
      //           }
      
      //this drills down into the returned data to get the array for the rates
      const ratesArray = data2.rates;
      
      const ratesArray2 = Object.values(ratesArray);
      
        //const ratesArray3 = Object.values(ratesArray2); - we don't think we need this one
      
      const please = ratesArray2.map((item) => {
        return item[to]
      })

      setSideAxis(please)


      const xAxis = data2.rates

      //this is the array for the bottom axis of the chart with the dynamic dates from the historical fetch
      const yAxis = Object.keys(xAxis)
      setBottomAxis(yAxis)

    }
    getRates()
  }, [url])


//gets today's date minus 24 hours, so YESTERDAY's date, as UNIX timestamp
const yesterday = Date.now() - 86400000;
//gets the date 8 days previous (using same method of subtracting from the UNIX timestamp)
const eightDays = Date.now() - 691200000;


let unix_timestamp = yesterday

//converts UNIX timestamp to JS date/timestamp
const date = new Date(unix_timestamp);

//extrapolates year
const year = date.getFullYear();
//extrapolates month and turns into double-digit readout so 07 rather than 7 for eg. This required for API fetch parameters
const month = (('0' + (date.getMonth()+1)).slice(-2));
//extrapolates date and likewise gives double-digit readout
const day = ('0' + date.getDate()).slice(-2);

const formattedTime = `${year}-${month}-${day}`;


//code repeated to get the second date required for API fetch for historical rates
let unix_timestamp2 = eightDays

const date2 = new Date(unix_timestamp2);

const year2 = date2.getFullYear();
const month2 = (('0' + (date2.getMonth()+1)).slice(-2));
const day2 = ('0' + date2.getDate()).slice(-2);

//date needs to be in specific format for API fetch
const formattedTime2 = `${year2}-${month2}-${day2}`;


  //first fetch for currency conversion, second fetch for timeseries to create chart
  function handleClick() {
    setUrl(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`)
    setHistorical(`https://api.apilayer.com/fixer/timeseries?start_date=${formattedTime2}&end_date=${formattedTime}&base=${from}&symbols=${to}`)
  }

  console.log()

  //this is the start of the chart
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const top = 'top'
  
  const options = {
      responsive: true,
      plugins: {
        legend: {
          position: top,
        },
        title: {
          display: true,
          // text: 'Chart.js Line Chart',
        },
      },
    };
    
    //this sets the labels on the bottom axis
    const labels = bottomAxis;
  
    //this is the fake array for rates which needs to be worked on
    //const arr = [1, 2, 3, 4]
    const data = {
      labels,
      datasets: [
        {
          label: `${from.toUpperCase()} to ${to}`,
          data: sideAxis,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };


  return (
    <div>
      <h2 className="page-title">Exchange Rate Checker</h2>
      <div className="amount-input">
        <label htmlFor="Amount">Amount</label>
        <input className="input-box" id="Amount" onChange={(e) => {setAmount(e.target.value)}}></input>
      </div>
      <div className="rates-flex">
        <div className="rates-input">
          <label htmlFor="From">From</label>
          <input className="input-box" id="From" onChange={(e) => {setFrom(e.target.value)}}></input>
        </div>
        <div className="rates-input">
          <label htmlFor="To">To</label>
          <input className="input-box" id="To" onChange={(e) => {setTo(e.target.value.toUpperCase())}}></input>
        </div>
        <div className="rates-input">
          <label htmlFor="Rate">Rate</label>
          <input className="input-box" id="Rate" value={rate}></input>
        </div>
      </div>
      <div className="get-rates">
        <h3 className="text-result">{Number(result).toFixed(2)}</h3>
        <button className="get-rate-button" onClick={handleClick}>Get Rate</button>
      </div>
      <h4 className="graph-title">The last 7 days trend</h4>
      <Line options={options} data={data} />
    </div>
  )
}

export default Exchange;
