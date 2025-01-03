import { useState } from "react";
import style from "../less/ChatList.module.less";
import { IoReload } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import ChatWindow from "./ChatWindow";

// Chat 타입 정의
type Chat = {
  id: number;
  name: string;
  lastMessage: string;
  unread: number;
};

function ChatList() {
  const chatData: Chat[] = [
    { id: 1, name: "사용자1", lastMessage: "안녕하세요!", unread: 2 },
    { id: 2, name: "사용자2", lastMessage: "내일 만나요!", unread: 0 },
    { id: 3, name: "사용자3", lastMessage: "좋은 아침이에요!", unread: 5 },
  ];

  // 상태에 Chat 타입과 null 허용
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  return (
    <div className={style.container}>
      {!selectedChat ? (
        <>
          <div className={style.head}>
            <div className={style.logoImg}>
              <img src="potatalk.png" alt="logo image" />
            </div>
            <div className={style.headFoot}>
              <IoReload className={style.button1} />
              <TiUserAdd className={style.button2} />
              <GiPerspectiveDiceSixFacesRandom className={style.button3} />
            </div>
            <div className={style.line} />
          </div>
          <div className={style.body}>
            <div className={style.chatList}>
              {chatData.map((chat) => (
                <div key={chat.id} className={style.chatItem} onClick={() => setSelectedChat(chat as Chat)}>
                  <div className={style.avatar}></div>
                  <div className={style.info}>
                    <p>{chat.name}</p>
                    <span>{chat.lastMessage}</span>
                  </div>
                  {chat.unread > 0 && <div className={style.unread}>{chat.unread}</div>}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <ChatWindow user={selectedChat} onClose={() => setSelectedChat(null)} />
      )}
    </div>
  );
}

export default ChatList;
