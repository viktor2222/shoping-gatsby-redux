import React from 'react'
import { inject, observer } from 'mobx-react'
import { CustomModal } from '..'
import { CartProductItem } from '../CartProductItem/cartProductItem'
import { BuyBtn } from '../../../styles'
import {
  SumCount, CloseButton,
} from './styled'

export const Cart = inject('cartStore')(observer(({ cartStore }) => (
  <CustomModal
    isOpen={cartStore.show}
  >
    <CloseButton onClick={() => cartStore.hideCart()} />
    <CartProductItem />
    <SumCount>Total: $40</SumCount>
    <BuyBtn onClick={() => cartStore.hideCart()} type='button'>Buy</BuyBtn>
  </CustomModal>
)))
