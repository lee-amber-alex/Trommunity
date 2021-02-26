import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import placeholder from "../AppImg/placeholder6.png"

const styles = {
  text: {
    textAlign: "center",
  },
  color: {
    color: "white",
  }
};

export default function ClaimedCard(props) {
  const { currentUser } = useAuth();
  // console.log(props);
  return (
    <div>
      <Card style={{ width: "25rem", margin: "10px", backgroundColor: "#C22130"  }}>
        <Card.Img variant="top" src={placeholder} />
        <Card.Body style={styles.text}>
          <Card.Title style={styles.color}>Claimed by:  {props.email}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item><b>Giving User:</b> {props.need}</ListGroup.Item>
            <ListGroup.Item>
             <b>Getting from User:</b>  {`${props.trades} `}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
           <b>Additional info:</b>   {props.description}
          </ListGroup.Item>
          <Button {...props} variant="primary">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}