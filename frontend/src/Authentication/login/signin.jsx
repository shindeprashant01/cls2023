import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./login.css";
import { useNavigate } from "react-router-dom";

const SignForm = () => {
  const navigate = useNavigate();
  const [emp_id, setEmp_id] = useState("");
  const [emp_pass, setEmp_pass] = useState("");
  const [emp_position, setEmp_position] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const win = window.sessionStorage;

  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, 2000);
  }, [msg]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "emp_id":
        setError("");
        setEmp_id(e.target.value);
        break;
      case "emp_pass":
        setError("");
        setEmp_pass(e.target.value);
        break;
      case "emp_position":
        setError("");
        setEmp_position(e.target.value);
        break;
      default:
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    if (emp_id !== "" && emp_pass !== "") {
      const url = "http://localhost/json/login.php";

      const headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      const Data = {
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
          console.log(response); // Log the response for debugging
          const result = response[0].result;
          if (result === "Invalid Password" || result === "Invalid Username" || result === "All fields are required") {
            setError(response[0].result);
          } else {
            localStorage.setItem("emp_id", emp_id);
            localStorage.setItem("emp_pass", emp_pass);

            setMsg(response[0].result);
            setTimeout(() => {
              navigate("/home");
            }, 1000);
          }
        })
        .catch((err) => {
          setError("An error occurred. Please try again.");
          console.log(err);
        });
    } else {
      setError("All fields are required!");
    }
  };

  useEffect(() => {
    if (win.getItem("emp_id")) setEmp_id(win.getItem("emp_id"));
    if (win.getItem("emp_pass")) setEmp_pass(win.getItem("emp_pass"));
    if (win.getItem("emp_position")) setEmp_position(win.getItem("emp_position"));
  }, []);

  useEffect(() => {
    win.setItem("emp_id", emp_id);
    win.setItem("emp_pass", emp_pass);
    win.setItem("emp_position", emp_position);
  }, [emp_id, emp_pass, emp_position]);

  return (
    <div>
      <Form>
        <div className="w3-container w3-card w3-white w3-round w3-margin main-box-login">
          <div className="container-login">
            <div className="forms-outline-login">
              <p className="tag-login">
                {error ? <h1 className="error">{error}</h1> : <h1 className="success">{msg}</h1>}
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
                    value={emp_pass}
                    onChange={(e) => handleInputChange(e, "emp_pass")}
                  />
                </div>
              </div>
              <div className="btn-submit-login">
                <Button onClick={loginSubmit}>Log In</Button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SignForm;
















// import React, { useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import "./login.css";
// // import axios from 'axios';
// // import newApiUrl from '../../TablePages/config';
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const SignForm = () => {

//     // console.log(props.name);
//   const navigate = useNavigate();
//   const [emp_id, setEmp_id] = useState("");
//   const [emp_pass, setEmp_pass] = useState("");
//   const [emp_position, setEmp_position] = useState("");
//   const [error, setError] = useState("");
//   const [msg, setMsg] = useState("");


//   const win = window.sessionStorage;  
// //   const win = window.localStorage;

//   useEffect(() => {
//     setTimeout(function () {
//       setMsg("");
//     }, 2000);
//   }, [msg]);

//   const handleInputChange = (e, type) => {
//     switch (type) {
//       case "emp_id":
//         setError(" ");
//         setEmp_id(e.target.value);
//         // if (e.target.value === " ") {
//           // setError("username has left blank");
//         // }
//         break;

//       case "emp_pass":
//         setError(" ");
//         setEmp_pass(e.target.value);
//         // if (e.target.value === " ") {
//         //   setError("pass has left blank");
//         //   navigate('/')
//         // }
//         break;
//         case "emp_position":
//           setError(" ");
//           setEmp_position(e.target.value);
//           // if (e.target.value === " ") {
//           //   setError("pass has left blank");
//           // }
//           break;
//       default:
//     }
//   };

//   const loginSubmit = (e) => {
//     e.preventDefault();
//     // win.clear();

//     if (emp_id !== "" && emp_pass !== "") {
//       var url = "http://localhost/json/login.php";
      
//       var headers = {
//         Accept: "application/json",
//         "Content-type": "application/json",
//       };
//       var Data = {
//         emp_id: emp_id,
//         emp_pass: emp_pass,
//       };

//       fetch(url, {
//         method: "POST",
//         headers: headers,
//         body: JSON.stringify(Data),
//       })
//         .then((response) => response.json())
//         .then((response) => {
//           if (response[0].result === "Invalid password" && response[0].result === "Invalid username") {
            
//             setError(response[0].result);

           
//           } else {
//             // const token = response[0].token;

//             // Save the token in local storage
//             localStorage.setItem("emp_id", emp_id);
//             localStorage.setItem("emp_pass", emp_pass);
//             console.log(emp_id);
//             console.log(emp_pass);

//             setMsg(response[0].result);
//             console.log("resultss",response)
//             setTimeout(function () {
//               navigate("/home");
//             }, 1000);

        
//           }
//         })
//         .catch((err) => {
//           setError(err);
//           console.log(err);
//         });
//     } 
//     else {
//       setError("All fields are required! ");
//     }
//   };

//   useEffect(() => {
//     if (win.getItem("emp_id"));
//     setEmp_id(win.getItem("emp_id"));


//     if (win.getItem("emp_pass"));
//     setEmp_pass(win.getItem("emp_pass"));

//     if (win.getItem("emp_position"));
//     setEmp_position(win.getItem("emp_postion"));

//   }, []);

//   useEffect(() => {
//     win.setItem("emp_id", emp_id);
//     win.setItem("emp_pass", emp_pass);
//     win.setItem("emp_position", emp_position);
//   }, [emp_id, emp_pass,emp_position]);
//   console.log(emp_id);
//   console.log(emp_pass);
//   console.log(emp_position);



//   return (
//     <div>
//       <Form>
//         <div className="w3-container w3-card w3-white w3-round w3-margin main-box-login">
//           <div className="container-login">
//             <div className="forms-outline-login">
//               <p className="tag-login">
//                 {error !== " " ? (
//                   <h1 className="error">{error} </h1>
//                 ) : (
//                   <h1 className="success"> {msg}</h1>
//                 )}
//               </p>
//               <div className="tag-login">
//                 <h2>Login</h2>
//               </div>

//               <div className="input-group-login">
//                 <div className="input-group-1-login">
//                   <label className="labels-login">
//                     User ID:<span className="required-mark">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="emp_id"
//                     className="form-control"
//                     placeholder="User ID"
//                     aria-label="Large"
//                     aria-describedby="inputGroup-sizing-sm"
//                     value={emp_id}
//                     onChange={(e) => handleInputChange(e, "emp_id")}
//                   />
//                 </div>
//               </div>
//               <div className="input-group-login">
//                 <div className="input-group-1-login">
//                   <label className="labels-login">
//                     Password<span className="required-mark">*</span>
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     className="form-control"
//                     placeholder="Password"
//                     aria-label="Large"
//                     aria-describedby="inputGroup-sizing-sm"
//                     // onChange={handleChange}
//                     value={emp_pass}
//                     onChange={(e) => handleInputChange(e, "emp_pass")}
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="btn-submit-login">
//                 {/* <Link to={{ 
//                 pathname: "/edit_employee",
//                 search: `?emp_position=${emp_position}`, 
//                 }}> */}
//                 <Button onClick={loginSubmit}> Log In</Button>
//                 {/* </Link> */}
//                 {/* <Button variant='primary' > Log In</Button> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default SignForm;
