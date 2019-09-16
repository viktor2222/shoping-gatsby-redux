/* eslint-disable prefer-const */
import { observable, action } from 'mobx'

class CartStore {
  @observable isShowCart = false

  @observable isShowCheck = false

  @observable productCart = []

  @action('Cart is show')
  showCart = () => {
    this.isShowCart = true
  }

  @action('Cart is hide')
  hideCart = () => {
    this.isShowCart = false
  }

  @action('Check is show')
  showCheck = () => {
    this.isShowCheck = true

    try {
      window.localStorage.setItem(
        'productCart',
        JSON.stringify(this.productCart),
      )
    } catch {
      console.error('setItem store error')
    }
  }

  @action('Total Sum')
  totalSum = () => {
    const dataProduct = this.productCart
    if (this.isShowCart === true && dataProduct !== []) {
      for (let i = 0; i <= dataProduct.length; i += 1) {
        let newPrice = dataProduct
          .map(x => x.price)
          .reduce((sum, current) => sum + current, 0)
        return newPrice
      }
    }
  }

  @action('Check is hide')
  hideCheck = () => {
    this.isShowCheck = false
    this.productCart = []
  }

  @action('Add todo Cart')
  addTodoCart = (payload) => {
    if (this.productCart.find(x => x.id === payload.id)) {
      return
    }
    this.productCart.push(payload)
  }

  @action('Remove todo Cart')
  removeTodoCart = (id) => {
    this.productCart = this.productCart.filter(item => item.id !== id)
  }
}

export default CartStore
