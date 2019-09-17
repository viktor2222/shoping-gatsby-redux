import React, { useCallback } from 'react'

import {
  CartImg, ItemList, CloseBtn,
} from './styled'

export const CartProductItem = ({
  img, title, price, id, removeWithCart,
}) => {
  const onRemove = useCallback(
    () => {
      removeWithCart(id)
    },
    [id],
  )
  return (
    <ItemList key={id}>
      <CartImg src={img} alt={title} />
      <span>{title}</span>
      <span>
      $
        {price}
      </span>
      <CloseBtn onClick={onRemove}>x</CloseBtn>
    </ItemList>
  )
}
