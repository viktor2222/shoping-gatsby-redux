import {
  observable, action,
} from 'mobx'

class CartStore {
  @observable isShowCart = false

  @observable isShowCheck = false

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
}

export default CartStore
