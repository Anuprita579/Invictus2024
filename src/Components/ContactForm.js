import React, { useState } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import Filter from './Filter';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <>
        <div className='h-full w-full'> 
            <div className='bg-gradient-to-br from-purple-700 to-blue-700 flex flex-col justify-center align-middle items-center p-6 py-10 w-full'>
                <h1 className='text-5xl font-semibold text-white p-2 max-md:text-3xl'>Contact Us </h1>
                <p className='text-yellow-400'>Have Questions, Ask Us </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
        />

        <label htmlFor="email">Email:</label>
        <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
        />

        <label htmlFor="message">Message:</label>
        <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
        />
        
        <button type="submit" className='bg-blue-500 p-2 rounded-xl'>Submit</button>
        </form>

        </div>
        
    </>
  );
};

export default ContactForm;