import React from "react"
import { Link } from "gatsby"


import '../style/blog.css'
import Layout from "../components/layout"

import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <div className = 'blog-page'>
      <div className = 'blog-page-heading'>
        <h1>Blog</h1>
      </div>
      <div className = 'blog-page-content'>
        <div class = 'blog-page-grid'>
          {console.log(data)}
          {data.allMarkdownRemark.edges.map(post => (
            <div className = 'blog-card' key={post.node.id}>
              <div className = 'blog-card-img'>
                <img src = {post.node.frontmatter.image} alt = 'blog thumbnail'></img>
              </div>
              <div className = 'blog-card-txt'>
                <h2>
                  {post.node.frontmatter.title}
                </h2>
                <p>
                  Posted by {post.node.frontmatter.author} on{' '} {post.node.frontmatter.date}
                </p>
                <div className = 'blog-link-container'>
                  <Link to={post.node.frontmatter.path} className = 'blog-link'>Read More</Link>
                </div>
              </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            image
          }
        }
      }
    }
  }
`

export default BlogPage
