// import React, { useState } from 'react'

// function Location() {

//     const [cityName, setCity] = useState('')

//     const getCityName = () => {
//         const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey={ApiKey}={}` 
//         fetch(url)
//             .then(res => res.jason())
//             .then(res => console.log(res));
        
//     };


//   return (
//       <div>
//           <input
//               value={name}
//               onChange={e => setCity(e.target.value)}
//           />
//           <button onClick={getCityName}>search</button>
//       </div>
      
//   )
// }

// export default Location