import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const notifySuccess = () => toast.success("Login Successful");
  const notifyWarning =()=> toast.error("Invalid credentials")
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      notifySuccess('Login Successful');
      navigate("/doctors/all")
    } else {
      notifyWarning();
    }
  };

  return (
    <div className=" login flex justify-center items-center h-1/2 bg-gray-100">
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" 
            required 
          />
        </div>
        <div className="mb-4">
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Login
        </button>
        <p className='my-4'>Don't have an account? <Link to="/signup" className='text-primary'>Sign up here</Link></p>
      </form>
  </div>
        
    </div>
  );
};

export default Login;
