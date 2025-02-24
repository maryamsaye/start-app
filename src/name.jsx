import React, { useState } from 'react';
import Whether from "./asset/ghhgnhg 1.png";
import { motion } from 'framer-motion';

const Name = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <motion.div
      className='contact-line'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className='whe-container'>
        <img src={Whether} alt='whether' className='whether' />
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            value={formData.name} 
            onChange={handleChange} 
          />

          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            value={formData.email} 
            onChange={handleChange} 
          />

          <label>Message</label>
          <textarea 
            name="message" 
            placeholder="Write your message here" 
            value={formData.message} 
            onChange={handleChange} 
          ></textarea>
          
          <button type="submit">Submit</button>
        </form>
        {submittedData && (
          <div className="submitted-data">
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Name;
