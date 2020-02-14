/** React dependencies */
import React, { useContext, useState } from "react";

/** Component dependencies */
import Moment  from 'moment';
import { ChatContext } from '../context/chatContext';
import { formatDate } from '../utils';

/**
 * Stateless Component that draw one input where
 * the user write the texts messages.
 * @param {Number} user_id
 */
const SendMessageForm = ({ userId }) => {
  const { users, saveMessages, isTipping, checkSawMessage } = useContext(ChatContext);
  const [message, setMessage] = useState({});

  /**
  * Method to handle the onChange
  * of the input.
  */
  const changeHandler = (e) => {
    isTipping(true, userId);
    setMessage({
      text: e.target.value,
      from: users[userId],
      timestamp: formatDate(Moment().format('hh:mm:ss')),
      user_id: userId,
      saw_message: false,
    });
  }

  /**
  * Method to handle the form submit.
  */
  const submitMessage = (e) => {
    e.preventDefault();
    const { text, from, timestamp, user_id, saw_message } = message;
    
    if (message.text && message.text.length > 0) {
      saveMessages(text, from, timestamp, user_id, saw_message);
    }

    setMessage({ text: '' });
    isTipping(false, userId);
  };
  

  return (
    <form className="send-message-form"onClick={() => checkSawMessage()} onSubmit={(e) => submitMessage(e)}>
      <input
        onChange={(e) => changeHandler(e)}
        placeholder="Type your message and hit ENTER"
        value={message.text}
        type="text"
      />
    </form>
  )
}

export default SendMessageForm;
