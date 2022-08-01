function DayComponent({ temp, day }) {
  // if there is temperature data for a specific day, return the following
  if (temp[day]) {
    return (
      // returns the first three letters of a day with the first letter capitalised (e.g "sunday" becomes "Sun")
      <div className="daily-div">
        <li className="days">{`${
          day.charAt(0).toUpperCase() + day.slice(1, 3)
        }`}</li>
        <li className="max-temp">{`${temp[day].max}\u00B0`}</li>
        <li> {`${temp[day].min}\u00B0`}</li>
      </div>
    );
    // if there isn't data (e.g null) return the following
  } else {
    return (
      <div className="daily-div">
        <li className="days">{`${
          day.charAt(0).toUpperCase() + day.slice(1, 3)
        }`}</li>
        <li className="max-temp">--</li>
        <li>--</li>
      </div>
    );
  }
}

export default DayComponent;
