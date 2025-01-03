import { useState } from "react";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import style from "../less/ChatPage.module.less";

const user = {
  id: 1,
  name: "홍길동",
};

function ChatPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleClose = () => {
    setIsChatOpen(false);
  };

  return (
    <div className={style.container}>
      <div className={style.ChatList}>
        <ChatList />
      </div>
      <div className={style.ChatWindow}>{isChatOpen && <ChatWindow user={user} onClose={handleClose} />}</div>
    </div>
  );
}

export default ChatPage;
