import "./AZDirectory.css";

export default function AZDirectory({ emergencyData }) {
  return (
    <div className="AZDirectory">
      <h2 className="az-title">A-Z Directory</h2>
      <div className="az-table-headers">
        <ul>
          <li>Country</li>
          <li>Fire</li>
          <li>Police</li>
          <li>Ambulance</li>
          <li>Embassy</li>
        </ul>
      </div>

      <div className="az-table">
        {emergencyData.payload.map((obj) => {
          return (
            <ul>
              <li>{obj.country}</li>
              <li>{obj.fire}</li>
              <li>{obj.police}</li>
              <li>{obj.ambulance}</li>
              <li>{obj.embassy}</li>
            </ul>
          );
        })}
      </div>
      {/* <ul className="table-header">
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
      </div> */}
    </div>
  );
}
