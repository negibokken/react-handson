import React from 'react';

export class Preview extends React.Component {
  constructor() {
    super();
  }

  returnStyle() {
    if (this.props.textStyle === 'bold') {
      return {fontWeight: this.props.textStyle};
    } else if (this.props.textStyle === 'italic')  {
      console.log('italic')
      return {fontStyle: this.props.textStyle};
    }
  }

  render() {
    return (
      <p style={this.returnStyle()}>{this.props.textValue}</p>
    )
  }
}
