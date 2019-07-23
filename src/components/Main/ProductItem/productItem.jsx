import React from 'react'

import { observer, inject } from 'mobx-react'
import {
  CartContainer, ProductImg, ShowContent,
} from './styled'
import { BuyBtn } from '../../../styles'

export const ProductItem = inject('cartStore')(observer(({ cartStore }) => (
  <CartContainer>
    <ProductImg src='/cart/activiafin.png' alt='activiafin' />
    <ShowContent>
      <h4>{cartStore.text}</h4>
      <p>Description</p>
      <p>Price</p>
      <BuyBtn type='button' cart>Add To Cart</BuyBtn>
    </ShowContent>
  </CartContainer>
)))
