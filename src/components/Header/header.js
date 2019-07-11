/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { Fade } from 'react-reveal'
import Check from '../Check/check'

import {
  Container, BuyBtn, ItemList, CartImg,
} from '../global'
import {
  HeaderContainer,
  ImgCart,
  CartList,
  ActiveList,
  CartCount,
  SumCount,
} from './styled'

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openCheck, setOpenCheck] = useState(false);

  return (
    <HeaderContainer>
      <Container>
        <ActiveList onClick={() => setOpen(!open)}>
          <ImgCart src='./cart-icon.png' alt='cart' />
          <CartCount>2</CartCount>
        </ActiveList>
        {open
          && (
            <Fade right cascade>
              <CartList>
                <ItemList>
                  <CartImg src='./cart/activiafin.png' alt='product item' />
                  <span>activia</span>
                  <span>$5</span>
                </ItemList>
                <ItemList>
                  <CartImg src='./cart/11199_pic_amul-amul-masti-spiced-buttermilk-1-ltr.png' alt='product item' />
                  <span>danone</span>
                  <span>$10</span>
                </ItemList>
                <ItemList>
                  <CartImg src='./cart/L&F_POTS_LTD_Face_02.png' alt='product item' />
                  <span>activia</span>
                  <span>$25</span>
                </ItemList>
                <ItemList>
                  <CartImg src='./cart/L&F_POTS_LTD_Face_02.png' alt='product item' />
                  <span>activia</span>
                  <span>$25</span>
                </ItemList>
                <ItemList>
                  <CartImg src='./cart/L&F_POTS_LTD_Face_02.png' alt='product item' />
                  <span>activia</span>
                  <span>$25</span>
                </ItemList>
                <ItemList>
                  <CartImg src='./cart/L&F_POTS_LTD_Face_02.png' alt='product item' />
                  <span>activia</span>
                  <span>$25</span>
                </ItemList>
                <ItemList>
                  <CartImg src='./cart/L&F_POTS_LTD_Face_02.png' alt='product item' />
                  <span>activia</span>
                  <span>$25</span>
                </ItemList>
                <ItemList>
                  <CartImg src='./cart/L&F_POTS_LTD_Face_02.png' alt='product item' />
                  <span>activia</span>
                  <span>$25</span>
                </ItemList>
                <SumCount>Total: $40</SumCount>
                <BuyBtn onClick={() => setOpenCheck(!openCheck)} type='button'>Buy</BuyBtn>
              </CartList>
            </Fade>
          )
        }
      </Container>
      {openCheck && (
        <Check />
      ) }
    </HeaderContainer>
  )
}

export default Header
