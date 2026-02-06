import React, { useState, useEffect } from 'react';
import './App.css';

/* --- ICONS --- */
const Icons = {
  Menu: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>,
  Close: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
  ChevronRight: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>,
  ArrowUpRight: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>,
  MapPin: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  Calendar: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  Terminal: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>,
  Cpu: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><path d="M9 9h6v6H9z"></path><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"></path></svg>,
  Zap: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
  Globe: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
};

/* --- DATA --- */
const LOGO_URL = "/Assets/cropped_circle_image.png";

const PAST_EVENTS = [
  { id: 1, title: "Microservices Scalability", date: "Sep 22, 2025", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600", tag: "Architecture" },
  { id: 2, title: "Reactive Systems & Spring", date: "Aug 15, 2025", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600", tag: "Backend" },
  { id: 3, title: "Kubernetes for Java Devs", date: "Jul 10, 2025", img: "https://images.unsplash.com/photo-1667372393119-c81c0cda0c18?auto=format&fit=crop&q=80&w=600", tag: "DevOps" },
  { id: 4, title: "GraalVM & Native Images", date: "Jun 05, 2025", img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=600", tag: "Performance" },
  { id: 5, title: "Java 25: The New Era", date: "May 20, 2025", img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=600", tag: "Core" },
  { id: 6, title: "System Design Interview", date: "Apr 12, 2025", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600", tag: "Career" },
  { id: 7, title: "Concurrency Patterns", date: "Mar 28, 2025", img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=600", tag: "Deep Dive" },
  { id: 8, title: "Cloud Native Java", date: "Feb 14, 2025", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600", tag: "Cloud" },
];

const TEAM = [
  { name: "Arjun R.", role: "Founder", img: "https://ui-avatars.com/api/?name=Arjun+R&background=111&color=f89820&bold=true" },
  { name: "Divya K.", role: "Tech Lead", img: "https://ui-avatars.com/api/?name=Divya+K&background=111&color=f89820&bold=true" },
  { name: "Sanjay M.", role: "Organizer", img: "https://ui-avatars.com/api/?name=Sanjay+M&background=111&color=f89820&bold=true" },
  { name: "Priya S.", role: "Evangelist", img: "https://ui-avatars.com/api/?name=Priya+S&background=111&color=f89820&bold=true" },
  { name: "Karthik B.", role: "Core Team", img: "https://ui-avatars.com/api/?name=Karthik+B&background=111&color=f89820&bold=true" },
  { name: "Meera J.", role: "Core Team", img: "https://ui-avatars.com/api/?name=Meera+J&background=111&color=f89820&bold=true" },
  { name: "Rahul V.", role: "Volunteer", img: "https://ui-avatars.com/api/?name=Rahul+V&background=111&color=f89820&bold=true" },
  { name: "Ankit P.", role: "Volunteer", img: "https://ui-avatars.com/api/?name=Ankit+P&background=111&color=f89820&bold=true" },
];

const SPONSORS = [
  { name: "JetBrains", logo: "JB" },
  { name: "Oracle", logo: "ORCL" },
  { name: "RedHat", logo: "RH" },
  { name: "VMware", logo: "VMW" },
  { name: "Spring", logo: "SPR" },
  { name: "DataDog", logo: "DD" },
  { name: "Okta", logo: "OKTA" },
  { name: "Redis", logo: "RED" },
];

function App() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'work', 'events', 'join', 'team', 'sponsors', 'contact'];
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

  return (
    <div className="app">
      <div className="noise-bg"></div>
      
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="logo-container" onClick={() => scrollTo('home')}>
            <img src={LOGO_URL} alt="Code On JVM" className="nav-logo-img" />
            <div className="logo-text">
              CODE<span className="highlight">ON</span><span className="highlight">JVM</span>
            </div>
          </div>
          <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            {['Home', 'About', 'Work', 'Events', 'Join', 'Team', 'Contact'].map(item => (
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
            <div className="hero-tag"><span className="dot"></span> CHENNAI'S JAVA ECOSYSTEM</div>
            <h1 className="hero-heading">ARCHITECTING <br/><span className="text-gradient">THE FUTURE.</span></h1>
            <p className="hero-sub">A premium community for backend engineers, architects, and JVM enthusiasts.</p>
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
                  <span className="k">class</span> <span className="c">Future</span> <span className="k">extends</span> <span className="c">Jvm</span> {'{'}<br/>
                  &nbsp;&nbsp;<span className="k">void</span> <span className="f">ignite</span>() {'{'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="c">Community</span>.build(<span className="s">"Chennai"</span>);<br/>
                  &nbsp;&nbsp;{'}'}<br/>
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
                <div className="stat"><h3>500+</h3><label>Engineers</label></div>
                <div className="stat"><h3>50+</h3><label>Sessions</label></div>
                <div className="stat hl"><h3>100%</h3><label>Community</label></div>
              </div>
            </div>
            <div className="about-visual reveal">
               <div className="visual-card">
                 <div className="card-glow"></div>
                 <h3>Our Mission</h3>
                 <p>To foster a culture of deep technical discourse, mentorship, and innovation on the JVM stack.</p>
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
              <h3>JVM Concurrency Deep Dive</h3>
              <div className="fe-meta">
                <span><Icons.Calendar /> Oct 24, 2026</span>
                <span><Icons.MapPin /> IIT Madras Research Park</span>
              </div>
              <p>Project Loom, Virtual Threads, and the future of Java.</p>
              <button className="btn primary">Register Now</button>
            </div>
          </div>

          <h3 className="sub-heading reveal">Past Events</h3>
          <div className="past-grid">
            {PAST_EVENTS.map(ev => (
              <div key={ev.id} className="event-card reveal">
                <div className="ec-image">
                  <img src={ev.img} alt={ev.title} />
                  <div className="ec-overlay"><span className="tag">{ev.tag}</span></div>
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
            <button className="btn primary big-btn">Join WhatsApp Community <Icons.ArrowUpRight /></button>
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

      {/* SPONSORS */}
      <section id="sponsors" className="section dark-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">POWERED BY</span>
            <h2>Our Sponsors</h2>
          </div>
          
          <div className="sponsor-8-grid reveal">
            {SPONSORS.map((sp, i) => (
              <div key={i} className="sp-glass-tile">
                <div className="sp-content">
                  <span className="sp-logo-text">{sp.logo}</span>
                  <span className="sp-full-name">{sp.name}</span>
                </div>
                <div className="sp-shine"></div>
              </div>
            ))}
          </div>

          <div className="center-btn reveal" style={{marginTop: '60px'}}>
            <button className="btn outline">Become a Sponsor</button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-wrapper reveal">
            <div className="contact-text">
              <h2>Let's Talk Code.</h2>
              <p>Speaking, sponsoring, or just saying hello.</p>
              <div className="contact-details">
                <div className="cd-item"><label>Email</label>hello@codeonjvm.com</div>
                <div className="cd-item"><label>Location</label>Chennai, India</div>
              </div>
            </div>
            <form className="contact-form glass" onSubmit={e => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn primary full">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-stunning">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand-area">
              <div className="footer-logo-row">
                <img src={LOGO_URL} alt="Footer Logo" className="footer-logo-img" />
                <h1 className="footer-giant-text">CODE ON <span className="highlight">JVM</span></h1>
              </div>
            </div>
            
            <div className="footer-grid">
              <div className="fg-col">
                <label>EXPLORE</label>
                <a href="#about">About Us</a>
                <a href="#events">Upcoming Events</a>
                <a href="#work">What We Do</a>
                <a href="#team">Our Team</a>
              </div>
              <div className="fg-col">
                <label>CONNECT</label>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter / X</a>
                <a href="#">Instagram</a>
                <a href="#">YouTube</a>
              </div>
              <div className="fg-col">
                <label>LEGAL</label>
                <a href="#">Code of Conduct</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
              </div>
              <div className="fg-col credit-col">
                  <p className="footer-credit">Designed & Built by <span className="credit-name">Karl</span>.</p>
                  <p className="credit-sub">Est. 2026</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom-bar">
             <span>&copy; 2026 CODE ON JVM. EST. CHENNAI.</span>
             <button className="back-to-top" onClick={() => window.scrollTo(0,0)}>BACK TO TOP ↑</button>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;