import React from 'react'
import Layout from '../components/layout';
import styles from './about.module.scss';

const About = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.header}>About me</div>
                <p>Anish Patel loves programming. He loves programming so much that once he mistook a child for a computer. He passed in instructions written in a high level language, very simple things functions like brush_your_teeth() and eat_your_dinner().</p>
                <p>These instructions were ignored. The child threw a runtime exception. Toothpaste was all over the carpet. Food was all over the walls. No logs were written to and no detailed error messages were given.</p>
                <p>He soon learned that the child was not going to be so easily programmed. Perhaps it was not possible to provide instructions, but rather to provide a platform for the child to learn.</p>
                <p>Long story short, Anish Patel is now trying to use a deep learning model to get the child to make the correct decisions. He fears he may have a lack of clean data with which to train his model.</p>
            </div>
        </Layout>
    )
}

export default About;