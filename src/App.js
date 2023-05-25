import { useState } from 'react';
import './App.css'
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState('light')//

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor ="#21476e"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white"

    }
  }

  return (
    <>
      <Navbar title = "Siddheshwar" toggleMode = {toggleMode} mode =  {mode} aboutText = "About Us Sid" Home = "HomeAgain" />
      {/* get Defualt things */}
      <TextForm title = "Enter the Text Here:" mode =  {mode} />
      {/* <About/> */}

    </>
  );
}


export default App;

