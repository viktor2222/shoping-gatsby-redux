import React from 'react'
import { inject } from 'mobx-react'
import {
  CartContainer, ProductImg, ShowContent,
} from './styled'
import { BuyBtn } from '../../../styles'

export const ProductItem = inject('cartStore')(({ cartStore, item }) => {
  const {
    title, img, description, price,
  } = item
  return (
    <CartContainer>
      <ProductImg src={img} alt={title} />
      <ShowContent>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{price}</p>
        <BuyBtn type='button' cart onClick={() => cartStore.addTodoCart(item)}>Add To Cart</BuyBtn>
      </ShowContent>
    </CartContainer>
  )
})
