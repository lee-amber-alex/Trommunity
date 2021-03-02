import React, { useRef, useState } from "react";
import { Alert} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
// import { Container } from "react-bootstrap";
import "./App.css";
import "../components/Styles/login.css"

// can check current user by {currentUser && CurrentUser.email or .whatever}

export default function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Login failed!");
    }

    setLoading(false);
  }

  return (
    <>
      <form
        action="/action_page.php"
        className="container"
        onSubmit={handleSubmit}
      >
        <p className="text-center">No money? No problem.</p>
        <h2 className="text-center mb-4">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="thecoolest@gmail.com"
          name="email"
          required
          ref={emailRef}
        />

        <label ref={passwordRef} for="psw">
          <b>Password</b>
        </label>
        <input
          id="password"
          type="password"
          placeholder="at least 6 characters"
          name="psw"
          required
          ref={passwordRef} 
        />
        <div className=" btn-div ">

        <button disabled={loading} type="submit" className="btn">
          Let's trade!
        </button>
       </div>
      </form>

      <div className="bg-bottom justify-content-center text-white">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>

      
    </>
  );
}
