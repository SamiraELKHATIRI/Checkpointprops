import './App.css';
import React from "react" ;
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";

function Player (props) {
  
  return (<>
  <div>
    <Card style={{ width: '18rem' }}> 
    <Card.Img className='Image1' variant="top" src={props.srcImages} />
    <Card.Body>
        <Card.Title>{props.nomm}</Card.Title>
        <Card.Title>{props.Poidss}</Card.Title>
        <Card.Title>{props.Taillee}</Card.Title>
        <Card.Title>{props.Agee}</Card.Title>
    </Card.Body>
  </Card>
   
     </div>
  </>)
 }
 

Player.propTypes={
  nom: PropTypes.string,
  Poids: PropTypes.string,
  Taille: PropTypes.string,
  Age: PropTypes.string,
  srcImage: PropTypes.string
}

Player.defaultProps=[{
nom: "Yasser",
Poids : "73 kg",
Taille:"38 m",
Age:"45 ans",
srcImage:"https://cdn-icons-png.flaticon.com/512/149/149071.png"
}]


export default Player ;