exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const response = await graphql(`
        query{ 
            allContentfulBlogPost {
                edges {
                  node {
                    slug
                    title
                    publishedDate (formatString: "MMMM do, YYYY")
                    body{
                        json
                    }
                  }
                }
            }
        }
    `)

    response.data.allContentfulBlogPost.edges.forEach((edge) => {        
        createPage({
            component: require.resolve('./src/templates/blog-post.js'),
            path: `blog/${edge.node.slug}`,
            context: {                
                blogPost: edge.node
            }
        })
    })
}