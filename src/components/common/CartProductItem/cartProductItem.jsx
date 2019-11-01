import React, { useCallback } from 'react'

import {
  CartImg, ItemList, CloseBtn, CartTitle, CountItem,
} from './styled'

export const CartProductItem = ({
  img,
  title,
  price,
  id,
  type,
  removeWithCart,
  addOneProduct,
}) => {
  const onRemove = useCallback(() => {
    removeWithCart(id)
  }, [id])
  const onAddProduct = useCallback(() => {
    addOneProduct(price)
  }, [id])
  return (
    <ItemList key={id}>
      <CartImg src={img} alt={title} />
      <CartTitle>{title}</CartTitle>
      {type === 'multiply' && (
      <CountItem onClick={onAddProduct}>
        x
        {onAddProduct}
      </CountItem>
      )}
      <span>
        $
        {price}
      </span>
      <CloseBtn onClick={onRemove}>x</CloseBtn>
    </ItemList>
  )
}
