import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import MailSvg from "../assets/mail.svg";

function ContactForm() {
    return (
      <>
      <div className="contact-container" id='contact'>
        <div className="contact-content">
          <div className="contact-title">Let's <span>Create Your Dream</span> Space!</div>
          <div className="contact-info-section">
            <div className='contact-info'>
              <img  className='icon' src={MailSvg} alt='e-mail'/>
              <p>
              hello@interiordesignco.com
              </p>
            </div>
  
  
            <div className='contact-info'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-6 icon" fill="none" 
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" 
                d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                <path stroke-linecap="round" stroke-linejoin="round" 
                d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" />
              </svg>
              <p>
              123 Harmony St, Addis Ababa, Ethiopia
              </p>
            </div>
            <div className='contact-info'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 icon" fill="none" 
                   viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" 
                   d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.3 3.9a1 1 0 01-.21 1.04l-2.2 2.2a11.042 11.042 0 005.1 5.1l2.2-2.2a1 1 0 011.04-.21l3.9 1.3a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C8.163 21 3 15.837 3 9V5z" />
                  </svg>
              <p>
              +251 920 123 456
              </p>
            </div>
            <p className="contact-description">"At Interior Design Co., we craft spaces that inspire and elevate everyday living. Combining creativity and attention to detail"</p>
            <div className="contact-social-links">
            <FontAwesomeIcon icon={faInstagram}  />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>
        </div>
  
  
          <div className="contact-form-section">
            <form className="contact-form">
              <label>Name</label>
              <input type="text" placeholder="ENTER YOUR NAME" className="contact-form-input" required/>
              <label>Email</label>
              <input type="email" placeholder="ENTER YOUR EMAIL" className="contact-form-input" required/>
              <label>Message</label>
              <textarea placeholder="TYPE YOUR MESSAGE" className="contact-form-textarea" required></textarea>
              <button type="submit" className="contact-submit-button">SEND MESSAGE   <span>→</span></button>
            </form>
          </div>
      </div>
        <footer className="contact-footer">
          © 2025 Interior Design Co. Crafting spaces that inspire. Follow us on social media to see our latest projects and ideas.
        </footer>
      </>
    );
  };

  export default ContactForm;  
  