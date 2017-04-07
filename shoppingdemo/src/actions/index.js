import { notification } from 'antd'

export const addToCart = (product) => {
  notification['success']({message: '添加成功'})
  return {
    type: 'ADD_TO_CART',
    product
  }
}

export const removeCartProduct = (key) => {
  notification['success']({message: '删除成功'})
  return   {
      type: 'REMOVE_CART_PRODUCT',
      key
    }
}

export const addNum = (num,key) => ({
    type: 'ADD_NUM',  
    num ,
    key
  })

export const removeAll = () => ({
  type: 'REMOVE_All', 
})

// cartFooter
export const addCartFooterProducts = (products) => ({
  type: 'ADD_PRODUCTS',
  products
})
