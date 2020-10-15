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
- Add pages
- Links

We can navigate to pages in the browser by typing the page url into the address bar to see if they have been created.

It would be nice to be able to have some links on the page in order to be able to navigate to the various pages of the website. Can use a standard html <a> tag.
<a> triggers a reload of the site in order to go to a given URL, so Gatsby provides a <Link> component which enables linking to internal pages.