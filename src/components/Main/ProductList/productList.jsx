import React from 'react'

import { observer } from 'mobx-react'
import {
  CartContainer, ProductImg, ShowContent, ContainerList,
} from './styled'
import { Container, BuyBtn } from '../../../styles'

export const ProductList = observer(({ store }) => (
  <Container>
    <ContainerList>
      <CartContainer>
        <ProductImg src='/cart/activiafin.png' alt='activiafin' />
        <ShowContent>
          <h4>{store.text}</h4>
          <p>Description</p>
          <p>Price</p>
          <BuyBtn type='button' cart>Add To Cart</BuyBtn>
        </ShowContent>
      </CartContainer>
      <CartContainer>
        <ProductImg src='/cart/activiafin.png' alt='activiafin' />
        <ShowContent>
          <h4>Title</h4>
          <p>Description</p>
          <p>Price</p>
          <BuyBtn type='button' cart>Add To Cart</BuyBtn>
        </ShowContent>
      </CartContainer>
      <CartContainer>
        <ProductImg src='/cart/activiafin.png' alt='activiafin' />
        <ShowContent>
          <h4>Title</h4>
          <p>Description</p>
          <p>Price</p>
          <BuyBtn type='button' cart>Add To Cart</BuyBtn>
        </ShowContent>
      </CartContainer>
      <CartContainer>
        <ProductImg src='/cart/activiafin.png' alt='activiafin' />
        <ShowContent>
          <h4>Title</h4>
          <p>Description</p>
          <p>Price</p>
          <BuyBtn type='button' cart>Add To Cart</BuyBtn>
        </ShowContent>
      </CartContainer>
      <CartContainer>
        <ProductImg src='/cart/activiafin.png' alt='activiafin' />
        <ShowContent>
          <h4>Title</h4>
          <p>Description</p>
          <p>Price</p>
          <BuyBtn type='button' cart>Add To Cart</BuyBtn>
        </ShowContent>
      </CartContainer>
      <CartContainer>
        <ProductImg src='/cart/activiafin.png' alt='activiafin' />
        <ShowContent>
          <h4>Title</h4>
          <p>Description</p>
          <p>Price</p>
          <BuyBtn type='button' cart>Add To Cart</BuyBtn>
        </ShowContent>
      </CartContainer>
      <CartContainer>
        <ProductImg src='/cart/activiafin.png' alt='activiafin' />
        <ShowContent>
          <h4>Title</h4>
          <p>Description</p>
          <p>Price</p>
          <BuyBtn type='button' cart>Add To Cart</BuyBtn>
        </ShowContent>
      </CartContainer>
      <CartContainer>
        <ProductImg src='/cart/activiafin.png' alt='activiafin' />
        <ShowContent>
          <h4>Title</h4>
          <p>Description</p>
          <p>Price</p>
          <BuyBtn type='button' cart>Add To Cart</BuyBtn>
        </ShowContent>
      </CartContainer>
    </ContainerList>
  </Container>
))
