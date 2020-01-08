import React from 'react';
import styled from "styled-components";

import Products from './Products';
import Filter from './Filter';
import Basket from './basket';

const ProductWrapper=styled('button')`
    
    
    margin: 40px; 
    min-height:50vh;
    padding:10px 10px;
       
`


class Home extends React.Component {

    constructor() {
        super();
        this.state = { size: '', sort: '', cartItems: [], products: [], filteredProducts: [] };
      }
      componentWillMount() {
    
        if (localStorage.getItem('cartItems')) {
          this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) });
        }
    
        fetch('http://localhost:8000/products').then(res => res.json())
          .catch(err => fetch('db.json').then(res => res.json()).then(data => data.products))
          .then(data => {
            this.setState({ products: data });
            this.listProducts();
          });
      }
    
      handleRemoveFromCart = (e, product) => {
        this.setState(state => {
          const cartItems = state.cartItems.filter(a => a.id !== product.id);
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          return { cartItems: cartItems };
        })
      }
    
      handleAddToCart = (e, product) => {
        this.setState(state => {
          const cartItems = state.cartItems;
          let productAlreadyInCart = false;
    
          cartItems.forEach(cp => {
            if (cp.id === product.id) {
              cp.count += 1;
              productAlreadyInCart = true;
            }
          });
    
          if (!productAlreadyInCart) {
            cartItems.push({ ...product, count: 1 });
          }
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          return { cartItems: cartItems };
        });
      }
    
      listProducts = () => {
        this.setState(state => {
          if (state.sort !== '') {
            state.products.sort((a, b) =>
              (state.sort === 'lowestprice'
                ? ((a.price > b.price) ? 1 : -1)
                : ((a.price < b.price) ? 1 : -1)));
          } else {
            state.products.sort((a, b) => (a.id > b.id) ? 1 : -1);
          }
          if (state.size !== '') {
            return { filteredProducts: state.products.filter(a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0) };
          }
          return { filteredProducts: state.products };
        })
      }
      handleSortChange = (e) => {
        this.setState({ sort: e.target.value });
        this.listProducts();
      }
      handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
        this.listProducts();
      }
render() {
    return (
       <div>
          
       
  
        <div className="row">
          <div className="col-md-9">
            <Filter count={this.state.filteredProducts.length} handleSortChange={this.handleSortChange}
              handleSizeChange={this.handleSizeChange} />
          <ProductWrapper>
            <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
         </ProductWrapper>
          </div>
          <div className="col-md-3">
            <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
{/*             
        <Route path="/basket" exact strict component ={() => <Basket  cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}/>}/> */}
          </div>

        </div>

               

        </div>
    )
}

}

export default Home