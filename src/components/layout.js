/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
        <div className = 'footer-items'>
                <div className = 'footer-info-section'>
                    <h3>
                        Prabhi
                    </h3>
                    <p>
                        A portfolio site made with passion to display my talent with people around the world.
                    </p>
                    <div className = 'footer-menu'>
                        <ul className = 'footer-menu-list'>
                            <li className = ' nav-item nav-item-footer'>
                                <a href = '#' className = 'nav-link'>
                                    Home
                                </a>
                            </li>
                            <li className = ' nav-item nav-item-footer'>
                                <a href = '#work' className = ' nav-link'>
                                    Work
                                </a>
                            </li>
                            <li className = ' nav-item nav-item-footer'>
                                <a href = '/blog' className = ' nav-link'>
                                    Blog
                                </a>
                            </li>
                            <li className = ' nav-item nav-item-footer'>
                                <a href = '/about' className = 'nav-link'>
                                    About
                                </a>
                            </li>
                            <li className = ' nav-item nav-item-footer'>
                                <a href = '#contact' className = 'nav-link'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className = 'social-icons btn-div footer-social-links' >
                    <ul>
                  
                    </ul>
                </div>
            </div>
            <div className = 'copyright-restriction'>
                <p>All rights reserved @2020. Prabhi</p>
            </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
