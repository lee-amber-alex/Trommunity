import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";


const TradePostForm = () => {
  const [options, setOptions] = useState([]);
  const [email, setEmail] = useState({});
  const [need, setNeed] = useState({});
  const [description, setDescription] = useState({});
  const { currentUser } = useAuth();
  const photoRef = useRef();
  const history = useHistory();

  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
 
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "dz1znszjs1");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dz1znszjs/image/uploade",
      formData
    ).then((response) => {
      console.log(response);
    });
    // previewFile(file);
    // setSelectedFile(file);
    // setFileInputState(e.target.value);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log(reader.result);
      setPreviewSource(reader.result);
    };
  };
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
      // photo: photoRef.current.value,
    })
      .then((result) => {
        console.log(result);
        history.push("/");
      })
      .catch((err) => console.log(err));

    // setNeed("");
    // setdescription("");
  };

  return (
    <div>
      <Form className="mt" onSubmit={handleFormSubmit}>
      
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="letters">I need:</Form.Label>
          <Form.Control
            name="need"
            onChange={(e) =>
              setNeed(e.target.value )
            }
            type="text"
            placeholder=""
          />
        </Form.Group>
        <Form.Group controlId="TradeGroups2">
          <Form.Label className="letters">Trade you for:</Form.Label>
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
            <option>Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label className="letters">Description</Form.Label>
          <Form.Control
            name="description"
            onChange={(e) =>
              setDescription(e.target.value )
            }
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Group>
          <Form.File
            className="position-relative"
            // required
            name="file"
            label="Upload Photo"
            id="fileInput"
            // type="file"
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-input"
            // isInvalid={!!errors.file}
            // feedback={errors.file}
            id="validationFormik107"
            feedbackTooltip
          />
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Post Trade</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default TradePostForm;
