import { observable, action } from 'mobx'

class ProductStore {
  // no functionality

  @observable productCart = []

  @action('Event on mouse enter')
  cartMouseEnter = (id) => {
    console.log('enter:', id)
  }

  @action('Event on mouse leave')
  cartMouseLeave = (id) => {
    console.log('leave:', id)
  }
  // end
}

export default ProductStore
