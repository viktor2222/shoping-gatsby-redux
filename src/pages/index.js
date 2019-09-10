import React from 'react'

import { Provider } from 'mobx-react'

import { Layout } from '../components/common/Layout/layout'
import { SEO } from '../components/common/Seo/seo'
import { ProductList } from '../components/Main'

import { ProductStore, CartStore } from '../stores'

const stores = { cartStore: new CartStore(), productStore: new ProductStore() }

const IndexPage = () => (
  <Provider {...stores}>
    <Layout>
      <SEO title='Home' />
      <ProductList />
    </Layout>
  </Provider>
)

export default IndexPage
