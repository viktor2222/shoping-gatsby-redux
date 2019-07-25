import React from 'react'
import { inject, observer } from 'mobx-react'

import {
  CartImg, ItemList,
} from './styled'

export const CartProductItem = inject('cartStore')(observer(({ cartStore }) => (
  <>
    <ItemList>
      <CartImg src='./cart/activiafin.png' alt='product item' />
      <span>{cartStore.text}</span>
      <span>$5</span>
    </ItemList>
  </>
)))
