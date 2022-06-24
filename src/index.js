import React from 'react';
import ReactDOM from 'react-dom/client';
import Parent from './Compose/Parent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Parent/>
    </div>
  </React.StrictMode>
);
