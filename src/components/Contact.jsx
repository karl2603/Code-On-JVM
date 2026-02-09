import React, { useState } from 'react';
import { Icons } from './Icons';

const Contact = () => {
  const [contactData, setContactData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [contactStatus, setContactStatus] = useState(""); 
  const [isSuccess, setIsSuccess] = useState(false);

  const handleContactChange = (e) => setContactData({ ...contactData, [e.target.name]: e.target.value });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setContactStatus("");
    try {
      const res = await fetch("https://formspree.io/f/xqedkjqo", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(contactData)
      });
      if (res.ok) { setIsSuccess(true); setContactData({ name: "", email: "", message: "" }); } 
      else { setContactStatus("error"); }
    } catch (err) { setContactStatus("error"); }
    setSending(false);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-text">
            <h2>Let's Talk Code.</h2>
            <p>Speaking, sponsoring, or just saying hello.</p>
            <div className="contact-details">
              <div className="cd-item"><label>Email</label>codeonjvmchennai@gmail.com</div>
              <div className="cd-item"><label>Location</label>Chennai, India</div>
            </div>
          </div>
          <div className="glass">
            {isSuccess ? (
              <div className="success-view">
                <div className="success-icon"><Icons.CheckCircle /></div>
                <h3>Message Received</h3><p>We'll be in touch shortly.</p>
                <button className="btn outline" onClick={() => setIsSuccess(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="form-group"><input type="text" name="name" placeholder="Name" value={contactData.name} onChange={handleContactChange} required /></div>
                <div className="form-group"><input type="email" name="email" placeholder="Email" value={contactData.email} onChange={handleContactChange} required /></div>
                <div className="form-group"><textarea name="message" placeholder="Message" rows="4" value={contactData.message} onChange={handleContactChange} required /></div>
                <button type="submit" className="btn primary full" disabled={sending}>{sending ? "Sending..." : "Send Message"}</button>
                {contactStatus === "error" && <div className="error-banner"><Icons.AlertTriangle /><span>Something went wrong. Please try again.</span></div>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;