import React from 'react';
import ReactDOM from 'react-dom';

const container = document.querySelector('.js-app');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "put text here"
    };
  }
  render() {
    return (
      <div>
        {/* inputの値とp要素の値が同期させるようにしてみましょう */}
        <input type="text" value={this.state.text} onChange={(e) => { this.setState({text: e.target.value}); }} />
        <p>{this.state.text}</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
