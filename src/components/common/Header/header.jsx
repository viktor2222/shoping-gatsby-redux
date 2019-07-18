/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
// import { Fade } from 'react-reveal'
// import { Check } from '../../Main'

import { Cart } from '..'
import {
  Container,
  //  BuyBtn, ItemList, CartImg,
} from '../../../styles'
import {
  HeaderContainer,
  ImgCart,
  // CartList,
  ActiveList,
  CartCount,
  // SumCount,
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
