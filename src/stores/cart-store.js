/* eslint-disable class-methods-use-this */
import {
  observable, action,
} from 'mobx'

class CartStore {
  @observable isShowCart = false

  @observable isShowCheck = false

  @observable productCart = []

  @action('Cart is show')
  showCart() {
    this.isShowCart = true
  }

  @action('Cart is hide')
  hideCart() {
    this.isShowCart = false
  }

  @action('Check is show')
  showCheck() {
    this.isShowCheck = true
  }

  @action('Check is hide')
  hideCheck() {
    this.isShowCheck = false
  }

  @action('Add todo Cart')
  addTodoCart(payload) {
    if (this.productCart.find(x => x.id === payload.id)) {
      return
    }
    this.productCart.push(payload)
  }

  @action('Event on mouse enter')
  cartMouseEnter() {
    console.log('mouse enter')
  }

  @action('Event on mouse leave')
  cartMouseLeave() {
    console.log('mouse leave')
  }

  @action('Remove todo Cart')
  removeTodoCart(id) {
    this.productCart = this.productCart.filter(item => item.id !== id)
  }
}

export default CartStore
