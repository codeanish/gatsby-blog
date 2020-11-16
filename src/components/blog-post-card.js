import { Link } from 'gatsby'
import React from 'react'
import styles from '../components/blog-post-card.module.scss'

const BlogPostCard = ({slug, title, publishedDate}) => {
    return(
        
            <Link to = {`/blog/${slug}`}>
                <div className={styles.card}>
                    <h2>{title}</h2>
                    <p>{publishedDate}</p>
                </div>
            </Link>
            
    )
}

export default BlogPostCard