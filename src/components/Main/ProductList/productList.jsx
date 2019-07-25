import React from 'react'

import { ProductItem } from '../ProductItem/productItem'

import { ContainerList } from './styled'
import { Container } from '../../../styles'
import { ProductData } from '../../../stores/features'

export const ProductList = () => (
  <Container>
    <ContainerList>
      {ProductData.map(({
        id, title, description, img, price,
      }) => (
        <ProductItem
          key={id}
          title={title}
          description={description}
          img={img}
          price={price}
        />
      ))}
    </ContainerList>
  </Container>
)
