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
    // if (this.productCart.find(this.productCart.id !== payload.id)) {
    //   this.productCart.push(payload)
    // }
    this.productCart.push(payload)
    console.log(this.productCart.find(this.productCart.id))
  }

  @action('Remove todo Cart')
  removeTodoCart(id) {
    this.productCart = this.productCart.filter(item => item.id !== id)
  }
}

export default CartStore
