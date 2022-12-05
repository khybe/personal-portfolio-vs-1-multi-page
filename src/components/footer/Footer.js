import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <nav className="footer-nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#my-work">My Work</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </nav>
      <div className="footer-contacts">
        <p>Khaibar Saadat</p>
        <a href="mailto:khybersaadat93@gmail.com">khybersaadat93@gmail.com</a>
        <p>(+420) 776 200 619</p>
        <a href="https://github.com/khybe">GitHub</a>
      </div>
      <address className="created-by">
        <p>
          <span>Written by:</span>
          <a href="mailto:khybersaadat93@gmail">Khaibar Saadat</a>
        </p>
        <p>
          <span>Designed by:</span>
          <a href="sabina.bastiova@gmail.com">Sabina Bastiova</a>
        </p>
        <p>
          <span> Location:</span> Czech Republic
        </p>
      </address>
    </section>
  );
};

export default Footer;
