/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
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

export const Header = () => {
  const [open, setOpen] = useState(false);
  // const [openCheck, setOpenCheck] = useState(false);

  return (
    <HeaderContainer>
      <Container>
        <ActiveList onClick={() => setOpen(!open)}>
          <ImgCart src='/cart.svg' alt='cart' />
          <CartCount>2</CartCount>
        </ActiveList>
        <Cart />
        {/* {open
          && (
        } */}
      </Container>
      {/* {openCheck && (
        <Check />
      ) } */}
    </HeaderContainer>
  )
}
