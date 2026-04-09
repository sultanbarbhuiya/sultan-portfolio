function Contact() {
  return (
    <div className="page">
      <h1>Contact</h1>

      <div className="contact-item">Mobile: 1234567890</div>
      <div className="contact-item">WhatsApp: 1234567890</div>

      <div className="contact-item">
        Email: <a href="mailto:sultan123@gmail.com">sultan123@gmail.com</a>
      </div>

      <div className="contact-item">
        Facebook: <a href="https://facebook.com" target="_blank" rel="noreferrer">facebook.com/sultan</a>
      </div>

      <div className="contact-item">
        Instagram: <a href="https://instagram.com" target="_blank" rel="noreferrer">instagram.com/sultan</a>
      </div>

      <div className="contact-item">
        Github: <a href="https://github.com" target="_blank" rel="noreferrer">github.com/sultan</a>
      </div>

      <div className="contact-item">
        LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com/sultan</a>
      </div>

      <div className="contact-item">
        Location: Silchar, Assam, India
      </div>
    </div>
  );
}

export default Contact;