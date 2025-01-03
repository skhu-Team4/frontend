import React, { useState } from "react";
import style from "../less/ChatWindow.module.less";

// User 데이터 타입 정의
interface User {
  id: number;
  name: string;
}

interface ChatWindowProps {
  user: User; // user는 User 타입
  onClose: () => void; // onClose는 반환값이 없는 함수
}

const ChatWindow: React.FC<ChatWindowProps> = ({ user, onClose }) => {
  const [messages, setMessages] = useState([
    { type: "received", content: "안녕하세요!", timestamp: "10:00 AM" },
    { type: "sent", content: "안녕하세요, 반갑습니다.", timestamp: "10:01 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        type: "sent",
        content: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.chatWindow}>
        {/* Header */}
        <div className={style.header}>
          <div className={style.title}>{user.name}와의 채팅</div>
          <div className={style.status}>온라인</div>
          <button className={style.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        {/* Body */}
        <div className={style.body}>
          {messages.map((message, index) => (
            <div key={index} className={`${style.message} ${message.type === "sent" ? style.sent : style.received}`}>
              <div>{message.content}</div>
              <div className={style.timestamp}>{message.timestamp}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={style.footer}>
          <input
            type="text"
            className={style.inputField}
            placeholder="메시지를 입력하세요..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />

          <button className={style.sendButton} onClick={handleSendMessage}>
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
