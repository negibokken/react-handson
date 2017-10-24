import React from 'react';

export class Hello extends React.Component {
  render() {
    return (
      <p style={{color: "green"}}>Hello {this.props.text}</p>
    );
  }
}
