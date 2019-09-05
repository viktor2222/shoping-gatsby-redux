import React from 'react'
import { inject, observer } from 'mobx-react'

import { ProductItem } from '../ProductItem/productItem'
import { ContainerList } from './styled'
import { Container } from '../../../styles'
import { ProductData } from '../../../stores/features'

export const ProductList = inject('cartStore', 'productStore')(
  observer(({ cartStore, productStore }) => (
    <Container>
      <ContainerList>
        {ProductData.map(item => (
          <ProductItem
            key={item.id}
            {...item}
            addToCart={() => cartStore.addTodoCart(item)}
            onMouseEnter={() => productStore.cartMouseEnter(item.id)}
            onMouseLeave={() => productStore.cartMouseLeave(item.id)}
          />
        ))}
      </ContainerList>
    </Container>
  )),
)
