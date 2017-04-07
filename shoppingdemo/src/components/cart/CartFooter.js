import React from 'react'
import { Button } from 'antd'

export default ({removeAll, selectedProducts}) => (
   <div className="statistics">
      <a href="#" onClick={()=>removeAll()}>清空购物车</a>
      <div className="right-content">
      <div className="to-space">
        <span>已选</span>
        <span className="red-font">{selectedProducts.length}</span>
        <span>件</span>
      </div>
      <div className="to-space">  
        <span className="to-space">合计：￥</span>
        <span className="red-font">{
          selectedProducts.forEach((product)=>{
            
          })  
        }</span>
      </div>
        <Button type="danger">结算</Button>
      </div>
  </div>
)

