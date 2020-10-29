import React from 'react'
import Layout from '../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

const BlogPost = ({pageContext}) => {     
    const {blogPost} = pageContext
    
    return(
        <Layout>
            <h1>{blogPost.title}</h1>
            <h2>{blogPost.publishedDate}</h2>
            {documentToReactComponents(blogPost.body.json)}
        </Layout>
    )

}

export default BlogPost