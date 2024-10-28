import { contactUsCover } from "../../assets/images";
import InfoPage from "./InfoPage";
import styles from './infoPages.module.scss';
import useForm from "../../hooks/useForm";

const Contact = () => {
  const { formData, handleChange, handleSubmit, isError, isSubmit } = useForm({
    name: '',
    email: '',
    message: ''
  });

  const submitForm = () => {
    console.log('Form submitted successfully:', formData);
  };

  return (
    <div className="contact-us-page">
      <InfoPage 
        featuredImage={contactUsCover} 
        header={'Contact Us'} 
        mainText={['For questions, comments or general enquiries, please get in touch at hello@mychai.co.uk or fill in our contact form below.']}
      />
      {isSubmit ? <p className={styles['submit-message']}>Thank you for contacting us. We'll get back to you soon!</p> : ''}
      {isError ? <p className={`${styles['error-message']}`}>Please fill out all fields</p> : ''}

      <form className="main-form" onSubmit={(e) => handleSubmit(e, submitForm)}>
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
  );
}

export default Contact;
