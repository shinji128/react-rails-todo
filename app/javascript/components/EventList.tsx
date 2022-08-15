type Prop = {
    id: number,
    event_type: string,
    event_date: string,
    title: string,
    speaker: string,
    host: string,
    published: boolean,
}
type Event = {
  events :Prop[]
}

const EventList:React.FC<Event>  = ({ events }) => {
  const renderEvents = (eventArray: Prop[]) => {
    eventArray.sort((a: Prop, b: Prop) => {
      const aEventDate = new Date(a.event_date)
      const bEventDate = new Date(b.event_date)
      return aEventDate < bEventDate ? 1 : -1;
    });
    return eventArray.map((event) => (
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
