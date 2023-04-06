import React, { useEffect } from 'react'
import SearchBar from './SearchBar'
import "./HomeScreen.css"
import useInputState from '../hooks/useInputState';


export default function HomeScreen() {

  const [artist, updateArtist, resetArtist] = useInputState("");

  const handleClick = () => {
      console.log("getting artist " + artist);
      resetArtist();
  }

  useEffect(()=>{
    console.log(artist);
  });

  return (
    <div className='homeScreen'>
        <h1>Artist Database</h1>
        <SearchBar artist={artist} updateArtist={updateArtist} onClick={handleClick}/>
    </div>
  )
}
