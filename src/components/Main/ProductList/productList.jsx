import React from 'react'

import { ProductItem } from '../ProductItem/productItem'

import { ContainerList } from './styled'
import { Container } from '../../../styles'

export const ProductList = () => (
  <Container>
    <ContainerList>
      <ProductItem />
    </ContainerList>
  </Container>
)
