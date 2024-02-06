import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './login.css';
import axios from 'axios';
import newApiUrl from '../../TablePages/config';
import { Link} from 'react-router-dom';




const LoginForm = () => {
    const [formData, setFormData] = useState({
        emp_id: '',
        password: '',
    });
 
    // const login= async () => {
    //     try {
    //         const response = await axios.get(`${newApiUrl}/json/login.php`)
    //         // setViewCustomer(response.data);
    //         // setFilteredViewCustomer(response.data)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
            console.log(formData)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can handle form submission logic here, e.g., sending data to a server.
    // const sendData ={
    //         emp_id:formData.emp_id,
    //         password: formData.password
    //     }
        // console.log('Registration data:', sendData);
        axios.get(`${newApiUrl}/login.php`,formData)
    };



    return (
        <div>



            <Form onSubmit={handleSubmit}>
                <div className="w3-container w3-card w3-white w3-round w3-margin main-box-login">
                    <div className="container-login">
                        <div className="forms-outline-login">
                            <div  className='tag-login'>
                            <h2>Login</h2>
                            </div>
                            
                            <div className="input-group-login">
                                <div className="input-group-1-login">
                                    <label className="labels-login">
                                        User ID:<span className="required-mark">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='emp_id'
                                        className="form-control"
                                        placeholder="User ID"
                                        aria-label="Large"
                                        aria-describedby="inputGroup-sizing-sm"
                                        onChange={handleChange}
                                        value={formData.emp_id}
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
                                        name='password'
                                        className="form-control"
                                        placeholder="Password"
                                        aria-label="Large"
                                        aria-describedby="inputGroup-sizing-sm"
                                        onChange={handleChange}
                                        value={formData.password}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='btn-submit-login' >

                            <Link to={{ 
                    pathname: "/home",
                    // search: `?pras/home`, 
                     }}><Button> Log In</Button></Link>
                            {/* <Button variant='primary' > Log In</Button> */}
                            </div>
                           
                        </div>
                     
                    </div>
                   
                </div>
      
            </Form>
        </div>
    );
}

export default LoginForm;
