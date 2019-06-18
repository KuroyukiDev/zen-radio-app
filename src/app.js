console.log('app.js is running!');
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routers/AppRouter';

const App = () => (
  <div>
    <AppRoutes />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);