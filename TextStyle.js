import React form 'react';

class TextStyle extends React.Component {
  constructor() {
    super();
    this.state = {
      tesxtStyle: 'bold'
    }
  }
  render() {
    return (
      <select name="textStyle">
        <option value="bold">bold</option>
        <option value="italic">italic</option>
      </select>
    )
  }
}
