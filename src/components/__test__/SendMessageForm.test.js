import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SendMessageForm from '../SendMessageForm';
import ChatContext from '../../context/chatContext';
import MockedUsers from '../../mocks/users'

const mockedData = {
  userId: MockedUsers[0].id
}

describe('Componentes - SendMessageForm', () => {
  it('Should render correctly', () => {
    const tree = (
      <ChatContext users={MockedUsers}>
        <SendMessageForm user={mockedData.userId} />
      </ChatContext>
    )
    render(tree);
    expect(SendMessageForm).toMatchSnapshot();
  });
});
