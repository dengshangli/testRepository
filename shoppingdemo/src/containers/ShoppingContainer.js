import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import {getProducts} from '../api/globalVariable'
import Product from '../components/shopping/Product'

const ShoppingContainer = ({products, cartProducts, addToCart}) => (
  <div className="fig-container">
    {products.map(product =>{
      let disabled = false
      for(let j=0;j<cartProducts.length;j++){
        if(cartProducts[j].key === product.key){
          disabled = true
        }
      }
      return <Product product={product} key={product.key} addToCart={addToCart} disabled={disabled}></Product>
    })}
  </div>
)

const mapStateToProps = (state) => ({
  products: getProducts(),
  cartProducts: state.cartProducts
})

export default connect(
  mapStateToProps,
  { addToCart }  // 定义了此方法传递给Action
)(ShoppingContainer)
