import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import placeholder from "../AppImg/placeholder4.png"


const styles = {
  text: {
    textAlign: "center",
  },
  color: {
    color: "white",
  }
};

export default function HistoryCard(props) {
  const { currentUser } = useAuth();
  // console.log(props);
  return (
    <div>
      <Card style={{ width: "25rem", margin: "10px", backgroundColor: "#486577"  }}>
        <Card.Img variant="top" src={placeholder} />
        <Card.Body style={styles.text}>
          <Card.Title style={styles.color}>User:  {props.email}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item><b>Posted:</b> {props.need}</ListGroup.Item>
            <ListGroup.Item>
              <b>Traded for:</b> {`${props.trades} `}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <b>Additional info:</b>  {props.description}
          </ListGroup.Item>
          <Button {...props} variant="primary">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
