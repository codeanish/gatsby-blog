import React from 'react'
import Layout from '../components/layout';
import {useStaticQuery, graphql} from 'gatsby'
import BlogPostCard from '../components/blog-post-card';

const Blog = () => {

    const blogPosts = useStaticQuery(graphql`
        query{
            allContentfulBlogPost {
                edges {
                  node {
                    title
                    publishedDate(formatString: "MMMM do, YYYY")
                    slug
                  }
                }
              }
        }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {blogPosts.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li key={edge.node.slug}><BlogPostCard title={edge.node.title} slug={edge.node.slug} publishedDate={edge.node.publishedDate}/></li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Blog;