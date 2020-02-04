import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Message from '../Message';

const mockedData = {
  message: 'Test message',
  from: {
    id: 1,
  },
  timestamp: '11:11',
  user_id: 1,
  saw_message: false
}

describe('Componentes - Message', () => {
  it('Should render correctly', () => {
    window.HTMLElement.prototype.scrollIntoView = function () {};
    const { getByText } = render(
    <Message
      message={mockedData.message}
      from={mockedData.from}
      timestamp={mockedData.timestamp}
      user_id={mockedData.user_id}
      saw_message={mockedData.saw_message}/>);
    expect(getByText('Test message')).toBeInTheDocument();
    expect(getByText('11:11')).toBeInTheDocument();
    expect(Message).toMatchSnapshot();
  });
});
