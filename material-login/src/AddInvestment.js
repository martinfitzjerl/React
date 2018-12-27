import React from 'react';
export default class AddInvestment extends React.Component {

    static defaultProps = {
        categories: ['Vegetables', 'Meat', 'Grains']
    }
  render() {
      let categoryOptions = this.props.categories.map(category =>{
          return <option key={category} value="category">{category}</option>
      });
      
    return (
      <div>
          <h3>Add Investment</h3>
          <form>
              <div>
                  <label>Title</label><br />
                  <input type="text" ref="title" />
              </div>
              <div>
                  <label>Category</label><br />
                  <select ref="category">
                  {categoryOptions}
                  
                  </select>
                  </div>
          </form>
      </div>
    );
  }
}