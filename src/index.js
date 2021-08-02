import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import TicTacToe from './TicTacToe';
import Darkness from './DarkMode';
import Todo from './Todo.js'

const App = (props) => {
  return <div className="app">
    <Profile />
    <Darkness />
    <TicTacToe />
    <Todo />
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);