import React, { useRef, useState } from "react";
import { Alert} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Header from "../components/Header/Header"
// import "./App.css";
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
    <Header/>
      <form
        action="/action_page.php"
        className="container"
        onSubmit={handleSubmit}
      >
        <p className="text-center">no money? no problem.</p>
        <h2 className="text-center mb-4">login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <label for="email">
          <b>email</b>
        </label>
        <input
          type="text"
          placeholder="thecoolest@gmail.com"
          name="email"
          required
          ref={emailRef}
        />

        <label ref={passwordRef} for="psw">
          <b>password</b>
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
          let's trade!
        </button>
       </div>
      </form>

      <div className="bg-bottom justify-content-center text-white">
        
        <a href="/signup">need an account?</a>
      </div>

      
    </>
  );
}
