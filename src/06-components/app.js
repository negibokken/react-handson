import React from 'react';
import ReactDOM from 'react-dom';
import { MyText } from './Text';
import { Select } from './Select';
import { Preview } from './Preview';

const container = document.querySelector('.js-app');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textValue: "initial value",
      textStyle: "bold"
    }
  }

  onChangeText(text) {
    this.setState({
      textValue: text
    });
  }

  onChangeStyle(textStyle) {
    this.setState({
      textStyle
    });
  }

  render() {
    return (
      <div>
        <MyText value={this.state.textValue} onChange={this.onChangeText.bind(this)}/>
        <Select textStyle={this.state.textStyle} onChange={this.onChangeStyle.bind(this)}/>
        <Preview textValue={this.state.textValue} textStyle={this.state.textStyle} />
      </div>
    );
  }
}

ReactDOM.render(<App />, container);
