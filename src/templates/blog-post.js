import React from 'react'
import Layout from '../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS} from '@contentful/rich-text-types'

const BlogPost = ({pageContext}) => {     
    const {blogPost} = pageContext
    
    const options = {
        renderNode:{
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const url = node.data.target.fields.file['en-US'].url
                const alt = node.data.target.fields.title['en-US']
                return <img src={url} alt={alt}/>
            }
        }
    }

    return(
        <Layout>
            <div style={{maxWidth:'800px'}}>
                <h1>{blogPost.title}</h1>
                <h2>{blogPost.publishedDate}</h2>
                {documentToReactComponents(blogPost.body.json, options)}
            </div>
        </Layout>
    )

}

export default BlogPost