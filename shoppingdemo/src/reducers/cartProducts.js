const removeProduct= (products, key) => { 
  let newProducts = [].concat(products)
  newProducts.forEach((product, index) => {
    if(product.key===key){
      newProducts.splice(index, 1)
    }
  })
  return newProducts
}

const computeSubtotal = (product) => {
    product.subTotal = (product.price*product.num).toFixed(2)
  return product
}

const computeAddSubtotal = (products, action) => {
  let newProducts = [].concat(products)
  newProducts.forEach((product, index) => {
    if(product.key===action.key){
     product.subTotal = (product.price*action.num.value).toFixed(2)
    }
  })
  return newProducts
}

const cartProducts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state,computeSubtotal(action.product)]
    case 'REMOVE_CART_PRODUCT':
      return removeProduct(state, action.key)
    case 'ADD_NUM':
      return computeAddSubtotal(state, action)
    case 'REMOVE_All':
      return []
    default: 
      return state
  }
}

export default cartProducts
