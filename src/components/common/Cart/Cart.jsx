import React from 'react'
import { CustomModal } from '..'

import { BuyBtn } from '../../../styles'
import {
  CartList, CartImg, ItemList, SumCount,
} from './styled'

export const Cart = () => (
  <>
    <CustomModal>
      <CartList>
        <ItemList>
          <CartImg src='./cart/activiafin.png' alt='product item' />
          <span>activia</span>
          <span>$5</span>
        </ItemList>
        <ItemList>
          <CartImg src='./cart/blueberry.png' alt='product item' />
          <span>danone</span>
          <span>$10</span>
        </ItemList>
        <ItemList>
          <CartImg src='./cart/buttermilk.png' alt='product item' />
          <span>activia</span>
          <span>$25</span>
        </ItemList>
        <ItemList>
          <CartImg src='./cart/L&F.png' alt='product item' />
          <span>activia</span>
          <span>$25</span>
        </ItemList>
        <ItemList>
          <CartImg src='./cart/MMMH.png' alt='product item' />
          <span>activia</span>
          <span>$25</span>
        </ItemList>
        <ItemList>
          <CartImg src='./cart/vanilla_fruit.png' alt='product item' />
          <span>activia</span>
          <span>$25</span>
        </ItemList>
        <ItemList>
          <CartImg src='./cart/blueberry.png' alt='product item' />
          <span>activia</span>
          <span>$25</span>
        </ItemList>
        <ItemList>
          <CartImg src='./cart/buttermilk.png' alt='product item' />
          <span>activia</span>
          <span>$25</span>
        </ItemList>
        <SumCount>Total: $40</SumCount>
        <BuyBtn onClick={() => setOpenCheck(!openCheck)} type='button'>Buy</BuyBtn>
      </CartList>
    </CustomModal>
  </>
)
