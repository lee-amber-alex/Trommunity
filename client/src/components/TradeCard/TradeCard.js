import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import placeholder from "../AppImg/placeholder5.png";
// import "./style.css";

const styles = {
  text: {
    textAlign: "center",
  },
  color: {
    color: "white",
  },
};

export default function TradeCard(props) {
  const { currentUser } = useAuth();
  // console.log(props);
  return (
    <div>
      <div className="card w-50">
        <div className="card-body">
          <h5 className="card-title">User: {props.email}</h5>
          <p className="card-text">
          <b>I need:</b> {props.need}
          </p>
          <p className="card-text">
          <b>And can trade you for:</b> {props.trades}
          </p>
          <p className="card-text">
          <b>Additional info:</b>
            {`  ${props.description}`}
          </p>
          <a href="#" className="btn btn-primary">
            Claim
          </a>
        </div>
      </div>
      {/* <Card
        style={{ width: "25rem", margin: "10px", backgroundColor: "#024994" }}
      >
        <Card.Img variant="top" src={placeholder} />
        <Card.Body style={styles.text}>
          <Card.Title style={styles.color}>User: {props.email}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <b>I need:</b> {props.need}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>And can trade you for:</b> {props.trades}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <b>Additional info:</b>
            {`  ${props.description}`}
          </ListGroup.Item>
          <Button {...props} variant="primary">
            Claim
          </Button>
        </Card.Body>
      </Card> */}
    </div>
  );
}
