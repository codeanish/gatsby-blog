import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Img from 'gatsby-image';
import styles from '../pages/index.module.scss'

const Home = () => {

  const image = useStaticQuery(graphql`
    query{
      mainImage: file(relativePath: {eq: "images/main-page.jpg"}){
        childImageSharp{
          fixed{
            ...GatsbyImageSharpFixed            
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={styles.container}>
        <Img style={{borderRadius: '50%'}} fixed={image.mainImage.childImageSharp.fixed} alt="" />
        <div className={styles.header}>Anish Patel</div>
        <div className={styles.subHeader}>SELECT * FROM priorities ORDER BY importance DESC: Father. Husband. Coder. Maker. Creator.</div>
      </div>
    </Layout>    
  )
}

export default Home;