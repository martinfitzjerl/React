import React from 'react';
import InvestmentItem from './InvestmentItem';
export default class Investments extends React.Component {

  render() {
    let investmentItems;
    if (this.props.investments){
        investmentItems = this.props.investments.map(investment => {
            console.log(this.props);
            return(
                <InvestmentItem key={investment.title} investment={investment} />
            );

        });
    }
      
    return (
      <div className="Investments">
      {investmentItems}
      </div>
    );
  }
}