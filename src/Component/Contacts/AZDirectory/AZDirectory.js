import "./AZDirectory.css";

// const emergencyData = {
//   payload: [
//     {
//       country: "TEST",
//       fire: "TEST",
//       ambulance: "TEST",
//       police: "TEST",
//       embassy: "TEST",
//     },
//     {
//       country: "TEST",
//       fire: "TEST",
//       ambulance: "TEST",
//       police: "TEST",
//       embassy: "TEST",
//     },
//     {
//       country: "TEST",
//       fire: "TEST",
//       ambulance: "TEST",
//       police: "TEST",
//       embassy: "TEST",
//     },
//     {
//       country: "TEST",
//       fire: "TEST",
//       ambulance: "TEST",
//       police: "TEST",
//       embassy: "TEST",
//     },
//     {
//       country: "TEST",
//       fire: "TEST",
//       ambulance: "TEST",
//       police: "TEST",
//       embassy: "TEST",
//     },
//     {
//       country: "TEST",
//       fire: "TEST",
//       ambulance: "TEST",
//       police: "TEST",
//       embassy: "TEST",
//     },
//     {
//       country: "TEST",
//       fire: "TEST",
//       ambulance: "TEST",
//       police: "TEST",
//       embassy: "TEST",
//     },
//     {
//       country: "TEST",
//       fire: "TEST",
//       ambulance: "TEST",
//       police: "TEST",
//       embassy: "TEST",
//     },
//     {
//       country: "TEST",
//       fire: "TEST",
//       ambulance: "TEST",
//       police: "TEST",
//       embassy: "TEST",
//     },
//     {
//       country: "TEST",
//       fire: "TEST",
//       ambulance: "TEST",
//       police: "TEST",
//       embassy: "TEST",
//     },
//     {
//       country: "TEST",
//       fire: "TEST",
//       ambulance: "TEST",
//       police: "TEST",
//       embassy: "TEST",
//     },
//     {
//       country: "TEST",
//       fire: "TEST",
//       ambulance: "TEST",
//       police: "TEST",
//       embassy: "TEST",
//     },
//     {
//       country: "TEST",
//       fire: "TEST",
//       ambulance: "TEST",
//       police: "TEST",
//       embassy: "TEST",
//     },
//     {
//       country: "TEST",
//       fire: "TEST",
//       ambulance: "TEST",
//       police: "TEST",
//       embassy: "TEST",
//     },
//   ],
// };

export default function AZDirectory({ emergencyData }) {
  return (
    <div className="AZDirectory">
      <h3>A-Z Directory</h3>
      <ul className="table-header">
        <li>Name</li>
        <li>Fire</li>
        <li>Police</li>
        <li>Ambulance</li>
        <li>Embassy</li>
      </ul>

      <div className="columns-div">
        <ul className="country-list">
          {emergencyData.payload.map((obj) => {
            return <li>{obj.country}</li>;
          })}
        </ul>
        <ul className="country-list">
          {emergencyData.payload.map((obj) => {
            return <li>{obj.fire}</li>;
          })}
        </ul>
        <ul className="country-list">
          {emergencyData.payload.map((obj) => {
            return <li>{obj.police}</li>;
          })}
        </ul>
        <ul className="country-list">
          {emergencyData.payload.map((obj) => {
            return <li>{obj.ambulance}</li>;
          })}
        </ul>
        <ul className="country-list">
          {emergencyData.payload.map((obj) => {
            return <li>{obj.embassy}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
