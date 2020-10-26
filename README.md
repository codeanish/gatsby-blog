# gatsby-blog

## Lesson 1
* Install NodeJS
* Install Gatsby
* Hello Gatsby
* Project directory structure

```gatsby new app https://github.com/gatsbyjs/gatsby-starter-hello-world```

The relevent files/folders in the project directory are:

```
app
|   gatsby-config.js
|   package-lock.json
|   package.json
|---src
|   |---pages
|   |   |   index.js
```

Components in the pages directory must be react 'components' and will automatically generate URL's mapped to the file name e.g. src/pages/index.js becomes mysite.com and src/pages/contact.js becomes mysite.com/contact.

gatsby-config.js is a very important file in Gatsby. It defines your sites metadata, plugins and other configuration. We'll be adding to this file as we build up the website.

package.json and the corresponding package-lock.json are responsible for defining dependencies and packages that have been installed in the workspace.

## Lesson 2
* Add pages
* Links

We can navigate to pages in the browser by typing the page url into the address bar to see if they have been created.

It would be nice to be able to have some links on the page in order to be able to navigate to the various pages of the website. Can use a standard html <a> tag.
<a> triggers a reload of the site in order to go to a given URL, so Gatsby provides a <Link> component which enables linking to internal pages.

## Lesson 3
* Components
* Navigation

Gatsby uses React components which encourage modularity and allow us to reuse components. A great example of this is something like a Navigation Bar, we need it visible on every single page of the site.
Creating two components, a Nav component to hold the Nav bar and a Layout component to wrap the page contents in so that a Nav Bar is automatically included in every page.

A React component is effectively a javascript function that accepts a single "props" object argument and returns a React element. 

Props consist of any JSX attributes passed down to the function as well as any "children" elements. Children elements are what are contained between the component tags. JSX attributes are named key value pairs passed to the component.

``` <Link to="/blog"><h1>BLOG</h1></Link>```

In the example above, Link is a component, to is an attribute being passed to the component and ```<h1>BLOG</h1>``` is the "children" of this component.

Using this concept, we can create a layout component which takes children as the content of each page and it renders the child elements where specified in the layout.

To make props easier to read and understand what we're passing down to components, we can "destructure" them -> this effectively allows us to assign variables to elements of props so we can drop the props. syntax. 

## Lesson 4
* Introduction to Sass/SCSS
* Gatsby Plugins installation and configuration
* Global styling for our site

We can use ordinary CSS, but I find SCSS a lot more friendly to use. This isn't a course about SCSS or CSS for that matter, but we need a basic understanding of it before we are able to style and layout our site.
CSS sits on top of the HTML pages and defines the design for each element on the page like the font, the colour, the background etc. SCSS requires compilation that happens as part of the build process of your gatsby site, 
and it compiles down to CSS anyway, so en effect they achieve the same ends, we're just better able to use other things which aren't present in CSS like variables and logical operations.

1. Install gatsby-plugin-sass https://www.gatsbyjs.com/plugins/gatsby-plugin-sass
2. Add gatsby-plugin-sass to gatsby-config.js

Create a global.scss which we'll use to define global styles for the entire site. Lets be really basic with how we're going to utilise global style rules and we can add to this as and when we decide we want to add more globally scoped styles. 

Create a variables.scss which we'll use to store variables that we wish to use throughout the site. I find this particularly useful for colours and sizes.

Define a layout style in layout.module.scss. Use flexbox and define the layout component and I'm going to provide a content wrapper around the page contents. We're using a technique here called CSS modules which allow us to locally scope class names. The cool thing here is say a ```<h1>``` tag is mormally 20px tall, we can define a style for just a given component by using css modules and specifying the height as 24px tall without affecting any other ```<h1>``` tags throughout.

Defining a style module for the navbar. In this css module, we're defining a lot more styles, but this is purely a personal preference based on how you're designing your navbar and how you want it to look and behave. I've used flexbox with a flow of row wrap for the navbar so as the screen size shrinks, the row items start stacking on top of one another. This is the first part of making this responsive, but we'll revisit it a bit later how to make this properly responsive with hidden menu items and a hamburger menu when the screen size is small.

## Lesson 5
* Introduction to Images in Gatsby

Gatsby has a fairly standardised way of dealing with images, it uses a few plugins to be able to automatically generate images of different sizes for you so that your site looks great on many different screen resolutions, whether someone is using a large 4k monitor or browsing your website on a small smart phone, Gatsby has you covered. The general way to access images is to do the following:

1. Use GraphQL to access the image
2. Display them with a Gatsby Image component

Lets get started by installing the following 4 plugins:

1. gatsby-image ```npm install gatsby-image```
2. gatsby-source-filessytem ```npm install gatsby-source-filesystem```
3. gatsby-plugin-sharp ```npm install gatsby-plugin-sharp```
4. gatsby-transformer-sharp ```npm install gatsby-transformer-sharp```

Add plugins 2-4 to gatsby-config.js

Pick up a photo for your homepage - use one of your own, or grab one here on https://unsplash.com/. Pop it in the /src/images folder.

Use graphql to find your image and pass it some graphql query fragments to select the apprpriate data that needs to be passed to gatsby-image in order to be able to generate the appropriate images for display.

Using a react hook called useStaticQuery that takes a graphql query and returns your data. We're glossing over the magic that happens here, but effectively, when wrapping our graphql query in the useStaticQuery hook, gatsby parses and executes the queries within useStaticQuery at build time, so that the data is available for use in your application.

There are two types of images in the gatsby-image library, fixed and fluid images. They are what they sound like, fixed images are of fixed pixel sizes and fluid images auto scale smaller and bigger depending on the screen size and resolution that it's being viewed at. For our purposes, we're going to use fluid images. Gatsby automatically generates images of different sizes and determines the behaviour of those images as they scale up and down. Gatsby automatically creates responsive images for 1x, 1.5x and 2x the pixel densities specified. The appropriate image is used based on media queries.

Try experimenting with some of the properties of fluid (maxWidth & quality). What effect does quality and max width have?