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

## Lesson 6

### Creating blog posts in Contentful

In Contentful do the following
* Create an account
* Create an empty space
* Define a content model
```
    Title - Short Text
    Slug - Short Text
    Published Date - Date & Time
    Body - Rich Text
```
Create a few blog posts

### Configure our app to use contentful

First install the gatsby contentful plugin.

```npm install gatsby-source-contentful```

Then add to the gatsby config (spotting a pattern here?). We're going to need to pass a couple of options here, your space id and access token which we'll get from Contentful.

### Install env-cmd
We're going to install env-cmd so that we can read environment variables from an .env file as opposed to writing them in the gatsby-config.js. You weren't really going to check in your Access token and space ID to Github were you?
Modify our npm run commands in the package.json so that we push the env files into the develop and build commands using the following syntax:

```env-cmd -f .env gatsby develop```

### List out blog posts in the blog page

Modify the blog.js page to use the graphql query needed to get all the blog posts. Then display out the blog posts returned by our GraphQL query. Check that the blog post titles are all displayed. Clicking them brings up a 404 page... this is because these pages don't exist yet. We could create each one of them manually, but that would be crazy. In the next lesson, we're going to create pages for each of the blog posts automatically.

## Lesson 7

### Generating individual blog post pages

* Create a blog post template
* Utilise the Gatsby Node API createPages to create a page for each blog post

For the blog post template, we're going to want the Title, Published Date for now. Write the graphql query in the same fashion we've done a couple of times now and then return the template component displaying the data in a layout component.

Create gatsby-node.js in the root of the project. In here we're using the gatsby node api, so we start with some syntax that is required in order to use the API, that is to create the exports.createPages async function which takes as arguments graphql and actions. The action we're interested in is createPage and we'll use graphql to query all our contentful blog posts.

With each blog post, we're going to call the createPage action, passing in the component that we want to use as a template, in our case the one we just created, the path that this particular blog post is going to be at (we're using the slug here) and something called context which is basically some props we're passing to our template component. Naming is critical here as we'll have to tie it up to the template component. 

In the blog post template component, note that we're expecting a pageContext prop which we're going to destructure and pull out blogPost so we get access to the fields of the blog post like title and published date.

Having a click around, we can see we've generated blog posts at the appropriate URLs and also pulling the appropriate data into these blog posts.

In the next lesson, we're going to be pulling the remainder of the blog post content in using the Contentful Rich Text Renderer.

## Lesson 8

### Contentful rich-text-react-renderer

Looking at the blog post body that we're getting back from Contentful, it's clear that we're not getting some simple text or HTML that we can just inject into our template. We're instead getting a json payload which contains various nodes and some data about what those nodes are as well as the data contained within those nodes. Fortunately, contentful have provided us with a React renderer to help us render rich text out to a React App without worrying about parsing out all the Json and writing our own renderer. The repo is hosted here:

https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer

You can see to install it, you're just going to use ```npm install @contentful/rich-text-react-renderer```

This isn't a gatsby specific plugin, so no need to worry about gatsby config. Now go into the blog post template and import the function documentToReactComponents from @contentful/rich-text-react-renderer.

Once you've done that, just simply call that function within our return block and pass in the blog post json. Check it out in the UI and awesome, it's working. One thing is missing, we've not got any images showing up in our blog posts. It's in our Json, but it's not coming through to the rich-text-react-renderer

## Lesson 9

* Deploying to Netlify

Create an account on Netlify
Authorize Netlify to access your github account
Select your repository containing your gatsby site
Click advanced Build Settings, here you want to add some variables - these are the same ones we had in our .env file - we need to add our Contentful space id and our access token.
You can then see your Gatsby website deployed up to netlify.

Make a change to the app, check it in and merge it into Main. We should be able to see the changes up in Netlify within a couple of minutes.

In the next lesson, we'll investigate what we need to do to ensure that any changes in contentful trigger a new build and deployment as well.

## Lesson 10

* Automate the build & deploy on contentful changes