import React from 'react'
import { observer, inject } from 'mobx-react'
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
      <BuyBtn type='button' cart onClick={() => cartStore.addTodoCart()}>Add To Cart</BuyBtn>
    </ShowContent>
  </CartContainer>
)
