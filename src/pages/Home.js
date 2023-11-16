import React, {useState} from "react";
import Hero from "../components/Hero"
import AddMovie from "../components/AddMovie/AddMovie"
import Movies from "../components/Movies"

function Home(props) {
  const {item, setItem} = props
  return (
    <div>
      <Hero />
      <Movies item={item} setItem={setItem}/>
      
    </div>
  )
}

export default Home;