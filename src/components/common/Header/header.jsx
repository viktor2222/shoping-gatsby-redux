import React from 'react'

import { observer, inject } from 'mobx-react'
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

export const Header = inject('cartStore')(observer(({ cartStore }) => (
  <HeaderContainer>
    <Container>
      <ActiveList onClick={() => cartStore.toggleCart()}>
        <ImgCart src='/cart.svg' alt='cart' />
        <CartCount>2</CartCount>
      </ActiveList>
      <Cart />
    </Container>
  </HeaderContainer>
)))
