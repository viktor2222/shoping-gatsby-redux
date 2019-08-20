import React from 'react'

import {
  CartImg, ItemList, CloseBtn,
} from './styled'

export const CartProductItem = ({
  img, title, price, id, removeWithCart,
}) => (
  <ItemList key={id}>
    <CartImg src={img} alt={title} />
    <span>{title}</span>
    <span>{price}</span>
    <CloseBtn onClick={removeWithCart}>x</CloseBtn>
  </ItemList>
)
