import {combineReducers} from 'redux'
import cartProducts from './cartProducts'
import selectedProducts from './selectedProducts'

const rootReducer = combineReducers({
  cartProducts,
  selectedProducts
})

export default rootReducer

