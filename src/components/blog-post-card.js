import { Link } from 'gatsby'
import React from 'react'

const BlogPostCard = ({slug, title, publishedDate}) => {
    return(
        <div>
            <Link to = {`/blog/${slug}`}><h2>{title}</h2></Link>
            <p>{publishedDate}</p>
        </div>
    )
}

export default BlogPostCard