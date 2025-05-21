import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ChatroomList from "./components/ChatroomList";
import ChatroomDetail from "./components/ChatroomDetail";

function App() {
    const [selectedRoom, setSelectedRoom] = useState(null);
     const handleDeleted = () => {
    setSelectedRoom(null);
  };
  return (
    <div>
      {!selectedRoom && <ChatroomList onSelect={setSelectedRoom} />}
      {selectedRoom && <ChatroomDetail chatroom={selectedRoom} />}
      {selectedRoom && <button onClick={() => setSelectedRoom(null)}>Kembali</button>}
      
    </div>
  );
}

export default App;
