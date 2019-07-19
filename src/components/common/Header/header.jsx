import React from 'react'

import { Cart } from '..'
import {
  Container,
} from '../../../styles'
import {
  HeaderContainer,
  ImgCart,
  ActiveList,
  CartCount,
} from './styled'

export const Header = ({ toggleCart }) => (
  <HeaderContainer>
    <Container>
      <ActiveList onClick={() => toggleCart()}>
        <ImgCart src='/cart.svg' alt='cart' />
        <CartCount>2</CartCount>
      </ActiveList>
      <Cart />
    </Container>
  </HeaderContainer>
)
