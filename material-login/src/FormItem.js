import React from 'react';

export default class FormItem extends React.Component {

  render() {
    return (
      <li className="Forms">
      <strong>{this.props.user.title}</strong> - {this.props.user.category}
      </li>
    );
  }
}