/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'

import {
  HeaderContainer, ImgCart, CartList, ActiveList, CartCount,
} from './styled'

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <ActiveList onClick={() => setOpen(!open)}>
        <ImgCart src='./cart-icon.png' alt='cart' />
        <CartCount>1</CartCount>
        {open
          && (
          <CartList>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </CartList>
          )
        }
      </ActiveList>

    </HeaderContainer>
  )
}

export default Header
