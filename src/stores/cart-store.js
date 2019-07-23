import {
  observable, action,
} from 'mobx'

class CartStore {
  @observable text = 'textasassasassas'

  @observable show = false

  @action showCart() {
    return this.show
  }

  @action('Cart is hide')
  hideCart() {
    this.show = false
  }

  @action('Toggle Cart')
  toggleCart() {
    this.show = !this.show
  }
}


export default CartStore
