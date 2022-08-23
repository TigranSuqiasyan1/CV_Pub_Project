import logo from './logo.svg';
import './App.css';
import { MyRouter } from './router/MyRouter';
import { useState } from 'react';
import { MyContext1 } from './MyContext';

function App() {
  const [state, setState] =useState({
    bool:true,
    // light:{
    //      background:'#ffa',
    //      color:"#005"
    // }, 
    dark:{
         background:'#005',
         color:"#ffa"
    }
})
  return (
    <MyContext1.Provider value={{state, setState}}>

    <MyRouter/>
    </MyContext1.Provider>
  );
}

export default App;
