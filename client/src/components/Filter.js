import React, { Component } from 'react';
import styled from "styled-components";


const FilterWrapper = styled('div')`
        margin:10px 10px;
      
    `;

 class Products extends Component {

    render() {


        return (
            <FilterWrapper className="row">
                <div className="col-md-4">
                  <h4>Filter</h4>
                </div>
                <div className="col-md-4">
                    <label> By Price
               <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                        </select>
                    </label>
                </div>
               
                <div className="col-md-4">
                   <p> Number Of Products Found:</p>
                    {`${this.props.count} `}
                </div>
            </FilterWrapper>
        )
    }
}

export default Products
