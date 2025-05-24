import React, { useEffect, useState, useRef } from "react";
import cable from "../cable";
import { fetchMessages } from "../api/api";


export default function ChatroomDetail({ chatroom  }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const subscriptionRef = useRef(null);

  useEffect(() => {
    fetchMessages(chatroom.id).then((res) => setMessages(res.data));

    subscriptionRef.current = cable.subscriptions.create(
      { channel: "ChatroomChannel", chatroom_id: chatroom.id },
      {
        received(data) {
          console.log("Received via ActionCable:", data);
          setMessages((msgs) => [...msgs, data]);
        },
      }
    );

    return () => {
      subscriptionRef.current.unsubscribe();
    };
  }, [chatroom]);

  const sendMessage = () => {
    if (!input.trim()) return;

    subscriptionRef.current.perform("speak", {
      content: input,
      chatroom_id: chatroom.id,
    });
    setInput("");
  };
 


  return (
    <div className="card shadow">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center mb-2">
        <h5 className="mb-0">{chatroom.name}</h5>
   
      </div>
      <div className="card-body" style={{ height: "300px", overflowY: "scroll" }}>
  {messages.map((msg, i) => (
    <div key={i} className="mb-2">
      <p className="mb-1">{msg.content}</p>
      <small className="text-muted">
        {new Intl.DateTimeFormat("id-ID", {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(new Date(msg.created_at))}
      </small>
      <hr />
    </div>
  ))}
</div>

      <div className="card-footer">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write something..."
          />
          <button className="btn btn-primary" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
