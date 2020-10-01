import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      data: {},
    }
  }

  componentDidMount() {
    fetch('/plaid')
      .then(res => res.json())
      .then(data => this.setState(data));
  }

  render() {
    return (<div>
      {JSON.stringify(this.state.data)}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));