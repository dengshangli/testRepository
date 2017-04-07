import React from 'react'
import { Button } from 'antd'
import './Product.css'

const Product = ({product, addToCart, disabled}) => (
  <figure >
      <img src={"assets/" + product.image} alt="图片已失效"/>
      <figcaption>
        <h3>￥{product.price}</h3>
        <span>{product.discription}</span>
        <Button type="danger" className="to-cart" onClick={() => addToCart(product)} disabled={disabled}>加入购物车</Button>
      </figcaption>
  </figure>
)

export default Product
