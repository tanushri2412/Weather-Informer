
import axios from "axios";
import {useState} from 'react';
function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        if(response.data==null)
        {
          console.log("Enter a valid city name");
          
         }
        else
      {
        setData(response.data)
        console.log(response.data)
      } 




      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>

      <div className = 'container'>

       <div className = 'top'>

        <div className = 'location'>
         <h4>{data.name}</h4>
        </div>

        <div className = 'temparature'>
          {data.main?<h1>{data.main.temp.toFixed()} °F</h1>:null}
        </div>

        <div className = 'description'>
         {data.weather?<marquee> <h2>{data.weather[0].description}</h2></marquee>:null}
        </div>

       </div>
       
       {data.name!=undefined&&

      <div className = 'bottom'>
       <div className='Feels'>
        {data.main?<p className='bold'>{data.main.feels_like.toFixed()} °F</p>:null}
        <p>Feels Like</p>
       </div>
      
       <div className='Humidity'>
        {data.main?<p className='bold'>{data.main.humidity} %</p>:null}
        <p>Humidity</p>
       </div>
       <div className='Winds'>
        {data.wind?<p className='bold'>{data.wind.speed} mph</p>:null}
        <p>Wind Speed</p>
       </div>
       </div>
}
      </div>
    </div>
  );
}

export default App;
