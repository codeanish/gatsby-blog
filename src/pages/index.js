import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Img from 'gatsby-image';

const Home = () => {

  const image = useStaticQuery(graphql`
    query{
      fileName: file(relativePath: {eq: "images/main-page.jpg"}){
        childImageSharp{
          fluid(maxWidth: 1600){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Home</h1>
      <Img fluid={image.fileName.childImageSharp.fluid} alt="" />      
      <p>Sit quis sint labore ad quis do ullamco et cupidatat magna proident pariatur dolor. Laboris nisi proident sunt cillum sit deserunt ipsum consequat esse culpa enim Lorem eiusmod do. Incididunt labore cillum voluptate dolor est laborum sint nisi ut enim dolore excepteur. In culpa qui Lorem eu nostrud proident enim id id fugiat consequat magna. Ullamco ut cupidatat non excepteur nulla et. Enim veniam elit amet incididunt et elit proident eiusmod labore anim. Laboris laboris exercitation anim veniam mollit proident nostrud fugiat pariatur magna dolor.</p>
      <p>Nulla culpa culpa proident reprehenderit aliqua voluptate enim reprehenderit enim. Eiusmod consectetur dolore anim elit anim tempor amet qui esse et et. Occaecat anim ex officia est ullamco anim fugiat ullamco enim laborum aute aliqua excepteur labore. Labore eu fugiat proident sunt nostrud pariatur sunt sunt duis. Qui quis ea culpa commodo consectetur fugiat aliqua consectetur duis cupidatat et aliqua.</p>
      <p>Ad do excepteur dolor sunt quis. Nostrud sint ipsum aute aliqua est irure amet eu. Culpa aute Lorem labore anim non. Deserunt et minim fugiat sint nisi labore voluptate proident. Minim sunt in sint eiusmod quis.</p>
      <p>Ipsum duis ullamco non proident proident irure proident est ex aute. Amet voluptate ipsum occaecat est magna sit ipsum. Ex dolor culpa duis nisi laboris labore ad commodo cupidatat non quis. In proident incididunt laboris pariatur veniam esse non incididunt in. Velit nostrud id anim reprehenderit eu fugiat adipisicing pariatur nulla laborum fugiat elit ea nostrud.</p>
      <p>Magna ad nostrud voluptate cillum sit laborum non reprehenderit elit ea dolor Lorem esse. Pariatur deserunt consequat velit incididunt et proident excepteur Lorem veniam. Proident officia ut nisi id sint commodo tempor et ipsum. Laborum sit in exercitation dolore. Pariatur sit nulla voluptate Lorem reprehenderit sint.</p>
      <p>Proident mollit id veniam pariatur culpa sunt. Laborum dolor laboris proident nulla dolore eiusmod sint voluptate. Duis nostrud minim occaecat tempor eiusmod culpa ipsum reprehenderit qui minim excepteur qui nisi. Ullamco adipisicing eiusmod laborum laboris est. Irure officia in laboris ipsum non.</p>
      <p>Cillum labore cillum commodo non laborum commodo nisi magna. Eiusmod laboris duis pariatur ea minim anim labore voluptate laborum elit exercitation consequat. Sit duis consectetur Lorem proident quis ad voluptate ex laboris. Minim dolor ullamco ea anim et proident mollit adipisicing anim anim cupidatat. Voluptate nulla aute aliqua id Lorem culpa veniam laboris non aliquip incididunt. Et nostrud sit dolor aliquip veniam ad voluptate.</p>
      <p>Sunt aliqua sint aute pariatur sit voluptate anim adipisicing. Exercitation ipsum qui consectetur ea ut irure do nostrud Lorem officia sunt. Ea laboris consequat nisi est nostrud. Aliquip qui qui id aute ea adipisicing cupidatat in dolore. Ipsum elit sit nisi labore non officia do ad. Deserunt tempor ex ut nisi minim esse minim enim nulla consequat.</p>
    </Layout>    
  )
}

export default Home;