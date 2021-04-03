import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks =[{name:'jasim',age:21},{name:'manna',age:232},{name:'shakib khanna'},{name:'deepjol',age:22}];
  return (
    <div className="App">
      <MoviesCounter></MoviesCounter>
      {
        nayoks.map(nayok =><Nayoks age={nayok.age} name={nayok.name}></Nayoks> )
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function  MoviesDisplay(props) {
  return <h5>Movies i have acted:{props.number} </h5>
  
}

function Nayoks(props) {
  

   const nayoksStyle={
     color:'red',
     
     margin:'20px',
     border:'2px solid purple'
   }
  return (
    <div style={nayoksStyle}>
        <h1>Ami Kholnayok {props.name}</h1>
        <p>i have done 5 movies in {props.age || 30} years old</p>
    </div>
  )
}
function MoviesCounter() {
  const [count,setCount] = useState(0);
  
   return(
     <div>
         <button onClick={()=>setCount(count+1)}>Add movies</button>
         <h2>Number of movies:{count}</h2>
         <MoviesDisplay number={count}></MoviesDisplay>
         <MoviesDisplay number={count-4}></MoviesDisplay>
         <MoviesDisplay number={count+3}></MoviesDisplay>
         <MoviesDisplay number={count+7}></MoviesDisplay>
     </div>
   )

    
}
export default App;
