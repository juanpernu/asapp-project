/**
 * Class for Messages. Represents and handles all the
 * attributes for the data of the messages.
 */
class Message {
  /**
   * The constructor of the class.
   * @constructor
   *
   * @param {Object} text
   * @param {Object} from
   * @param {Object} timestamp
   * @param {Object} user_id
   * @param {Object} saw_message
   */
  constructor(text, from, timestamp, user_id, saw_message) {
    this.text = text;
    this.from = from;
    this.timestamp = timestamp;
    this.user_id = user_id;
    this.saw_message = saw_message;
  }
}

export default Message;
