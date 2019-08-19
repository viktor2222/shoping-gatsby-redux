import React from 'react'
import { inject, observer } from 'mobx-react'

import { ProductItem } from '../ProductItem/productItem'
import { ContainerList } from './styled'
import { Container } from '../../../styles'
import { ProductData } from '../../../stores/features'

export const ProductList = inject('cartStore')(observer(({ cartStore }) => (
  <Container>
    <ContainerList>
      {ProductData.map(item => (
        <ProductItem
          key={item.id}
          {...item}
          addToCart={x => cartStore.addTodoCart(x)}
        />
      ))}
    </ContainerList>
  </Container>
)))
