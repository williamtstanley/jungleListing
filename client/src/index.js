import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './reducers';

const title = 'super wicked React boilerplate';

// const App = ({title}) => (
//   <div>{title}</div>
// );
@connect((state) => ({ title: state.ui.title }))
class App extends Component {
  render() {
    return (
      <div>foooooooooo</div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App title={title}/>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
