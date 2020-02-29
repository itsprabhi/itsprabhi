import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from 'react'
import '../style/header.css'



export class Header extends Component {
    state = {
        onOff:true
    }
    
    
    changeSwitch = () => {
       
        if(this.state.onOff){
           this.setState({
               onOff:false
           })
        }else{
            this.setState({
                onOff:true
            })
        }
    }

    render() {
        let switchList = this.state.onOff ? 'toggle-nav-close' : 'toggle-nav'
        let toggle = this.state.onOff ? 'toggle-bar' : 'toggle-on'
        return (
            <div>
                <div className = 'navbar'>
                    <div className = 'container'>
                        <nav>

                            <div className = 'nav-brand'>
                                <h3>
                                    Prabhi
                                </h3>
                            </div>

                            <div className = 'nav-items'>
                                <ul id = 'toggle-list' className = {switchList}>
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
                            <div className = {toggle} id = 'toggle' onClick = {this.changeSwitch}></div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}




Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Prabhi`,
}

export default Header
