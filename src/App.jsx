import React, { useState, useEffect } from 'react';
import './App.css';

/* --- ICONS --- */
const Icons = {
  ChevronRight: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>,
  Menu: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>,
  Close: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>,
  Java: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.8 3.97-2.1 5.39z"/></svg>,
  Terminal: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>,
  Users: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  Cpu: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
  Calendar: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  MapPin: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  ArrowUpRight: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
};

const SocialIcon = ({ type }) => {
  const paths = {
    yt: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z",
    gh: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 1.19 6.44 1.54a3.37 3.37 0 0 0-.94 2.61V22",
    li: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z",
    wa: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={paths[type]} /></svg>;
};

/* --- DATA --- */
const PAST_EVENTS = [
  { id: 1, title: "Microservices Scalability", date: "Sep 22, 2025", image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=600", tag: "Architecture" },
  { id: 2, title: "Reactive Systems with Spring", date: "Aug 15, 2025", image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=600", tag: "Backend" },
  { id: 3, title: "Kubernetes for Java Devs", date: "Jul 10, 2025", image: "https://images.unsplash.com/photo-1667372393119-c81c0cda0c18?auto=format&fit=crop&q=80&w=600", tag: "DevOps" },
  { id: 4, title: "GraalVM & Native Images", date: "Jun 05, 2025", image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=600", tag: "Performance" },
  { id: 5, title: "Advanced Concurrency Patterns", date: "May 20, 2025", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600", tag: "Core Java" },
  { id: 6, title: "System Design Interview Prep", date: "Apr 12, 2025", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600", tag: "Career" },
  { id: 7, title: "Kotlin for Server Side", date: "Mar 28, 2025", image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=600", tag: "Language" },
  { id: 8, title: "Cloud Native Java", date: "Feb 14, 2025", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600", tag: "Cloud" },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'what-we-do', 'events', 'join', 'team', 'contact'];
      const scrollPos = window.scrollY + 100;
      for(const section of sections) {
        const el = document.getElementById(section);
        if(el && el.offsetTop <= scrollPos && (el.offsetTop + el.offsetHeight) > scrollPos) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('reveal-active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  const navTo = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <div className="noise-overlay"></div>
      
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo" onClick={() => navTo('home')}>
            <span className="logo-brace">{'{'}</span>CODE<span className="logo-on">ON</span>JVM<span className="logo-brace">{'}'}</span>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'nav-mobile-open' : ''}`}>
            {['Home', 'About', 'What We Do', 'Events', 'Join', 'Team', 'Contact'].map((item) => (
               <button key={item} className={`nav-item ${activeSection === item.toLowerCase().replace(/\s+/g, '-') ? 'active' : ''}`} onClick={() => navTo(item.toLowerCase().replace(/\s+/g, '-'))}>{item}</button>
            ))}
          </div>
          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <Icons.Close /> : <Icons.Menu />}</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-glow"></div>
        <div className="hero-content">
          <div className="tagline reveal"><span className="dot"></span> CHENNAI'S JAVA ECOSYSTEM</div>
          <h1 className="hero-title reveal">ARCHITECTING <br/><span className="text-gradient">THE FUTURE.</span></h1>
          <p className="hero-desc reveal">A premium community for backend engineers, architects, and JVM enthusiasts. Pushing the boundaries of Java, Kotlin, and Cloud Native tech.</p>
          <div className="hero-cta reveal">
            <button className="btn-primary" onClick={() => navTo('join')}>Join Community <Icons.ChevronRight /></button>
            <button className="btn-secondary" onClick={() => navTo('events')}>View Events</button>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="code-window">
            <div className="window-header"><span className="win-dot r"></span><span className="win-dot y"></span><span className="win-dot g"></span></div>
            <div className="code-body">
              <div className="line"><span className="k">package</span> <span className="p">com.chennai.jvm</span>;</div>
              <div className="line"><span className="k">import</span> <span className="c">Community</span>;</div>
              <br/>
              <div className="line"><span className="k">public class</span> <span className="c">CodeOnJVM</span> <span className="k">extends</span> <span className="c">Future</span> {'{'}</div>
              <div className="line indent"><span className="k">private final</span> <span className="t">String</span> loc = <span className="s">"Chennai"</span>;</div>
              <div className="line indent"><span className="k">public void</span> <span className="f">ignite</span>() {'{'}</div>
              <div className="line double-indent"><span className="c">Community</span>.build(<span className="s">"Together"</span>);</div>
              <div className="line indent">{'}'}</div>
              <div className="line">{'}'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-dark">
        <div className="container">
          <div className="grid-2">
            <div className="about-text reveal">
              <h2 className="section-heading">BEYOND <br/>SYNTAX.</h2>
              <p className="lead">We are not just a meetup group. We are a collective of engineering excellence.</p>
              <p className="sub">Located in the heart of Chennai, Code On JVM bridges the gap between academic theory and high-scale enterprise engineering.</p>
            </div>
            <div className="about-stats reveal">
              <div className="stat-card"><h3>500+</h3><p>Engineers</p></div>
              <div className="stat-card"><h3>50+</h3><p>Talks</p></div>
              <div className="stat-card highlight"><h3>100%</h3><p>Community</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="section">
        <div className="container">
          <div className="section-header reveal"><span className="eyebrow">DOMAINS</span><h2 className="section-heading">WHAT WE DO</h2></div>
          <div className="feature-grid">
            <div className="feature-card reveal"><Icons.Users /><h3>Meetups</h3><p>Monthly gatherings focused on high-level architecture and backend scaling.</p></div>
            <div className="feature-card reveal"><Icons.Terminal /><h3>Workshops</h3><p>Deep-dives into Spring Boot, Quarkus, Kubernetes, and reactive programming.</p></div>
            <div className="feature-card reveal"><Icons.Cpu /><h3>Hackathons</h3><p>Competitive coding sessions solving real-world distributed system problems.</p></div>
            <div className="feature-card reveal"><Icons.Java /><h3>Networking</h3><p>Connect with Principal Engineers and CTOs from top product companies.</p></div>
          </div>
        </div>
      </section>

      {/* EVENTS (IMPROVED) */}
      <section id="events" className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">SCHEDULE</span>
            <h2 className="section-heading">EVENTS</h2>
          </div>

          <div className="featured-event reveal">
            <div className="fe-image-wrapper">
              <div className="fe-image-bg"></div>
              <div className="fe-badge">UPCOMING HIGHLIGHT</div>
            </div>
            <div className="fe-content">
              <h3>JVM Concurrency Deep Dive</h3>
              <div className="fe-meta">
                <span><Icons.Calendar /> Oct 24, 2026</span>
                <span><Icons.MapPin /> IIT Madras Research Park</span>
              </div>
              <p>An advanced session on Project Loom, Virtual Threads, and the future of concurrent programming in Java 21+.</p>
              <button className="btn-primary">Register Now</button>
            </div>
          </div>

          <h3 className="subsection-title reveal">Past Events</h3>
          <div className="past-events-grid">
            {PAST_EVENTS.map((evt) => (
              <div key={evt.id} className="pe-card reveal">
                <div className="pe-image-wrap">
                  <img src={evt.image} alt={evt.title} className="pe-img" />
                  <div className="pe-overlay">
                    <span className="pe-tag">{evt.tag}</span>
                  </div>
                </div>
                <div className="pe-info">
                  <span className="pe-date">{evt.date}</span>
                  <h4>{evt.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN (IMPROVED) */}
      <section id="join" className="section join-section">
        <div className="join-bg-mesh"></div>
        <div className="container reveal">
          <div className="join-card">
            <div className="join-content">
              <h2 className="join-title">JOIN THE <br/><span className="outline-text">ELITE</span></h2>
              <p className="join-desc">Access our private WhatsApp community, get job referrals from top tech companies, and solve complex production bugs together.</p>
              <div className="join-buttons">
                <button className="btn-white">Join WhatsApp <Icons.ArrowUpRight /></button>
                <button className="btn-outline-light">Read Community Guidelines</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="section">
        <div className="container">
          <div className="section-header reveal"><span className="eyebrow">THE CORE</span><h2 className="section-heading">TEAM</h2></div>
          <div className="team-grid">
            {['Arjun R.', 'Divya K.', 'Sanjay M.', 'Priya S.', 'Karthik B.', 'Meera J.', 'Rahul V.', 'Ankit P.'].map((name, i) => (
              <div key={i} className="team-card reveal">
                <div className="team-avatar"><img src={`https://ui-avatars.com/api/?name=${name}&background=111&color=fff&font-size=0.33`} alt={name} /></div>
                <div className="team-details"><h4>{name}</h4><span>Core Team</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsors" className="section-dark">
        <div className="container">
          <div className="section-header reveal"><span className="eyebrow">SUPPORTED BY</span><h2 className="section-heading">SPONSORS</h2></div>
          <div className="sponsor-grid reveal">
             {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="sponsor-logo">Logo {i}</div>)}
          </div>
          <div className="center-btn reveal"><button className="btn-outline">Become a Sponsor</button></div>
        </div>
      </section>

      {/* CONTACT (IMPROVED) */}
      <section id="contact" className="section">
        <div className="container reveal">
          <div className="contact-layout">
            <div className="contact-visual">
              <h2 className="contact-heading">Let's Talk <br/><span className="text-orange">Code.</span></h2>
              <p className="contact-sub">Interested in speaking at an event, hosting us, or just want to say hi? We are always open to new ideas.</p>
              <div className="contact-info-cards">
                <div className="info-card">
                  <span className="ic-label">Email</span>
                  <a href="mailto:hello@codeonjvm.com">hello@codeonjvm.com</a>
                </div>
                <div className="info-card">
                  <span className="ic-label">Location</span>
                  <p>Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form className="contact-form glass-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="input-group">
                    <input type="text" required placeholder=" " />
                    <label>Name</label>
                  </div>
                  <div className="input-group">
                    <input type="email" required placeholder=" " />
                    <label>Email</label>
                  </div>
                </div>
                <div className="input-group">
                  <select required defaultValue="">
                    <option value="" disabled hidden></option>
                    <option value="speak">I want to speak</option>
                    <option value="sponsor">I want to sponsor</option>
                    <option value="other">Other query</option>
                  </select>
                  <label>Topic</label>
                </div>
                <div className="input-group">
                  <textarea required placeholder=" " rows="4"></textarea>
                  <label>Message</label>
                </div>
                <button type="submit" className="btn-primary full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (IMPROVED) */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand-col">
              <div className="logo"><span className="logo-brace">{'{'}</span>CODE<span className="logo-on">ON</span>JVM<span className="logo-brace">{'}'}</span></div>
              <p className="footer-bio">Empowering Chennai's developer ecosystem through knowledge, code, and community.</p>
              <div className="socials">
                <a href="#"><SocialIcon type="yt" /></a>
                <a href="#"><SocialIcon type="gh" /></a>
                <a href="#"><SocialIcon type="li" /></a>
                <a href="#"><SocialIcon type="wa" /></a>
              </div>
            </div>
            <div className="footer-links-col">
              <h4>Explore</h4>
              <a href="#about">About</a>
              <a href="#events">Events</a>
              <a href="#team">Team</a>
              <a href="#join">Community</a>
            </div>
            <div className="footer-links-col">
              <h4>Resources</h4>
              <a href="#">Blog</a>
              <a href="#">Talk Slides</a>
              <a href="#">Code of Conduct</a>
              <a href="#">Privacy</a>
            </div>
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <div className="newsletter-input">
                <input type="email" placeholder="Enter email" />
                <button><Icons.ArrowUpRight /></button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Code On JVM. Built by Karl.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;