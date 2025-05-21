
import React, { useState } from "react";
import ChatroomList from "./ChatroomList";
import ChatroomDetail from "./ChatroomDetail";

export default function ChatApp() {
  const [selectedChatroom, setSelectedChatroom] = useState(null);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <ChatroomList onSelect={setSelectedChatroom} />
        </div>
        <div className="col-md-8">
          {selectedChatroom ? (
            <ChatroomDetail chatroom={selectedChatroom} />
          ) : (
            <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center p-4 border rounded bg-light shadow-sm">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="currentColor"
            className="bi bi-chat-dots text-secondary mb-3"
            viewBox="0 0 16 16"
        >
            <path d="M2 2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2v2l3-2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
            <path d="M5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
        <h5 className="text-secondary">No chatroom selected yet.</h5>
        <p className="text-muted">Please select or create a new chatroom to start chatting.</p>
        </div>

          )}
        </div>
      </div>
    </div>
  );
}
