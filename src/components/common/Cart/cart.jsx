import React from 'react'
import { inject, observer } from 'mobx-react'
import { CustomModal } from '..'
import { CartProductItem } from '../CartProductItem/cartProductItem'
import { BuyBtn } from '../../../styles'
import {
  CartList, SumCount,
} from './styled'

export const Cart = inject('cartStore')(observer(({ cartStore }) => (
  <CustomModal isOpen={cartStore.show}>
    <CartList>
      <CartProductItem />
      <SumCount>Total: $40</SumCount>
      <BuyBtn onClick={() => cartStore.hideCart()} type='button'>Buy</BuyBtn>
    </CartList>
  </CustomModal>
)))
