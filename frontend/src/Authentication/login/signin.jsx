import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./login.css";
// import axios from 'axios';
// import newApiUrl from '../../TablePages/config';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignForm = () => {

    // console.log(props.name);
  const navigate = useNavigate();
  const [emp_id, setEmp_id] = useState("");
  const [emp_pass, setEmp_pass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");


  const win = window.sessionStorage;
//   const win = window.localStorage;

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, 2000);
  }, [msg]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "emp_id":
        setError(" ");
        setEmp_id(e.target.value);
        if (e.target.value === " ") {
          setError("username has left blank");
        }
        break;

      case "emp_pass":
        setError(" ");
        setEmp_pass(e.target.value);
        if (e.target.value === " ") {
          setError("pass has left blank");
        }
        break;
      default:
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    // win.clear();

    if (emp_id !== "" && emp_pass !== "") {
      var url = "http://192.168.239.70/json/login.php";
      var headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      var Data = {
        emp_id: emp_id,
        emp_pass: emp_pass,
      };

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response[0].result === "Invalid username bhai") {
            setError(response[0].result);
          } else {
            const token = response[0].token;

            // Save the token in local storage
            localStorage.setItem("emp_id", emp_id);
            console.log(emp_id);

            setMsg(response[0].result);
            setTimeout(function () {
              navigate("/home");
            }, 3000);
          }
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
    } else {
      setError("All fields are required! ");
    }
  };

  useEffect(() => {
    if (win.getItem("emp_id"));
    setEmp_id(win.getItem("emp_id"));


    if (win.getItem("emp_pass"));
    setEmp_pass(win.getItem("emp_pass"));

  }, []);

  useEffect(() => {
    win.setItem("emp_id", emp_id);
    win.setItem("emp_pass", emp_pass);
  }, [emp_id, emp_pass]);
  console.log(emp_id);
  console.log(emp_pass);
//   console.log(emp_position);



  return (
    <div>
      <Form>
        <div className="w3-container w3-card w3-white w3-round w3-margin main-box-login">
          <div className="container-login">
            <div className="forms-outline-login">
              <p className="tag-login">
                {error !== " " ? (
                  <h1 className="error">{error} </h1>
                ) : (
                  <h1 className="success"> {msg}</h1>
                )}
              </p>
              <div className="tag-login">
                <h2>Login</h2>
              </div>

              <div className="input-group-login">
                <div className="input-group-1-login">
                  <label className="labels-login">
                    User ID:<span className="required-mark">*</span>
                  </label>
                  <input
                    type="text"
                    name="emp_id"
                    className="form-control"
                    placeholder="User ID"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    value={emp_id}
                    onChange={(e) => handleInputChange(e, "emp_id")}
                  />
                </div>
              </div>
              <div className="input-group-login">
                <div className="input-group-1-login">
                  <label className="labels-login">
                    Password<span className="required-mark">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    // onChange={handleChange}
                    value={emp_pass}
                    onChange={(e) => handleInputChange(e, "emp_pass")}
                    required
                  />
                </div>
              </div>
              <div className="btn-submit-login">
                <Link to={{ 
                pathname: "/edit_employee",
                search: `?emp_id=${emp_id}`, 
                }}>
                <Button onClick={loginSubmit}> Log In</Button>
                </Link>
                {/* <Button variant='primary' > Log In</Button> */}
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SignForm;
