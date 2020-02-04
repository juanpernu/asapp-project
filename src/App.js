/** React dependencies */
import React from 'react';

/** Components dependencies */
import ChatProvider from './context/chatContext';
import MockedUsers from './mocks/users';
import ChatView from './view/chat';
import './App.scss';

/**
 * The main App file.
*/
function App() {
  return (
    <div className="App">
      <ChatProvider users={MockedUsers}>
        <ChatView/>
      </ChatProvider>
    </div>
  );
}

export default App;
