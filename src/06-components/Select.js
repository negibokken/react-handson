import React from 'react';

export class Select extends React.Component {
  render() {
    return (
      <select onChange={ (e) => this.props.onChange(e.target.value) }>
        <option>bold</option>
        <option>italic</option>
      </select>
    );
  }
}
