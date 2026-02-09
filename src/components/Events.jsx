import React from 'react';
import { Icons } from './Icons';
import { PAST_EVENTS } from '../data';

const Events = () => (
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
            <div className="ec-image"><img src={ev.img} alt={ev.title} /></div>
            <div className="ec-details"><span className="ec-date">{ev.date}</span><h4>{ev.title}</h4></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Events;