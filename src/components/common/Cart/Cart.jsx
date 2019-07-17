import React from 'react'
import { CustomModal } from '..'

import { BuyBtn } from '../../../styles'
import {
  CartList, CartImg, ItemList, SumCount,
} from './styled'

export const Cart = () => (
  <>
    <CustomModal isOpen>
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
    </CustomModal>
  </>
)
