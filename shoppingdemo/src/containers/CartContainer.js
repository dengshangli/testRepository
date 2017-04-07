import React from 'react'
import { connect } from 'react-redux'
import { Icon,InputNumber  } from 'antd';
import Cart from '../components/cart/Cart'
import {removeCartProduct, addNum , removeAll, addCartFooterProducts} from '../actions'

const CartContainer = ({products, selectedProducts, removeCartProduct, addNum, removeAll, addCartFooterProducts}) => {
    const rowSelection = {
      onSelect: (record, selected, selectedRows) => {
        console.log(selected, selectedRows)
        addCartFooterProducts(selectedRows)
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows)
        addCartFooterProducts(selectedRows)
      }
    }
    const columns = [{
      title: '商品',
      dataIndex: 'good',
      key:'good',
      width:'250px',
      render: (text, record, index) => 
        <a href="www.baidu.com" className="good">
          <figure >
            <img src={"assets/" + record.image} alt="图片已失效"/>
            <figcaption>
              <span>{record.name}</span>
            </figcaption>
          </figure>
        </a>
    }, {
      title: '单价',
      dataIndex: 'price',
      key:'price'
    }, {
      title: '数量',
      dataIndex: 'num',
      key:'num',
      render: (text,record) => 
        <InputNumber min={1} max={1000} defaultValue={text} onChange={(value)=>addNum({value},record.key)}/>
    }, {
      title: '小计',
      dataIndex: 'subTotal' ,
      key:'subTotal'},{
      title: '操作', 
      dataIndex: 'remove', 
      key: 'remove', 
      render: (text, record, index) => 
        <a href="#" onClick={()=>removeCartProduct(record.key)}><Icon type="delete" /></a> 
      }
  ]
  return (
    <Cart 
      products={products} 
      selectedProducts={selectedProducts}
      removeCartProduct={removeCartProduct} 
      addNum={addNum} removeAll={removeAll} 
      columns={columns}
      rowSelection={rowSelection}
    />
)}

const mapStateToProps = (state) => ({
  products: state.cartProducts,
  selectedProducts: state.selectedProducts
})

export default connect(mapStateToProps, { removeCartProduct, addNum, removeAll, addCartFooterProducts})(CartContainer)
