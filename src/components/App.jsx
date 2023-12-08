import React from 'react';
import Greeting from './Greeting';
import Message from './Message';

export const App = () => {
  const userName = 'Іван'; // Замініть це ім'ям користувача, яке ви хочете використовувати

  return (
    <div>
      <Greeting name={userName} />
      <Message text="класс" />
    </div>
  );
};
