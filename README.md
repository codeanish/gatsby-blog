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