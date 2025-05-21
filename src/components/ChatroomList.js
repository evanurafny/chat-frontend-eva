import React, { useEffect, useState } from "react";
import { fetchChatrooms, createChatroom } from "../api/api";
import cable from "../cable"; 

export default function ChatroomList({ onSelect }) {
  const [chatrooms, setChatrooms] = useState([]);
  const [newRoom, setNewRoom] = useState("");

  const loadChatrooms = () => {
    fetchChatrooms().then((res) => setChatrooms(res.data));
  };

  useEffect(() => {
    loadChatrooms();
  }, []);

  const handleCreate = () => {
    if (newRoom.trim() === "") return;

    createChatroom(newRoom).then(() => {
      setNewRoom("");
      loadChatrooms();
    });
  };

  return (
    <div className="card shadow">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Chatrooms</h5>
      </div>
      <div className="card-body" style={{ height: "300px", overflowY: "scroll" }}>
        <ul className="list-group mb-3">
          {chatrooms.map((room) => (
            <li
              key={room.id}
              onClick={() => onSelect(room)}
              className="list-group-item list-group-item-action"
              style={{ cursor: "pointer" }}
            >
              {room.name}
            </li>
          ))}
        </ul>
 </div>
  <div className="card-footer">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Create new chatroom"
            value={newRoom}
            onChange={(e) => setNewRoom(e.target.value)}
          />
          <button className="btn btn-outline-primary" onClick={handleCreate}>
            Create Room
          </button>
        </div>
     </div>
    </div>
  );
}
