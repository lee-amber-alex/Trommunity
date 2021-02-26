import React from "react";
import Container from "react-bootstrap";

const styles = {
  header: {
    textAlign: "center",
  },
};

export default function Container(props) {
  return (
    <div>
      <h1 style={styles.header}>{props.children}</h1>
    </div>
  );
}
