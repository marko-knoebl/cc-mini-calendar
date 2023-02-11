import { useState } from "react";
import "./App.css";

function App() {
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [nameInput, setNameInput] = useState("");

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

  function addEntry() {
    if (dateInput !== "" && timeInput !== "" && nameInput !== "") {
      setAppointments([
        ...appointments,
        {
          id: Math.floor(Math.random() * 100),
          date: dateInput,
          time: timeInput,
          name: nameInput,
        },
      ]);
    }
  }

  function deleteAppointment(id) {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  }
  
  return (
    <div className="App">
      <h1>Calendar</h1>
      <hr></hr>
      <input
        value={dateInput}
        placeholder="date"
        onChange={(event) => {
          setDateInput(event.target.value);
        }}
      ></input>
      <input
        value={nameInput}
        placeholder="name"
        onChange={(event) => {
          setNameInput(event.target.value);
        }}
      ></input>
      <input
        value={timeInput}
        placeholder="time"
        onChange={(event) => {
          setTimeInput(event.target.value);
        }}
      ></input>
      <button className="button" onClick={addEntry}>Add Entry</button>
      {appointments.map((appointment) => (
        <li className="item-singular" key={appointment.id}>
          {appointment.date} {appointment.time} {appointment.name}
          <button className="button" onClick={() => deleteAppointment(appointment.id)}>Delete</button>
        </li>
      ))}
      
    </div>
  );
}

export default App;
