import React from 'react'
import { inject, observer } from 'mobx-react'

import {
  CartImg, ItemList, CloseBtn,
} from './styled'

export const CartProductItem = inject('cartStore')(observer(({ cartStore }) => (
  <>
    {cartStore.productCart.map(({
      img, title, price, id,
    }) => (
      <ItemList key={id}>
        <CartImg src={img} alt={title} />
        <span>{title}</span>
        <span>{price}</span>
        <CloseBtn onClick={() => cartStore.removeTodoCart(id)}>x</CloseBtn>
      </ItemList>
    ))}

  </>
)))
