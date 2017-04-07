import React from 'react'
import { Table } from 'antd';
import CartFooter from './CartFooter'
import './Cart.css'

export default ({products, selectedProducts, columns, rowSelection, removeCartProduct, addNum, removeAll}) => (
    <div className="cart-container">
      <Table rowSelection={rowSelection} 
             columns={columns} dataSource={products}  
             pagination={false} className="products-table" 
             footer={()=>{
              if(products.length>0){
                return (
                  <CartFooter 
                    removeAll={removeAll}
                    selectedProducts={selectedProducts}
                  />
              )}
      }}/>
    </div>
)


