import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../style/header.css'

const Header = ({ siteTitle }) => (
  <div className = 'navbar'>
    <div className = 'container'>
        <nav>

            <div className = 'nav-brand'>
                <h3>
                    Prabhi
                </h3>
            </div>

            <div className = 'nav-items'>
                <ul id = 'toggle-list'>
                    <li className = 'nav-item'>
                        <Link to = '/' className = 'nav-link'>
                            Home
                        </Link>
                    </li>

                    <li className = 'nav-item'>
                        <Link to = '#work' className = 'nav-link'>
                            Work
                        </Link>
                    </li>

                    <li className = 'nav-item'>
                        <Link to = '/blog' className = 'nav-link'>
                            Blog
                        </Link>
                    </li>

                    <li className = 'nav-item'>
                        <Link to = '/about' className = 'nav-link'>
                            About
                        </Link>
                    </li>

                    <li className = 'nav-item'>
                        <Link to = '#contact' className = 'nav-link'>
                            Contact
                        </Link>
                    </li>

                </ul>
            </div>
            <div className = 'toggle-bar' id = 'toggle'></div>
        </nav>
    </div>
</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
