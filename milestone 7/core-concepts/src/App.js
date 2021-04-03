import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['manna','josim','eliyas','romajn','rofiz'];
  const products =[
    {name:'photoshop',price:'$90.99'},
    {name:'Illustrator',price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'},
    {name:'adove Photo ',price:'$245.99'}
  ]
  
  const  friends = [
    {name:'Moon',age:23},
    {name:'nahid',age:23},
    {name:'rohim',age:23},
    {name:'jabbar',age:23},
    {name:'Sazzad',age:23}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <User></User>
        <Post></Post>
        <ul>
          {
          nayoks.map(nayok=><li>{nayok}</li>)
          }

          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <p>Now i m learning react.js its a library of java script</p>
        {
          products.map(product =><Product product={product}></Product> )
        }
        
        
        
        <h1>this is my friend list dynamically shown </h1>
        {
           friends.map(friend =><Friends info={friend}></Friends>)
        }
       
       
      
      </header>
    </div>
  );
}
function Counter() {
  const[count,setCount] = useState(0);
 // const handleIncrease = () => setCount(count +1);

  
  return(
    <div>
      <h1>Count : {count} </h1>
      
      <button onMouseOver={() => setCount(count -1)}>Decrease</button>
      <button onClick={() => setCount(count +1)}>Increase</button>
    </div>
  )
  
}

function Product(props) {
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'

  }
const {name,price} = props.product;

  return (
    <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy now</button>
    </div>
  )
  
}
function  Person(props) {
  const personStyle = {
    border: '2px solid red',
    margin:'10px'
  
    
  }
  return(
  <div style={personStyle}>
    
      <h1>Nayok:{props.name}</h1>
      <h3>Hero of {props.nayka}</h3>
      <h3>Learning ReactJS .</h3>
  
  </div>
    
  ) 

  
}
 function Friends(profs) {
   const {name,age}= profs.info;
   
   return (
     <div>
          <h3>{name}</h3>
          <h5>{age}</h5>
     </div>
   )
 }

 function User(){

  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
   return(
     <div>
          <h3>Dynamic User{users.length}</h3>
          <ul>
            {
              users.map(user => <li>{user.name}</li>)
            }
          </ul>
     </div>
   )
 }

 function Post() {
   const [posts,setPosts] = useState([]);

   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data))
   },[])
   


  return(
    <div>
         <h2>Post length :{posts.length} </h2>
         <ol>
            {
              posts.map(post =><li>{post.title}</li> )
            }
         </ol>
         
    </div>
  )
   
 }

export default App;
