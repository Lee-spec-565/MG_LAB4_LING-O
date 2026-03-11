import EventCard from './EventCard';

const events = [
  {
    eventName: "Tech Symposium",
    venue: "Main Auditorium",
    date: "March 15, 2026",
    organizer: "IT Department",
    capacity: 100,
    registeredStudents: ["John Doe", "Jane Smith", "Mike Johnson", "Sarah Lee"]
  },
  {
    eventName: "Leadership Seminar",
    venue: "Conference Room A",
    date: "March 20, 2026",
    organizer: "Student Council",
    capacity: 50,
    registeredStudents: ["Alice Brown", "Bob Wilson", "Carol Davis"]
  },
  {
    eventName: "Sports Fest",
    venue: "University Gym",
    date: "March 25, 2026",
    organizer: "Sports Department",
    capacity: 200,
    registeredStudents: ["Tom Harris", "Emma Clark", "David Miller", "Lisa Wang", "Chris Taylor"]
  }
];

function App() {
  return (
    <>
      <header>
        <h1>University Event Registration Dashboard</h1>
      </header>
      
      <main className="dashboard">
        <section className="event-list">
          <h2>Upcoming Events</h2>
          
          {events.map((event, index) => (
            <EventCard 
              key={index}
              eventName={event.eventName}
              venue={event.venue}
              date={event.date}
              organizer={event.organizer}
              capacity={event.capacity}
              registeredStudents={event.registeredStudents}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;