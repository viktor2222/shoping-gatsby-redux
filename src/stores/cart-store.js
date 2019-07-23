import {
  observable, action,
} from 'mobx'

class CartStore {
  @observable show = false

  @action('Cart is show')
  showCart() {
    this.show = true
  }

  @action('Cart is hide')
  hideCart() {
    this.show = false
  }
}

export default CartStore
