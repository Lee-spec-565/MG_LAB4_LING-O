import StudentList from './StudentList';

type EventProps = {
  eventName: string;
  venue: string;
  date: string;
  organizer: string;
  capacity: number;
  registeredStudents: string[];
};

function EventCard({ eventName, venue, date, organizer, capacity, registeredStudents }: EventProps) {
  return (
    <div className="event-card">
      <h2>{eventName}</h2>
      <p><strong>Venue:</strong> {venue}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Organizer:</strong> {organizer}</p>
      <p><strong>Capacity:</strong> {registeredStudents.length} / {capacity}</p>
      
      <h3>Registered Students:</h3>

      <StudentList students={registeredStudents} />
    </div>
  );
}

export default EventCard;