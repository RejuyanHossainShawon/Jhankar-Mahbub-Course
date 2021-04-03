import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
   const[articles,setArticles] = useState([]);
   

    useEffect(() =>{
        const url = 'http://newsapi.org/v2/everything?q=apple&from=2021-03-11&to=2021-03-11&sortBy=popularity&apiKey=c36545eb0b0140fc89c31c9828977a06'
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
       

    },[])
    return (
        <div>
            <h2>This is form top headline</h2>
            <h3>{articles.length}</h3>
            {
              articles.map(article => <News article={article}></News>) 
            }
        </div>
    );
};

export default TopHeadline;