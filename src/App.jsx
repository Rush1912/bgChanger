import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  //const changeColor = () => color='red';
  return (
    
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl bg-white '>
            <button 
           // onClick={setColor("red")}    //will not work
           onClick={()=>setColor("red")}
            className='px-4 rounded-xl text-white font-bold' style={{backgroundColor:"red"}}>RED</button>
            <button 
            onClick={()=>setColor("green")}
            className='px-4 rounded-xl text-white font-bold' style={{backgroundColor:"green"}}>GREEN</button>
            <button 
            onClick={()=>setColor("blue")}
            className='px-4 rounded-xl text-white font-bold' style={{backgroundColor:"blue"}}>BLUE</button>
            <button className='px-4 rounded-xl text-white font-bold'
            onClick={()=>setColor("pink")}
            style={{backgroundColor:"pink"}}>PINK</button>
            <button
            onClick={()=>setColor("gray")}
            className='px-4 rounded-xl text-white font-bold' style={{backgroundColor:"gray"}}>GRAY</button>
            <button
            onClick={()=>setColor("black")}
            className='px-4 rounded-xl text-white font-bold' style={{backgroundColor:"black"}}>BLACK</button>
          </div>
        </div>
      </div>
    
  )
}

export default App