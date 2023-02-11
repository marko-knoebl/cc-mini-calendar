import { useState } from "react";
import "./App.css";

function App() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: "2023-02-11",
      time: "14:00",
      name: "doctor",
    },
    {
      id: 2,
      date: "2023-02-11",
      time: "15:00",
      name: "shopping",
    },
  ]);

  return (
    <div className="App">
      <h1>Calendar</h1>
      {appointments.map((appointment) => (
        <li key={appointment.id}>
          {appointment.date} {appointment.time} {appointment.name}
        </li>
      ))}
    </div>
  );
}

export default App;
