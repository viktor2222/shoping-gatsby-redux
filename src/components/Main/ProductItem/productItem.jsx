import React from 'react'

import {
  CartContainer, ProductImg, ShowContent,
} from './styled'
import { BuyBtn } from '../../../styles'

export const ProductItem = ({
  title, img, description, price,
}) => (
  <CartContainer>
    <ProductImg src={img} alt={title} />
    <ShowContent>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{price}</p>
      <BuyBtn type='button' cart>Add To Cart</BuyBtn>
    </ShowContent>
  </CartContainer>
)
