import React, { useCallback } from 'react'
import { inject, observer } from 'mobx-react'
import { Fade } from 'react-reveal'
import { CustomModal } from '..'
import { CartProductItem } from '../CartProductItem/cartProductItem'
import { BuyBtn } from '../../../styles'
import { SumCount, CloseButton } from './styled'

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
    overflow: 'hidden',
    transform: 'translateY(-50%)',
  },
}

const CartComponent = ({ cartStore }) => {
  const buyBtnAction = useCallback(() => {
    cartStore.showCheck();
    cartStore.hideCart()
  }, [])
  const hideCart = useCallback(() => {
    cartStore.hideCart()
  }, [])
  const removeTodoCart = useCallback((id) => {
    cartStore.removeTodoCart(id)
  }, [])
  const addOneProduct = useCallback((price) => {
    cartStore.addOneProduct(price)
  }, [])

  return (
    <CustomModal isOpen={cartStore.isShowCart} cartModal={customStyles}>
      <Fade right cascade>
        <CloseButton onClick={hideCart} />
        {cartStore.productCart.map(i => (
          <CartProductItem
            key={i.id}
            {...i}
            removeWithCart={removeTodoCart}
            addOneProduct={addOneProduct}
          />
        ))}
        <SumCount>
              Total: $
          {cartStore.totalSum}
        </SumCount>
        <BuyBtn
          onClick={buyBtnAction}
          type='button'
        >
              Buy
        </BuyBtn>
      </Fade>
    </CustomModal>
  )
}

export const Cart = inject('cartStore')(observer(CartComponent))
