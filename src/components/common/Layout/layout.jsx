import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { Global } from '../../../styles'
import { Header } from '../Header/header'

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
          ©
        {' '}
        {new Date().getFullYear()}
, Built with
        {' '}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
