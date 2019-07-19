/* eslint-disable no-return-assign */
import {
  observable, computed, action, decorate,
} from 'mobx'

class CartStore {
  text = 'textasassasassas'

  show = false

  get isCartShow() {
    return this.show
  }

  ('Cart is hide')
  isHide() {
    return this.show = false
  }

  ('Toggle Cart')
  toggleCart() {
    return !this.show
  }
}
decorate(CartStore, {
  text: observable,
  show: observable,
  isShow: computed,
  isHide: action,
  toggleCart: action,
})

export default CartStore
