import React from 'react';
import {Card,Button,Image} from 'react-bootstrap';
import './News.css';

const News = (props) => {
    
   
   const {title,description,urlToImage,} = props.article;

  
   
   console.log(props.article);
    
   
    return (
        <div>
<Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    
    <Card.Text>
    {description}
    </Card.Text>
    <Image className="image" src={urlToImage} roundedCircle />
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>



        </div>
        
    );
};

export default News;