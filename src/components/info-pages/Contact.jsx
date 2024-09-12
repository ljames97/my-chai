// Contact.jsc 

import { useState } from "react";
import { contactUsCover } from "../../assets/images";
import InfoPage from "./InfoPage";
import styles from './infoPages.module.scss';

const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.email === '') {
      setError(true);
      setIsSubmit(false);
      return;
    }

    setIsSubmit(true);
    setError(false);
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  }

  return (
    <div className="contact-us-page">
      <InfoPage featuredImage={contactUsCover} header={'Contact Us'} mainText={['For questions, comments or general enquiries, please get in touch at hello@mychai.co.uk or fill in our contact form below.']}/>
      {isSubmit ? <p className={styles['submit-message']}>Thank you for contacting us. We'll get back to you soon!</p> : ''}
      {error ? <p className={styles['submit-message']} id={styles['error-message']}>Please enter a valid email address</p> : ''}
      <form id={styles['contact-form']} onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name</label>
        <input 
          type="text"
          placeholder="Full Name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          placeholder="Email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="message">Message</label>
        <textarea 
          type="text"
          placeholder="Message"
          id="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button className="btn-primary">Send</button>
      </form>
    </div>
  )
}

export default Contact;