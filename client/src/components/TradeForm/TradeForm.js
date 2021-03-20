import React, { useState } from "react";
// import React, { useState, useRef, useEffect } from "react";
// // import Axios from "axios";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "../Styles/tradeform.css";

const TradeForm = () => {
  const [options, setOptions] = useState([]);
  const [need, setNeed] = useState({});
  const [description, setDescription] = useState({});
  const { currentUser } = useAuth();
  const history = useHistory();

  function handleSelectChange(e) {
    e.preventDefault();
    if (options.includes(e.target.value)) {
      setOptions(options.filter((x) => x !== e.target.value));
    } else {
      setOptions([...options, e.target.value]);
    }
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(currentUser.uid);
    API.saveTrade({
      userID: currentUser.uid,
      need: need,
      trades: options + ", ",
      description: description,
      // img: selectedFile,
    })
      .then((result) => {
        console.log(result);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container-forced form-container">
        <form
          className="form"
          onSubmit={handleFormSubmit}
          action="action_page.php"
        >
          <label className="content-style">What do you need?</label>
          <input
            className="content-style description"
            id="need"
            name="need"
            placeholder="Enter item or service here"
            onChange={(e) => setNeed(e.target.value)}
          />

          <label className="content-style" >
            What item or service will you trade in return?
          </label>
          <div className="content-style">
            <select
              value={options}
              onChange={handleSelectChange}
              // for="select-choice-2"
              name="select-choice-2"
              id="select-choice-2"
              multiple
            >
              <option>Cooking</option>
              <option>Cleaning</option>
              <option>Landscaping</option>
              <option>Auto Mechanics</option>
              <option>Education/Tutoring</option>
              <option>Plumbing</option>
              <option>Childcare</option>
              <option>Pet Care</option>
              <option>Other</option>
            </select>
          </div>
{/* for="subject" */}
          <label className="content-style" >
            Additional info:
          </label>
          <br />
          <input
            className="content-style description"
            name="description"
            placeholder="Describe your trade and how to contact you.."
            // style="height:200px"
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <br />

          <button
            type="submit"
            className="btn btn-outline-success"
            value="Submit"
          >
            {" "}
            Let's Trade!
          </button>
        </form>
      </div>
    </>
  );
};

export default TradeForm;
