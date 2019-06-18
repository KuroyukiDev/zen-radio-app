console.log('app.js is running!');
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routers/AppRouter';
import Header from "./components/Header";
import MusicPlayer from './components/MusicPlayer';

const App = () => (
  <div>
    <AppRoutes />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);