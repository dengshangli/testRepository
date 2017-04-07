const selectedProducts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return action.products
    case 'REMOVE_All':
      return []
    default: 
      return state
  }
}

export default selectedProducts
