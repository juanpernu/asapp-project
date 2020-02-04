import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserHeader from '../UserHeader';
import ChatContext from '../../context/chatContext';
import MockedUsers from '../../mocks/users'

const mockedData = {
  user: MockedUsers[0],
}

describe('Componentes - UserHeader', () => {
  it('Should render correctly', () => {
    const tree = (
      <ChatContext users={MockedUsers}>
        <UserHeader user={mockedData.user} />
      </ChatContext>
    )
    const { getByText } = render(tree);
    expect(getByText('Rob')).toBeInTheDocument();
    expect(UserHeader).toMatchSnapshot();
  });
});
