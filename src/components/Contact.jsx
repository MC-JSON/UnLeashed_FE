import emailjs from "emailjs-com";
import {useState} from 'react'

const Contact = () => {
  const [sender_name, set_sender_name] = useState();
  const [sender_email, set_sender_email] = useState();
  const [message, setMessage] = useState()

  const handleName = (e) => {
    set_sender_name(e.target.value)
  }
  const handleEmail = (e) => {
    set_sender_email(e.target.value)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_3fc3mlg', 'template_w0zcj1m', {sender_name, sender_email, message}, 'whiVCRiAWVteC0UfO').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    set_sender_name('');
    set_sender_email('');
    setMessage('')
  };
  return (
    <div className="contact-form">
      <h4>Do you have any travel recommendations for Ruth?</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="sender_name" value={sender_name} onChange={handleName} required placeholder="Your Name" />
        <input type="email" name="sender_email" value={sender_email} onChange={handleEmail} required placeholder="Your Email" />
        <input name="message" value={message} onChange={handleMessage} required placeholder="Travel Recommendations" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default Contact;