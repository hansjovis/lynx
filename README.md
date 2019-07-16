# Lynx
This is a personal project I have started to explore how semantic web technologies can be integrated in a web application using current web technologies.

<a href="http://www.w3.org/2001/sw/">
  <img src="https://www.w3.org/Icons/SW/sw-horz.png" alt="W3C Semantic Web Logo"/>
</a>

## Current status
It is still in its very early experimental phases.

Currently, it consists of a React + Redux application that is rendered on the server, based on data stored as [JSON-LD](https://w3c.github.io/json-ld-syntax/) (a JSON-based format to serialize Linked Data).

The rendered React tree is then sent to the client as an HTML-page. The linked data is included in the `head` of the page, inside of a script-tag. This is a wide-spread technique to make the data available to web crawlers.

On the client, the React application is brought to life by retrieving the data from the `head` and injecting it into the Redux store.

----

The main advantages of this approach are these:
 1. Since the application is rendered serverside, web crawlers get a complete page immediately. They do not have to wait until the user interface has been built up from scratch by the browser.
 2. Linked data acts as the single source of truth. No need to derive it from another source like other data formats, or worse: from the raw HTML itself.
 3. On the client you get a full-fledged React application, with all the advantages of client-side rendering.

## Building and Development

### Building source files
 - `yarn build` builds the source files (alias for `yarn build:server && yarn build:client`).
 - `yarn build:server` builds the server files only.
 - `yarn build:client` builds the client files only.

### Running the application
 - `yarn start` runs the application.

## Changelog
### 2019-07-06
 - ✅ Added Redux to the stack.
 
## Plans for the future
 - Add a login capability to start working on the admin side.

