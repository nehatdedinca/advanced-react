import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

ReactDOM.render(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);
