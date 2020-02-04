/** React dependencies */
import React, { createContext, Component } from 'react';

/** Domain dependencies */
import User from '../domains/User';
import Message from '../domains/Message';

export const ChatContext = createContext();

/**
 * Provider component of ChatContext. This component
 * provides a context to handle all the states of the application.
 */
class ChatProvider extends Component {
  /**
   * The constructor of the component.
   *
   * @constructor
   */
  constructor(props) {
    super(props);
    const { users } = this.props;

    this.state = {
      users: users.map(user => new User(user.name, user.id, user.image_profile, user.messages)),
      messages: [],
      saveMessages: (text, from, timestamp, user_id, saw_message) => {
        const newMessage = new Message(text, from, timestamp, user_id, saw_message);
        this.setState({
          messages: [...this.state.messages, newMessage],
        })
      },
      tipping: false,
      userTipping: null,
      messageSeen: false,
      seeignMessage: () => this.setState({ messageSeen: !this.state.messageSeen }),
      isTipping: (value, userId) => this.setState({ tipping: value, userTipping: userId }),
      checkSawMessage: () => this.sawMessage(this.state.messages),
    };
    this.sawMessage = this.sawMessage.bind(this);
  }

  /**
   * A method bound to the state, which will be called
   * when the user see the messages on his screen.
   * @param {Array} messages array of messages saved in the state,
   */
  sawMessage(messages) {
    messages.forEach(message => {
      message.saw_message = true;
    });
  }

  render() {
    const { value, children } = this.props;
    return (
      <ChatContext.Provider
        key="provider"
        value={{
          ...this.state,
          ...value,
        }}
      >
        {children}
      </ChatContext.Provider>
    )
  }
}

export default ChatProvider;
