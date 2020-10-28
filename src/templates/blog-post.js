import React from 'react'
import Layout from '../components/layout'

const BlogPost = ({pageContext}) => {     
    const {blogPost} = pageContext
    console.log(blogPost)
    return(
        <Layout>
            <h1>{blogPost.title}</h1>
            <h2>{blogPost.publishedDate}</h2>            
        </Layout>
    )

}

export default BlogPost