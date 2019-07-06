# Lynx
This is a personal project I have started to explore how semantic web technologies can be integrated in a web application using current web technologies.

## Current status
It is still in its very early experimental phases.

Currently, it consists of a single React component that is rendered on the server, based on data stored as [JSON-LD](https://w3c.github.io/json-ld-syntax/) (a JSON-based format to serialize Linked Data).

The rendered component is then sent to the client as an HTML-page. The linked data is included in the `head` of the page, inside of a script-tag. This is a wide-spread technique to make the data available to web crawlers.

On the client, the component is brought to life by retrieving the data from the `head` and injecting it into the React component.

----

The main advantages of this approach are these:
 1. Since the application is rendered serverside, web crawlers get a complete page immediately. They do not have to wait until the user interface has been built up from scratch by the browser.
 2. Linked data acts as the single source of truth. No need to derive it from another source like other data formats, or worse: from the raw HTML itself.
 3. On the client you get a full-fledged React application, with all the advantages of client-side rendering.

## Plans for the future
 - Add Redux to the stack (see [issue #1](https://github.com/hansjovis/lynx/issues/1)).
    - With Redux we can make a single linked data graph the core of the client-side application.
 - Devise a way to abstract away from RDFa-tags. There is still a lot of boilerplate involved to add them to the HTML. E.g.:
    ```html
    <h1 property="name">{props.name}</h1> 
    ```
