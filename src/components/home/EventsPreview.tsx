import React from 'react';
import { EventItem } from '../../types/event';
import { Calendar, MapPin, ArrowRight, Tag } from 'lucide-react';
import './EventsPreview.css';

interface EventCardProps {
  event: EventItem;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <article className="event-card">
      <div className="event-card-header">
        <div className="event-date-badge">
          <Calendar size={14} />
          <span>{event.date}</span>
        </div>
        {event.category && (
          <span className="event-category-tag">
            <Tag size={12} />
            {event.category}
          </span>
        )}
      </div>

      <h3 className="event-card-title">{event.title}</h3>
      <p className="event-card-desc">{event.description}</p>

      {event.location && (
        <div className="event-card-location">
          <MapPin size={14} />
          <span>{event.location}</span>
        </div>
      )}

      {event.link && (
        <div className="event-card-footer">
          <a href={event.link} className="event-card-link">
            <span>Read Announcement</span>
            <ArrowRight size={14} />
          </a>
        </div>
      )}
    </article>
  );
};

interface EventsPreviewProps {
  events: EventItem[];
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export const EventsPreview: React.FC<EventsPreviewProps> = ({
  events,
  title = 'Latest Updates',
  subtitle = 'Stay informed with recent announcements, academic milestones, and examination schedules.',
  ctaText = 'View All Updates',
  ctaHref = '/events',
}) => {
  return (
    <section className="events-section" id="updates">
      <div className="events-container">
        <div className="events-header">
          <span className="events-eyebrow">INSTITUTE NOTICES</span>
          <h2 className="events-title">{title}</h2>
          <p className="events-subtitle">{subtitle}</p>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="events-footer">
          <a href={ctaHref} className="events-cta-btn">
            <span>{ctaText}</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
