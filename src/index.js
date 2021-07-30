import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import TicTacToe from './TicTacToe';
import Darkness from './DarkMode';

const App = (props) => {
  return <div className="app">
    <Profile />
    <Darkness />
    <TicTacToe/>
    <div className="todo">
      <h1>Todo</h1>
    </div>
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);