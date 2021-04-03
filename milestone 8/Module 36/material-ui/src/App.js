
import './App.css';
import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import News from './Components/News/News';
import Chart from './Components/Chart/Chart';
import axios from 'axios';
function App() {
  const [articles,setArticles] = useState([]);

  // useEffect(() =>{
  //   fetch('http://newsapi.org/v2/everything?q=tesla&from=2021-02-17&sortBy=publishedAt&apiKey=c36545eb0b0140fc89c31c9828977a06')
  //   .then(response => response.json())
  //   .then(data => setArticles(data.articles));
    

  // },[])

  // data loading from api using axios.json(more efficient from fetch )\


  useEffect(() =>{
   axios('http://newsapi.org/v2/everything?q=tesla&from=2021-02-17&sortBy=publishedAt&apiKey=c36545eb0b0140fc89c31c9828977a06')
   .then(data => setArticles(data.data.articles))

    

  },[])
 
  return (
    <div >
      <h1>React Material UI Design </h1>
      <h2>This is Chart</h2>
      <Button>Material Button </Button>
      <Chart></Chart>
      
      {
        articles.map(article =><News article={article}></News>)
      }

    </div>
  );
}

export default App;
