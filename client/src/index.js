import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Super Wicked React boilerplate';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
