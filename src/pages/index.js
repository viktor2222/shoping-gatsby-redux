import React from 'react'
import { Link } from 'gatsby'

// import { Provider } from 'mobx-react'
import { Layout } from '../components/common/Layout/layout'
import { SEO } from '../components/common/Seo/seo'
import { ProductList } from '../components/Main'

import CartStore from '../stores/cart-store'

const cartStore = new CartStore()

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />

    <ProductList store={cartStore} />

    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage

cartStore.text = 'sasassas'
