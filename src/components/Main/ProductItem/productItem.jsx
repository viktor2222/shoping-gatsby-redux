import React from 'react'
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
  price,
}) => (
  <>
    <CartContainer
      key={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ProductImg src={img} alt={title} />
      <ShowContent>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{price}</p>
        <BuyBtn type='button' cart onClick={addToCart}>
          Add To Cart
        </BuyBtn>
      </ShowContent>
    </CartContainer>
  </>
)
