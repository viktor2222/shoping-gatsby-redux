import React, { useCallback } from 'react'
import { CartContainer, ProductImg, ShowContent } from './styled'
import { BuyBtn } from '../../../styles'

export const ProductItem = ({
  addToCart,
  onMouseEnter,
  onMouseLeave,
  title,
  img,
  id,
  description,
  type,
  price,
}) => {
  const item = {
    title,
    img,
    id,
    description,
    type,
    price,
  }
  const addItem = useCallback(
    () => {
      addToCart(item)
    },
    [],
  )
  const mouseEnter = useCallback(
    () => {
      onMouseEnter(id)
    },
    [],
  )
  const mouseLeave = useCallback(
    () => {
      onMouseLeave(id)
    },
    [],
  )
  return (
    <CartContainer
      key={id}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <ProductImg src={img} alt={title} />
      <ShowContent>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>
        $
          {price}
        </p>
        <BuyBtn type='button' cart onClick={addItem}>
        Add To Cart
        </BuyBtn>
      </ShowContent>
    </CartContainer>
  )
}
