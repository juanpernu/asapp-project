import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MessageList from '../MessageList';

const mockedData = {
  messages: [{
    text: "Text message",
    from: {
      name: "Rob",
      id: 0,
      image_profile: "https://images.unsplash.com/photo-1487529236533-f2b78c0c9344?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&rect=1664%2C1838%2C1033%2C1033&fit=crop&s=9a5a069600d20a4718f41bce3aec4225&h=128&w=128"
    },
    timestamp: "12:04",
    user_id: 0,
    saw_message: false
  }],
  user: {
    name: "Rob",
    id: 0,
    image_profile: "https://images.unsplash.com/photo-1487529236533-f2b78c0c9344?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&rect=1664%2C1838%2C1033%2C1033&fit=crop&s=9a5a069600d20a4718f41bce3aec4225&h=128&w=128",
  }
}

describe('Componentes - MessageList', () => {
  it('Should render correctly', () => {
    window.HTMLElement.prototype.scrollIntoView = function () { };
    render( <MessageList messages={mockedData.messages} user={mockedData.user}/>);
    expect(MessageList).toMatchSnapshot();
  });
});
