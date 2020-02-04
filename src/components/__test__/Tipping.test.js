import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tipping from '../Tipping';
import MockedUsers from '../../mocks/users'

const mockedData = {
  userId: 0,
  users: MockedUsers
}

describe('Componentes - Tipping', () => {
  it('Should render correctly', () => {
    const { getByText } = render(<Tipping userId={mockedData.userId} users={mockedData.users} />);
    expect(getByText('Laura is tipping...')).toBeInTheDocument();
    expect(Tipping).toMatchSnapshot();
  });
});
