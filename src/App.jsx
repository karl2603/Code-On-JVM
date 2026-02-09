import React, { useState, useEffect, useRef } from 'react';
import './App.css';

/* --- ICONS --- */
const Icons = {
  Menu: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>,
  Close: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
  ChevronRight: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>,
  ArrowUp: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>,
  ArrowUpRight: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>,
  MapPin: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  Calendar: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  Terminal: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>,
  Cpu: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><path d="M9 9h6v6H9z"></path><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"></path></svg>,
  Zap: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
  Globe: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
  // NEW ICONS
  CheckCircle: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
  AlertTriangle: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
};

/* --- DATA --- */
const LOGO_URL = "/Assets/cropped_circle_image.png";

const PAST_EVENTS = [
  { id: 1, title: "December Meetup", date: "Dec 2024", img: "/Assets/event-1.jpg" },
  { id: 2, title: "Hackerz Thiruvizha", date: "Feb, 2025", img: "/Assets/event-2.jpg" },
  { id: 3, title: "May Meetup", date: "May, 2025", img: "/Assets/event-3.jpg" },
  { id: 4, title: "June Meetup", date: "June, 2025", img: "/Assets/event-4.jpg" },
  { id: 5, title: "July Meetup", date: "July, 2025", img: "/Assets/event-5.jpg" },
  { id: 6, title: "August Meetup", date: "Aug, 2025", img: "/Assets/event-6.jpg" },
  { id: 7, title: "September Meetup", date: "Sept, 2025", img: "/Assets/event-7.jpg" },
  { id: 8, title: "January Meetup", date: "Jan, 2025", img: "/Assets/event-8.jpg" },
];

const TEAM = [
  { name: "Paarthan", role: "Founder", img: "/Assets/paarthan.jpg" },
  { name: "Madesh", role: "Core Team", img: "/Assets/madesh.jpeg" },
  { name: "Pranav", role: "Core Team", img: "/Assets/pranav.jpg" },
  { name: "Swetha", role: "Core Team", img: "/Assets/swetha.jpg" },
  { name: "Hari", role: "Volunteer", img: "/Assets/hari.jpg" },
  { name: "Devadarshini", role: "Volunteer", img: "/Assets/devadarshini.jpeg" },
  { name: "Mahaveer", role: "Volunteer", img: "/Assets/mahaveer.webp" },
  { name: "Mithil", role: "Volunteer", img: "/Assets/mithil.jpeg" },
];

const SPONSORS = [
  { name: "St. Joseph's College of Engineering", logo: "/Assets/st-josephs.png" },
  { name: "CONTENTSTACK", logo: "/Assets/contentstack.png" },
  { name: "rezoomex", logo: "/Assets/rezoomex.png" },
  { name: "M2P", logo: "/Assets/m2p.png" },
  { name: "Yuniq", logo: "/Assets/yuniq.jpeg"},
  { name: "Payilagam", logo: "/Assets/payilagam.jpeg"},
  { name: "Entrans Tech", logo: "/Assets/entranstech.jpeg"},
  { name: "Emma", logo: "/Assets/emma.jpg"},
];

// --- HOOKS ---
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.ceil(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return [count, ref];
};

function App() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Counters
  const [engineers, refEng] = useCountUp(2000);
  const [sessions, refSess] = useCountUp(20);
  const [community, refComm] = useCountUp(100);

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [sending, setSending] = useState(false);
  const [contactStatus, setContactStatus] = useState(""); // "" | "error"
  const [isSuccess, setIsSuccess] = useState(false); // New state to toggle view

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'work', 'events', 'join', 'sponsors', 'team', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= (el.offsetTop - 200)) setActive(id);
      }
    };
    window.addEventListener('scroll', onScroll);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view'));
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setContactStatus("");

    try {
      const res = await fetch("https://formspree.io/f/xqedkjqo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData)
      });

      if (res.ok) {
        setIsSuccess(true); // Toggle the success view
        setContactData({ name: "", email: "", message: "" });
      } else {
        setContactStatus("error");
      }
    } catch (err) {
      setContactStatus("error");
    }

    setSending(false);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setContactStatus("");
  };

  return (
    <div className="app">
      <div className="noise-bg"></div>

      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="logo-container" onClick={() => scrollTo('home')}>
            <img src={LOGO_URL} alt="Code On JVM" className="nav-logo-img" />
            <div className="logo-text">
              CODEON<span className="highlight-orange">JVM</span>
            </div>
          </div>
          <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            {['Home', 'About', 'Work', 'Events', 'Join', 'Sponsors', 'Team', 'Contact'].map(item => (
              <button key={item} className={`nav-link ${active === item.toLowerCase() ? 'active' : ''}`} onClick={() => scrollTo(item.toLowerCase())}>
                {item}
              </button>
            ))}
          </div>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <Icons.Close /> : <Icons.Menu />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-glow"></div>
        <div className="hero-container">
          <div className="hero-content reveal">
            <div className="hero-tag"><span className="dot"></span> CHENNAI'S BIGGEST JAVA COMMUNITY</div>
            <h1 className="hero-heading">CODE ON<br /><span className="text-gradient">JVM CHENNAI</span></h1>
            <p className="hero-sub">A premium community where Java, Kotlin & JVM enthusiasts connect, learn & build.</p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => scrollTo('join')}>Join Community <Icons.ChevronRight /></button>
              <button className="btn outline" onClick={() => scrollTo('events')}>View Events</button>
            </div>
          </div>
          <div className="hero-code reveal">
            <div className="code-block">
              <div className="code-header"><span className="c-dot r"></span><span className="c-dot y"></span><span className="c-dot g"></span></div>
              <pre>
                <code>
                  <span className="k">class</span> <span className="c">Future</span> <span className="k">extends</span> <span className="c">JVM</span> {'{'}<br /><br />
                  &nbsp;&nbsp;<span className="k">void</span> <span className="f">join</span>() {'{'}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="c">Community</span>.build(<span className="s">"Chennai"</span>);<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="c">Java</span>.learn();<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="c">Engineers</span>.connect();<br />
                  &nbsp;&nbsp;{'}'}<br />
                  {'}'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section dark-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content reveal">
              <h2 className="section-title">Beyond Syntax.</h2>
              <p className="lead-text">We are not just a meetup group. We are a collective of engineering excellence.</p>
              <p className="desc-text">Located in the heart of Chennai, we bridge the gap between theory and high-scale enterprise engineering.</p>

              <div className="stats-row">
                <div className="stat" ref={refEng}>
                  <h3>{engineers}+</h3>
                  <label>Members</label>
                </div>
                <div className="stat" ref={refSess}>
                  <h3>{sessions}+</h3>
                  <label>Sessions</label>
                </div>
                <div className="stat hl" ref={refComm}>
                  <h3>{community}%</h3>
                  <label>Community</label>
                </div>
              </div>
            </div>

            <div className="about-visual reveal">
              <div className="jvm-stack-container">
                <div className="stack-layer layer-1"><span>Java</span></div>
                <div className="stack-layer layer-2"><span>JVM</span></div>
                <div className="stack-layer layer-3"><span>Kotlin</span></div>
                <div className="orbit-ring"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="work" className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">DOMAINS</span>
            <h2>What We Do</h2>
          </div>
          <div className="cards-grid">
            {[
              { title: "Meetups", icon: <Icons.Cpu />, text: "Architecture & Scaling." },
              { title: "Workshops", icon: <Icons.Terminal />, text: "Hands-on coding labs." },
              { title: "Hackathons", icon: <Icons.Zap />, text: "Solving complex problems." },
              { title: "Networking", icon: <Icons.Globe />, text: "Connect with leaders." }
            ].map((c, i) => (
              <div key={i} className="holo-card reveal">
                <div className="holo-content">
                  <div className="icon-box">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="section dark-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">CALENDAR</span>
            <h2>Events</h2>
          </div>

          <div className="featured-event reveal">
            <div className="fe-bg"></div>
            <div className="fe-content">
              <span className="fe-badge">UPCOMING</span>
              <h3>Code On JVM goes to Madurai</h3>
              <div className="fe-meta">
                <span><Icons.Calendar /> 21st February 2026</span>
                <span><Icons.MapPin /> Dot Com Infoway, Madurai</span>
              </div>
              <p>Expect insightful tech sessions, JVM-focused discussions, and meaningful networking</p>
              <button className="btn primary"><a href='https://luma.com/w5pirooi'>Register Now</a></button>
            </div>
          </div>

          <h3 className="sub-heading reveal">Past Events</h3>
          <div className="past-grid">
            {PAST_EVENTS.map(ev => (
              <div key={ev.id} className="event-card reveal">
                <div className="ec-image">
                  <img src={ev.img} alt={ev.title} />
                </div>
                <div className="ec-details">
                  <span className="ec-date">{ev.date}</span>
                  <h4>{ev.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="section join-section">
        <div className="join-mesh"></div>
        <div className="container center-content reveal">
          <h2 className="join-heading">JOIN THE <span className="outline-text">ELITE</span></h2>
          <p className="join-sub">Access our private network, job referrals, and architecture debates.</p>
          <div className="join-btns">
            <button className="btn primary big-btn"><a href='https://chat.whatsapp.com/L2e0OhSON4XGqmZicY2PfD'>Join WhatsApp Community </a><Icons.ArrowUpRight /></button>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsors" className="section dark-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">POWERED BY</span>
            <h2>Our Sponsors</h2>
          </div>

          <div className="sponsor-grid reveal">
            {SPONSORS.map((sp, i) => (
              <div key={i} className={`sp-card ${sp.invert ? 'invert' : ''}`}>
                <div className="sp-shine"></div>
                <img src={sp.logo} alt={sp.name} className="sp-logo-img" />
              </div>
            ))}
          </div>

          <div className="center-btn reveal" style={{ marginTop: '60px' }}>
            <button className="btn outline" ><a href="#contact">Become a Sponsor</a></button>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">THE CORE</span>
            <h2>Our Team</h2>
          </div>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div key={i} className="team-card reveal">
                <div className="tc-img-wrap">
                  <img src={m.img} alt={m.name} className="tc-img" />
                  <div className="tc-overlay"></div>
                  <div className="tc-info">
                    <h4>{m.name}</h4>
                    <span>{m.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT (REIMAGINED) */}
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
                // SUCCESS STATE VIEW
                <div className="success-view">
                  <div className="success-icon">
                    <Icons.CheckCircle />
                  </div>
                  <h3>Message Received</h3>
                  <p>We'll be in touch shortly.</p>
                  <button className="btn outline" onClick={resetForm}>
                    Send Another
                  </button>
                </div>
              ) : (
                // FORM STATE VIEW
                <form className="contact-form" onSubmit={handleContactSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={contactData.name}
                      onChange={handleContactChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={contactData.email}
                      onChange={handleContactChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="4"
                      value={contactData.message}
                      onChange={handleContactChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn primary full"
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>

                  {/* Sleek Error Banner (if needed) */}
                  {contactStatus === "error" && (
                    <div className="error-banner">
                      <Icons.AlertTriangle />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-architect">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand-header">
              <h1 className="footer-giant-text">
                CODE ON <span className="highlight-orange">JVM</span>
              </h1>
            </div>

            <div className="f-grid">
              <div className="f-col">
                <h4 className="f-head">EXPLORE</h4>
                <a href="#about">About Us</a>
                <a href="#events">Upcoming Events</a>
                <a href="#work">What We Do</a>
                <a href="#team">Our Team</a>
              </div>
              <div className="f-col">
                <h4 className="f-head">CONNECT</h4>
                <a href="https://www.linkedin.com/company/codeonjvmchennai/posts/?feedView=all&viewAsMember=true">LinkedIn</a>
                <a href="https://www.instagram.com/codeonjvmchennai/">Instagram</a>
                <a href="https://www.youtube.com/@CodeOnJVMChennai">YouTube</a>
                <a href="https://luma.com/user/CodeonJVM">Luma</a>
              </div>
              <div className="f-col">
                <h4 className="f-head">LEGAL</h4>
                <a href="#">Code of Conduct</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
              </div>
              <div className="f-col credit-col">
                <h4 className="f-head">CREDIT</h4>
                <p>Designed & Built by <a className="text-white" href='https://www.linkedin.com/in/karlarvindraj/'>Karl</a>.</p>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom-bar">
            <div className="fb-left">
              &copy; 2026 CODE ON JVM. CHENNAI.
            </div>
            <button className="back-top-btn" onClick={() => window.scrollTo(0, 0)}>
              Back to Top <span className="icon-up"><Icons.ArrowUp /></span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;