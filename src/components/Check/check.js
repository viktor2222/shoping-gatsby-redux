import React, { useState } from 'react'
import { Fade } from 'react-reveal'

import { BuyBtn, ItemList, CartImg } from '../global'

import {
  Overlay, CheckContainer, TitleCheck,
} from './styled'

const Check = () => {
  const [openCheck, setOpenCheck] = useState(false);

  return (
    <>
      <Overlay />
      <Fade top cascade>
        <CheckContainer>
          <TitleCheck>Your check</TitleCheck>
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
          <BuyBtn type='button' onClick={() => setOpenCheck(!openCheck)}>Ok!</BuyBtn>
        </CheckContainer>
      </Fade>
    </>
  )
}

export default Check
