import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Img from 'gatsby-image';

const Home = () => {

  const image = useStaticQuery(graphql`
    query{
      mainImage: file(relativePath: {eq: "images/main-page.jpg"}){
        childImageSharp{
          fluid(maxWidth: 1920, quality: 100){
            ...GatsbyImageSharpFluid            
          }
        }
      }
    }
  `)

  return (
    <Layout>      
      <Img fluid={image.mainImage.childImageSharp.fluid} alt="" />
    </Layout>    
  )
}

export default Home;