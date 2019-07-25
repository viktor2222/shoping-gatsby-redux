import React from 'react'
import { inject, observer } from 'mobx-react'

import {
  CartImg, ItemList,
} from './styled'

export const CartProductItem = inject('cartStore')(observer(({ cartStore }) => (
  <>
    <ItemList>
      <CartImg src={cartStore.img} alt={cartStore.title} />
      <span>{cartStore.title}</span>
      <span>{cartStore.price}</span>
    </ItemList>
  </>
)))
