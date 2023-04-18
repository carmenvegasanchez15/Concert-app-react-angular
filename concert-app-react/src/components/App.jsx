import { useState } from "react";
import '../style/index.css'
import { Info } from "./Info";
import { useFetchConcert } from "../hooks/useFetchConcert";

function App() {
  
  const [resultConcert, setResultConcert] = useState([])
  const [index, setIndex] = useState(0)

  // USO API
  // const {concerts ,isLoading} = useFetchConcert(resultConcert)

  const concert = [
    {
      'id': 'c1',
      "concert": "Concert 1",
      "artist": "Reagan Bennett",
      "city": "Lillehammer",
      "image" : "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      'id': 'c2',
      "concert": "Concert 2",
      "artist": "Malik Rice",
      "city": "Gatchina",
      "image": "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      'id': 'c3',
      "concert": "Concert 3",
      "artist": "Scott Dennis",
      "city": "Guadalajara",
      "image": "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      'id': 'c4',
      "concert": "Concert 4",
      "artist": "Scott Berg",
      "city": "Caxias do Sul",
      "image": "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      'id': 'c5',
      "concert": "Concert 5",
      "artist": "Scott Berg",
      "city": "Gatchina",
      "image": "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  let artistName, cityName = ''

  const onChangeName = (event)  =>{
    artistName = event.target.value    
  }

  const onChangeCity = (event)  =>{
    cityName = event.target.value    
  }

const search = () =>{
  let result=[]
  setIndex(1)
  if(artistName && !cityName){
    for (let index = 0; index < concert.length; index++) {
      if(concert[index].artist.includes(artistName)) result = [...result, concert[index]]
      setResultConcert(result)
    }
  }

  if(!artistName && cityName){
    for (let index = 0; index < concert.length; index++) {
      if(concert[index].city.includes(cityName)) result = [...result, concert[index]]
    }
    setResultConcert(result)
  }

  if(artistName && cityName){
    for (let index = 0; index < concert.length; index++) {
      if(concert[index].artist.includes(artistName) && concert[index].city.includes(cityName)){
        result = [...result, concert[index]]
      }
    }
    setResultConcert(result)
  }  
}

  return (
    <div>
      <h1>Search Concert</h1>
      <div className="form">
        <input type="text" placeholder="Artist" onChange={onChangeName} label='Artist'/>
        <input type="text" placeholder="City" onChange={onChangeCity} label='City'/>
        <button onClick={search}>Look for</button>    
      </div>
        {
            resultConcert.length>=1 ? 
              resultConcert.map((result) => {
                return(
                  <div key={result.id}>
                    <Info result={result} />
                  </div>
                )
            }) : (
              index!=0 && <p id="message-error-empty">Not found</p> 
              ) 
        }
          
            
        
    </div>
  )


  
}

export default App
