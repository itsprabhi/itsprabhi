import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import '../style/blog.css'
export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <Layout>
      <div class = 'blog-post'>
      <div class = 'post-thumbnail'>
        <h1>{post.frontmatter.title}</h1>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <img src = {post.frontmatter.image}></img>
      </div>
      <div className = 'post-txt'>
        
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      </div>
      </Layout> 
    </div>
    
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        image
      }
    }
  }
`
