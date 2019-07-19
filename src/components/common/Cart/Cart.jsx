import React from 'react'
import { inject, observer } from 'mobx-react'
import { CustomModal } from '..'

import { BuyBtn } from '../../../styles'
import {
  CartList, CartImg, ItemList, SumCount,
} from './styled'

export const Cart = inject('cartStore')(observer(({ cartStore }) => (
  <>
    {console.log(cartStore.toggleCart)}
    <CustomModal isOpen={cartStore.toggleCart}>
      <CartList>
        <ItemList>
          <CartImg src='./cart/activiafin.png' alt='product item' />
          <span>{cartStore.text}</span>
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
        <BuyBtn onClick={() => cartStore.isHide} type='button'>Buy</BuyBtn>
      </CartList>
    </CustomModal>
  </>
)))
