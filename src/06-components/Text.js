import React from 'react';

export class MyText extends React.Component {
  render() {
    return (
      <input type="text" value={this.props.value} onChange={ (e) => {this.props.onChange(e.target.value)}} />
    );
  }
}
