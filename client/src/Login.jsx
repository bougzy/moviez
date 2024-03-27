import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const UserLoginComponent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://moviez-backend.vercel.app/api/users/login', formData);
      console.log(response.data);

      // Redirect to the dashboard upon successful login
      console.log('Navigating to dashboard');
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.response.data);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-4 text-center vh-100 border-4 shadow-lg w-100">
      <Form onSubmit={handleFormSubmit} className="p-5 m-3 rounded" style={{ color: "white", background: "purple" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3 w-50 border border-white" style={{ color: "white", background: "purple" }}>
          Login
        </Button>
        <p>You don't have an account?
          <Link to="/register" className="mt-2 ms-2 text-white" style={{ color: "white", textDecoration: "none" }}>Register</Link>
        </p>
      </Form>
    </div>
  );
};

export default UserLoginComponent;
