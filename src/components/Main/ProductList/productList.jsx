import React from 'react'

import { ProductItem } from '../ProductItem/productItem'

import { ContainerList } from './styled'
import { Container } from '../../../styles'
import { ProductData } from '../../../stores/features'

export const ProductList = () => (
  <Container>
    <ContainerList>
      {ProductData.map(item => (
        <ProductItem
          key={item.id}
          item={item}
        />
      ))}
    </ContainerList>
  </Container>
)
