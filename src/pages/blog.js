import React from 'react'
import Layout from '../components/layout';
import {useStaticQuery, graphql} from 'gatsby'
import BlogPostCard from '../components/blog-post-card';
import styles from '../pages/blog.module.scss'

const Blog = () => {

    const blogPosts = useStaticQuery(graphql`
        query{
            allContentfulBlogPost(sort: {order: DESC, fields: publishedDate}) {
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
            <ol className={styles.blogPosts}>
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