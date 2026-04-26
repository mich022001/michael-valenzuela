function Contact() {
  return (
    <div>
      <div className="section-header">
        <span className="section-label">Contact</span>
        <div className="section-line"></div>
      </div>

      <div className="contact-card">
        <h2 className="contact-title">Let’s work together</h2>
        <p className="contact-text">
          I’m open to roles involving full-stack development, backend systems,
          Android development, and technical problem solving.
        </p>

        <div className="contact-list">
          <a
            className="contact-item"
            href="mailto:valenzuelamichael6282@gmail.com"
          >
            <span>Email</span>
            <strong>valenzuelamichael6282@gmail.com</strong>
          </a>

          <a
            className="contact-item"
            href="https://github.com/mich022001"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <strong>mich022001</strong>
          </a>

          <a
            className="contact-item"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <strong>Michael Valenzuela</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
