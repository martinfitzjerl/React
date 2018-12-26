import React from 'react';

export default class InvestmentItem extends React.Component {

  render() {
    return (
      <li className="Investments">
      {this.props.investment.title} - {this.props.investment.category}
      </li>
    );
  }
}