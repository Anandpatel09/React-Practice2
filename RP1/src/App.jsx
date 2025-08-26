import { useState } from 'react'
import './App.css'

function App() {
  let [color,setColor]=useState("white")

  return (
    <div>
    
    <div  style={{backgroundColor : color ,  minHeight: "100vh"}} >
       <button  onClick={()=>setColor("Red")} 
       style={{backgroundColor : "Red", 
       margin: "24px",
       padding:"12px",
       borderRadius:"10px"
       }}>Red</button>


       <button  onClick={()=>setColor("green")}
       style={{backgroundColor : "green", 
       margin: "24px",
       padding:"12px",
       borderRadius:"10px"
       }}>Green</button>



       <button  onClick={()=>setColor("black")}
       style={{backgroundColor : "black", 
       margin: "24px",
       padding:"12px",
       borderRadius:"10px",
       color:"white"
       }}>Black</button>


       <button  onClick={()=> setColor("yellow")}
       style={{backgroundColor : "yellow", 
       margin: "24px",
       padding:"12px",
       borderRadius:"10px"
       }}>yellow</button>

       <button  onClick={()=>setColor("blue")}
       style={{backgroundColor : "blue", 
       margin: "24px",
       padding:"12px",
       borderRadius:"10px",
       color:"white"
       }}>blue</button>

       <button  onClick={()=>setColor("White")}
       style={{backgroundColor : "white", 
       margin: "24px",
       padding:"12px",
       borderRadius:"10px",
       color:"black"
       }}>white</button>
    </div>


    </div>
  )
}

export default App
