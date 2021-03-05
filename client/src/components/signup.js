import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import API from "../utils/API";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "../components/Styles/signup.css";

export default function Signup(props) {
  const nameRef = useRef();
  const { signup} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const passwordConfirmRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cityRef = useRef();
  const history = useHistory();

  function handleSelectChange(e) {
    e.preventDefault();
    // setOptions(e.target.value)
    if (options.includes(e.target.value)) {
      setOptions(options.filter((x) => x !== e.target.value));
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
      const user = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(user.user.uid);
      API.saveUser({
        userID: user.user.uid,
        email: emailRef.current.value,
        city: cityRef.current.value,
        skills: options,
      }).then((result) => {
        console.log("Going to API.js", result);
      });
      history.push("/");
    } catch {
      setError("Sign up failed!");
    }

    setLoading(false);
  }
  return (
    <>
      <form
        // action="/action_page.php"
        className="container"
        onSubmit={handleSubmit}
      >
        <p className="text-center">get what you need without spending a dime.</p>
        <h2 className="text-center mb-4">signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <label for="name">
          <b>name</b>
        </label>
        <input
          type="text"
          placeholder="jane doe"
          name="name"
          required
          ref={nameRef}
        />
        <label for="email">
          <b>email</b>
        </label>
        <input
          type="text"
          placeholder="janedoe@email.com"
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
          placeholder="enter password"
          name="psw"
          required
          ref={passwordRef}
        />
        <label for="psw">
          <b>password confirmation</b>
        </label>
        <input
          id="re-password"
          type="password"
          placeholder="re enter password"
          name="psw"
          required
          ref={passwordConfirmRef}
        />
        <label for="city">
          <b>where are you located?</b>
        </label>
        <input
          type="text"
          placeholder="awesome town"
          name="city"
          required
          ref={cityRef}
        />
        <div>
          <label>what are your trading skills?</label>
          <div>
            <select
              value={options}
              onChange={handleSelectChange}
              for="select-choice-2"
              name="select-choice-2"
              id="select-choice-2"
              multiple
            >
              <option>cooking</option>
              <option>cleaning</option>
              <option>landscaping</option>
              <option>auto Mechanics</option>
              <option>education/tutoring</option>
              <option>plumbing</option>
              <option>childcare</option>
              <option>petcare</option>
              <option>other</option>
              <option>select later</option>
            </select>
          </div>
        </div>
        <div className=" btn-div ">
          <button disabled={loading} type="submit" className="btn">
            let's trade!
          </button>
        </div>
        <div className="link" ><Link  to="login">already have an account?</Link></div>
        
      </form>
  
    </>
  );
}
