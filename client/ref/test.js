import React, { useRef, useState } from "react";
import { Form, Button, Card, Row, Col, Alert } from "react-bootstrap";
import API from "../utils/API";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./styles/signup.css";



// can check current user by {currentUser && CurrentUser.email or .whatever}

<<<<<<< HEAD
export default function Signup() {
=======
export default function Signup(props) {
  const passwordConfirmRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const zipCodeRef = useRef();
>>>>>>> develop
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  
  console.log(options);

  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const cityRef = useRef();
  const tradeRef = useRef();

  function handleSelectChange(e) {
    e.preventDefault();
    // setOptions(e.target.value)
    if (options.includes(e.target.value)) {
      setOptions(options.filter(x => x !== e.target.value))
    } else {
      setOptions([...options, e.target.value]);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      API.saveUser({
        email: emailRef.current.value,
        city: cityRef.current.value,
        trade: options,
      }).then((result) => {
        console.log("Success!", result);
      });
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Sign up failed!");
    }

    setLoading(false);
  }
  console.log(tradeRef.current && tradeRef.current.value);

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {/* {currentUser.email} */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>            
          <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" ref={nameRef} required />
            </Form.Group><Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Form.Group id="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" ref={cityRef} required />
            </Form.Group>
            <Form.Group controlId="TradeGroups2">
              <Form.Label>Select Your Trade Skills:</Form.Label>
              <Form.Control
                value={options}
                onChange={handleSelectChange}
                as="select"
                multiple
              >
                <option>Cooking</option>
                <option>Cleaning</option>
                <option>Childcare</option>
                <option>Education</option>
                <option>Landscaping</option>
                <option>Mechanical</option>
                <option>Petcare</option>
                <option>Technical</option>
                <option>I will later</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Create Account</Button>
              </Col>
            </Form.Group>
<<<<<<< HEAD
=======
            <Form.Group id="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="zipCode" ref={zipCodeRef} required />
            </Form.Group>
            <Form.Group id="skillsSelect">
               <Form.Label>Select Skills</Form.Label>
                  <Form.Control as="select" multiple>
                    <option>Cooking</option>
                    <option>Cleaning</option>
                    <option>Landscaping</option>
                    <option>Auto Mechanics</option>
                    <option>Education/Tutoring</option>
                    <option>Plumbing</option>
                    <option>Childcare</option>
                    <option>Pet Care</option>
                    <option>Other</option>
                    <option>Choose Later</option>
                </Form.Control>    
           </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
>>>>>>> develop
          </Form>
        </Card.Body>
      </Card>
      <div className="justify-content-center linkMargin text-white">
        Already have an account?<Link to="login">Login</Link>
      </div>
    </>
  );
}
