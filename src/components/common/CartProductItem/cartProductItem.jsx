import React from 'react'

import {
  CartImg, ItemList, CloseBtn,
} from './styled'

export const CartProductItem = ({ cartStore }) => (

  <>
    {console.log(cartStore.productCart)}
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
)
