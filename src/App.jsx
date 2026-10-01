import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

   const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      
      <button className="openbtn" onClick={()=>setShowModal(true)}>Open Modal</button>


       {
        showModal && (
          <div id="modal">
            <button className="btn1" onClick={()=>setShowModal(false)} >  × </button>
            <h1>PAKISTAN ZINDABAD</h1>
            <img src="https://i.pinimg.com/736x/82/21/f0/8221f076bf1487055570509b67deacb1.jpg" alt="PAKFLAG" />
          </div>
        )
       }        
      
      
      
      
      
       </div>
      

    
  )
}

export default App
