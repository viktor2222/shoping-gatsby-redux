import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '../components/common/Layout/layout'
import { SEO } from '../components/common/Seo/seo'
import { ProductList } from '../components/Main'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <ProductList />
    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage
