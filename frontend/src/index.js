import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/Transition.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


class Root extends React.Component {
    render() {
        return (
              <App />
          );
    }
  }

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
