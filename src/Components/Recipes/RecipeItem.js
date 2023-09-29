import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
//import './Components/style.css';
import "./Recipe.css";
export const RecipeItem = (getMeal) => {
  console.log(getMeal.data);
  return (
    <>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={getMeal.data.strMealThumb} alt="meal" />
        <Card.Body>
          <Card.Title>{getMeal.data.strMeal}</Card.Title>
          <Card.Text>{getMeal.data.strArea}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{getMeal.data.strInstructions}</ListGroup.Item>
        </ListGroup>
        <Card.Body className="video">
          <Card.Link href={getMeal.data.strSource}>Watch video</Card.Link>
        </Card.Body>
      </Card>

      {/* <div className="card">
                        <img src={getMeal.data.strMealThumb} alt="meal"/>
                        <div className ="info">
                        <h2>{getMeal.data.strMeal}</h2>
                        <p>{getMeal.data.strArea} food</p>
                        </div>
                        
                        <div className ="recipe">
                            <h2>Recipe</h2>
                            <p>{getMeal.data.strInstructions}</p>
                            <img src={getMeal.data.strMealThumb}/>
                            <a href={getMeal.data.strSource}>Watch video</a>
                        </div>
            </div>   */}
    </>
  );
};
