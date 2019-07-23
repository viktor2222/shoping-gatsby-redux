import React from 'react'
import { inject, observer } from 'mobx-react'
import { CustomModal } from '..'
import { CartProductItem } from '../CartProductItem/cartProductItem'
import { BuyBtn } from '../../../styles'
import {
  SumCount, CloseButton,
} from './styled'

const customStyles = {
  content: {
    top: '50%',
    left: 'auto',
    right: '0',
    bottom: 'auto',
    height: '100vh',
    borderRadius: 'none',
    maxWidth: '350px',
    width: '100%',
    transform: 'translateY(-50%)',
  },
}

export const Cart = inject('cartStore')(observer(({ cartStore }) => (
  <CustomModal
    isOpen={cartStore.show}
    cartModal={customStyles}
  >
    <CloseButton onClick={() => cartStore.hideCart()} />
    <CartProductItem />
    <SumCount>Total: $40</SumCount>
    <BuyBtn onClick={() => cartStore.hideCart()} type='button'>Buy</BuyBtn>
  </CustomModal>
)))
