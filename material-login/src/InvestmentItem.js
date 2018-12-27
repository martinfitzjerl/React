import React from 'react';

export default class InvestmentItem extends React.Component {

  render() {
    return (
      <li className="Investments">
      <strong>{this.props.investment.title}</strong> - {this.props.investment.category}
      </li>
    );
  }
}