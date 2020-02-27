import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Profile from '../images/profile_two.jpeg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className = 'about-page'>
                <div className = 'container'>
                    <div className = 'about-page-content'>
                        <div className = 'about-page-img'>
                            <img src = {Profile} alt="my pic" />
                        </div>
                        <div className = 'about-page-txt'>
                            <h1>
                                About me
                            </h1>
                            <p>
                                Hi, I am a web designer and a current student studying Advertising and Marketing Communications at Georgian College in Barrie, Ontario, Canada.
                            </p> 
                            <p>
                                My core competencies are HTML, CSS, JavaScript, React, Photoshop and Adobe XD. The work I provide is of high quality and is fully responsive.
                            </p>
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
  </Layout>
)

export default AboutPage
