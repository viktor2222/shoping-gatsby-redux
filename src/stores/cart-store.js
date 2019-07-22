import {
  observable, computed, action,
} from 'mobx'

class CartStore {
  @observable text = 'textasassasassas'

  @observable show = false

  @computed get showCart() {
    return this.show
  }

  @action('Cart is hide')
  hideCart() {
    this.show = false
  }

  @action toggleCart() {
    return !this.show
  }
}


export default CartStore
