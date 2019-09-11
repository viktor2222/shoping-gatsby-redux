import { observable, action } from 'mobx'

class ProductStore {
  @observable productCart = []

  @action('Event on mouse enter')
  cartMouseEnter = (id) => {
    console.log('enter:', id)
  }

  @action('Event on mouse leave')
  cartMouseLeave = (id) => {
    console.log('leave:', id)
  }
}

export default ProductStore
