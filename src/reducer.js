import {
  CLEAR_CART,
  INCREASE,
  DECREASE,
  REMOVE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state.cart, cart: new Map() }
    case INCREASE:
      const newCartIncrease = new Map(state.cart)
      const itemIdInc = action.payload.id
      const itemInc = newCartIncrease.get(itemIdInc)
      const newItemInc = { ...itemInc, amount: itemInc.amount + 1 }
      newCartIncrease.set(itemIdInc, newItemInc)
      return { ...state, cart: newCartIncrease }
    case DECREASE:
      const newCartDecrease = new Map(state.cart)
      const itemIdDec = action.payload.id
      const itemDec = newCartDecrease.get(itemIdDec)
      if (itemDec.amount === 1) {
        newCartDecrease.delete(itemIdDec)
        return { ...state, cart: newCartDecrease }
      }
      const newItemDec = { ...itemDec, amount: itemDec.amount - 1 }
      newCartDecrease.set(itemIdDec, newItemDec)
      return { ...state, cart: newCartDecrease }
    case REMOVE:
      const newCartRemove = new Map(state.cart)
      newCartRemove.delete(action.payload.id)
      return { ...state, cart: newCartRemove }
    case LOADING:
      break
    case DISPLAY_ITEMS:
      break
    default:
      throw new Error(`No matching action type : ${action.type}`)
  }
  return state
}

export default reducer
