import React, { useCallback } from 'react'
import { inject, observer } from 'mobx-react'

import { ProductItem } from '../ProductItem/productItem'
import { ContainerList } from './styled'
import { Container } from '../../../styles'
import { ProductData } from '../../../stores/features'

const ProductListComponent = ({ cartStore, productStore }) => {
  const addTodoCart = useCallback(
    (item) => {
      cartStore.addTodoCart(item)
    },
    [],
  )
  const cartMouseEnter = useCallback(
    (id) => {
      productStore.cartMouseEnter(id)
    },
    [],
  )
  const cartMouseLeave = useCallback(
    (id) => {
      productStore.cartMouseLeave(id)
    },
    [],
  )
  return (
    <Container>
      <ContainerList>
        {ProductData.map(item => (
          <ProductItem
            key={item.id}
            {...item}
            addToCart={addTodoCart}
            onMouseEnter={cartMouseEnter}
            onMouseLeave={cartMouseLeave}
          />
        ))}
      </ContainerList>
    </Container>
  )
}

export const ProductList = inject(stores => ({
  cartStore: stores.cartStore,
  productStore: stores.productStore,
}))(
  observer(ProductListComponent),
)
