/** React dependencies */
import React from "react";

/** Component dependencies */
import Message from './Message';

/**
 * Stateless Component that draw the box where
 * the messages are listed.
 * @param {String} messages
 * @param {Object} user
 */
const MessageList = ({ messages, user }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <Message
          key={index}
          message={message.text}
          from={message.from}
          user_id={user.id}
          timestamp={message.timestamp}
          saw_message={message.saw_message}/>)
      )}
    </div>
  )
}

export default MessageList;
