import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"


import ProfileImg from '../images/profile_two.jpeg'
import BusinessYoungstersImg from '../images/by.png'
import ITPic from '../images/it.png'
import TheLib from '../images/thelibrarybar.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className = 'site-header'>
        <div className = 'container'>
            <div className = 'header-content'>
                <div>
                    <div className = 'intro-text'>
                        <div className = 'intro-main-heading animated fadeInDown'>
                            <h1>
                                Hi there, <br />
                                I am Prabhi
                            </h1>
                        </div>
                        <div className = 'intro-main-para'>
                            <p>
                                Web designer with 1+ years of experience. Passionate about creating high quality UI/UX for websites and web applications. 
                            </p>
                        </div>
                    </div>
                    <div className = 'intro-about'>
                        <div className = 'intro-about-container'>
                            <div className = 'intro-about-img animated fadeInRight'>
                                <img src = {ProfileImg} />
                            </div>
                            <div className = 'intro-about-text animated fadeInDown delay-1s'>
                                <p>
                                    Learn more about <br />
                                    me
                                </p>
                                <div className = 'intro-btn'>
                                    <a className = 'into-btn-link' href = '/about'>
                                        About
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className = 'portfolio'>
        <div className = 'container'>
            <div className = 'section-text'>
                <h2>
                    My Work
                </h2>
            </div>
            <div className = 'porfolio-list portfolio-grid' id = 'work'>
                <div className = 'portfolio-card'>
                    <div className = 'portfolio-img wow fadeInLeft'>
                        <img src = {TheLib} alt = 'The library bar homepage' />
                    </div>
                    <div className = 'portfolio-card-txt'>
                        <h3>
                            The Library Bar
                        </h3>
                        <p>
                            A restaurent website for ordering food and getting latest inforamtion about the restaurent and its events.
                        </p>
                        <p>
                            <span>Technology used - </span> React, Firebase
                        </p>
                        <div className = 'btn-div portfolio-btns'>
                            <a href = 'https://github.com/itsprabhi/thelibrarybar'  target="_blank" className = 'work-btn btn-github nav-link'>
                                Github
                            </a>
                            <a href = 'https://thelibrarybar-fe0ca.firebaseapp.com/'  target="_blank" className = 'work-btn btn-website nav-link'>
                                Website
                            </a>
                        </div>
                    </div>
                </div>
                <div className = 'portfolio-card'>
                    <div className = 'portfolio-card-txt'>
                        <h3>
                            Business Youngsters
                        </h3>
                        <p>
                            An amazon affiliate website made for online startup. It has number of features like web scraping for displaying tech news from google news as well as their own.
                        </p>
                        <p>
                            <span>Technology used - </span>HTML, CSS, EJS, Express, MongoDB
                        </p>
                        <div className = 'btn-div portfolio-btns'>
                            <a href = 'https://github.com/itsprabhi/business-youngsters'  target="_blank" className = 'work-btn btn-github nav-link'>
                                Github
                            </a>
                            <a href = 'https://businessyoungsters.herokuapp.com'  target="_blank" className = 'work-btn btn-website nav-link'>
                                Website
                            </a>
                        </div>
                    </div>
                    <div className = 'portfolio-img wow fadeInRight'>
                        <img src = {BusinessYoungstersImg} alt = 'Business youngsters homepage'/>
                    </div>
                </div>
                <div className = 'portfolio-card'>
                    <div className = 'portfolio-img wow fadeInLeft'>
                        <img src = {ITPic} alt = 'Start-uo homepage'/>
                    </div>
                    <div className = 'portfolio-card-txt'>
                        <h3>
                            IT startup
                        </h3>
                        <p>
                            A landing page made for IT startup. It is designed to display the agency's previous projects and stats. This has a new design pattern making it quite minimal looking yet modern. 
                        </p>
                        <p>
                            <span>Technology used - </span>HTML, CSS, JavaScript
                        </p>
                        <div className = 'btn-div portfolio-btns'>
                            <a href = 'https://github.com/itsprabhi/it-startup-ui'  target="_blank" className = 'work-btn btn-github nav-link'>
                                Github
                            </a>
                            <a href = 'https://itsprabhi.github.io/it-startup-ui'  target="_blank" className = 'work-btn btn-website nav-link'>
                                Website
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className = 'contact' id = 'contact'>
        <div className = 'container'>
            <div className = 'section-text contact-section-text'>
                <h2>Contact Me</h2>
            </div>
            <div className = 'contact-content'>
                <div className = 'contact-form'>
                    <form action="mailto:iamprabhie@gmail.com" method="post">
                        <input type = 'text' className = 'input-form' id = 'name' name = 'name' placeholder="enter your name" /><br />
                        <input type = 'email' className = 'input-form' id = 'email' name = 'email' placeholder="enter your email" /><br />
                        <textarea name = 'messege' className = 'input-form text-messege' id = 'messege' placeholder="enter your messege"></textarea><br />
                        <div className = 'btn-div'>
                            <button type="submit" className = 'btn-github work-btn nav-link'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className = 'contact-info'>
                    <div className = 'hire'>
                        <h3>
                            Hire Me!
                        </h3>
                        <p>
                            Want me to work for you and want me to design and create beautiful websites for you. Then hire me! 
                        </p>
                        <div className = 'btn-div'>
                            <a href = '#' className = 'btn-github work-btn nav-link'>
                                Hire Me!
                            </a>
                        </div>
                    </div>
                    <div className = 'social-info'>
                        <h3>
                            Follow me on social
                        </h3>
                        <p>
                            Let's connect with each other on the social networks. Lets be friends :)
                        </p>
                        <div className = 'social-icons btn-div'>
                            <ul>
                            <li className = 'social-item'>
                                <a href = 'mailto:iamprabhie@gmail.com' className = 'social-icon'>
                                <FontAwesomeIcon icon= {faEnvelope} />
                                </a>
                            </li>
                            <li className = 'social-item'>
                                <a href = 'https://www.linkedin.com/in/prabhsharangosal/' className = 'social-icon'>
                                <FontAwesomeIcon icon= {faLinkedin} />
                                </a>
                            </li>
                            <li className = 'social-item'>
                                <a href = 'https://www.twitter.com/itsprabhi' className = 'social-icon'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li className = 'social-item'>
                                <a href = 'https://www.github.com/itsprabhi' className = 'social-icon'>
                                    <FontAwesomeIcon icon= {faGithub} />
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage
