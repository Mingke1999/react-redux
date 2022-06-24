import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './component/Hello';

import { Provider } from 'react-redux';
import store from './redux/store';

//console.log(store.getState().count)
const count = store.getState().count
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <div>
      <Hello/>
      <p>count={count}</p>
    </div>
  </Provider>
    
);
