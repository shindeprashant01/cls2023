import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './login.css';
import axios from 'axios';
import newApiUrl from '../../TablePages/config';




const LoginForm = () => {
    const [formData, setFormData] = useState({
        userID: '',
        password: '',
    });
 
    const login= async () => {
        try {
            const response = await axios.get('http://192.168.10.153/json/customer.php')
            // setViewCustomer(response.data);
            // setFilteredViewCustomer(response.data)
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
            console.log(formData)
    };

    const handleSubmit = (event) => {
        // event.preventDefault();
        // You can handle form submission logic here, e.g., sending data to a server.
    const sendData ={
            userID:formData.userID,
            password: formData.password
        }
        console.log('Registration data:', sendData);
        axios.get(`${newApiUrl}/login.php`,)
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
                                        name='userID'
                                        className="form-control"
                                        placeholder="User ID"
                                        aria-label="Large"
                                        aria-describedby="inputGroup-sizing-sm"
                                        onChange={handleChange}
                                        value={formData.username}
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
                            <div className='btn-submit-login'  onSubmit={handleSubmit}>
                            <Button variant='primary' > Log In</Button>
                            </div>
                           
                        </div>
                     
                    </div>
                   
                </div>
      
            </Form>
        </div>
    );
}

export default LoginForm;
