import React from 'react';
import PropTypes from 'prop-types';

interface EventListProps {
  events: Event[]
  id: number
  event_type: String
  event_date: Number
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  const renderEvents = (eventArray :any) => {
    eventArray = eventArray.sort((a:any, b:any) => new Date, Number(b.event_date) - new Date(a.event_date));

    return eventArray.map((event: any) => (
      <li key={event.id}>
        {event.event_date}
        {' - '}
        {event.event_type}
      </li>
    ));
  };

  return (
    <section>
      <h2>Events</h2>
      <ul>{renderEvents(events)}</ul>
    </section>
  );
};

export default EventList;
