import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  const notify =()=> toast.success("Registered Successfully")
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple logic to "store" signup data locally
    localStorage.setItem('user', JSON.stringify(formData));
    notify();
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center h-1/2 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              type="text" 
              name="fullName" 
              placeholder="Full Name" 
              value={formData.fullName} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border  rounded-lg focus:outline-none focus:border-primary" 
              required 
            />
          </div>
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
            Create account
          </button>
        <p className='my-4'>Already have an account? <Link to="/login" className='text-primary'>Login here</Link></p>
      </form>
    </div>
        
    </div>
  );
};

export default Signup;
