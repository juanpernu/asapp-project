/** React dependencies */
import React, { useContext } from 'react';

/** Component dependencies */
import MessageList from '../components/MessageList';
import SendMessageForm from '../components/SendMessageForm';
import UserHeader from '../components/UserHeader';
import { ChatContext } from '../context/chatContext';

/**
 * Stateless View Component. Root of chat view.
 */
const ChatView = () => {
  const { users, messages } = useContext(ChatContext);

  return (
    users.map((user, index) => {
      return (
        <div className="chat-view" key={index}>
          <UserHeader user={user}/>
          <MessageList messages={messages} user={user} />
          <SendMessageForm userId={index} />
        </div>
      )
    })
  );
}

export default ChatView;
