import { observable, action } from 'mobx'

class ProductStore {
  @observable isShowCart = false

  @observable isShowCheck = false

  @observable productCart = []

  @action('Event on mouse enter')
  cartMouseEnter(id) {
    console.log('enter')
  }

  @action('Event on mouse leave')
  cartMouseLeave(id) {
    console.log('leave')
  }
}

export default ProductStore
