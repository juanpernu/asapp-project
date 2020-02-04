/** React dependencies */
import React, { useEffect, useRef } from 'react';

/** Component dependencies */
import Icon from './Icons';

/**
 * Stateless Component that draw a box with the message.
 * @param {String} message
 * @param {Object} from
 * @param {String} timestamp
 * @param {Number} user_id
 * @param {Boolean} saw_message
 */
const Message = ({ message, from, timestamp, user_id, saw_message }) => {
  const selfMessageClass = from.id === user_id && 'self-message';
  const sawMessage = saw_message ? 'blue' : 'black';

  const thisMessage = useRef();
  useEffect(() => {
    thisMessage.current.scrollIntoView();
  }, [message]);

  return (
    <div className={`message ${selfMessageClass}`} ref={thisMessage}>
      <span className="message-text">{message}</span>
      <div className="message-data">
        <span className="message-data--timestamp">{timestamp}</span>
        {selfMessageClass && <Icon type='check' colorFill={sawMessage} />}
      </div>
    </div>
  )
}

export default Message;
