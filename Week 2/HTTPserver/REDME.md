# Week 2: Learning MERN

## Express Basics

### 1. Express Setup
Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. To set up Express in your project, you can use npm (Node Package Manager) to install it:

```bash
npm install express
```


### 1 HTTP Methods

HTTP methods, also known as verbs, indicate the desired action to be performed on the resource. Express provides support for various HTTP methods such as GET, POST, PUT, DELETE, etc. These methods are used to perform CRUD operations (Create, Read, Update, Delete) in web applications.

Express allows you to define routes that respond to specific HTTP methods. For example:

- **GET:** Used to retrieve data from the server. It is commonly used for fetching resources.
- **POST:** Used to send data to the server to create a new resource.
- **PUT:** Used to update existing data on the server.
- **DELETE:** Used to delete data from the server.

You can define routes for these HTTP methods using Express's routing methods such as `app.get()`, `app.post()`, `app.put()`, and `app.delete()`.

Here's an example of defining routes for different HTTP methods:

```javascript
const express = require('express');
const app = express();

// GET request
app.get('/users', (req, res) => {
    // Logic to retrieve users
    res.send('GET request to retrieve users');
});

// POST request
app.post('/users', (req, res) => {
    // Logic to create a new user
    res.send('POST request to create a new user');
});

// PUT request
app.put('/users/:id', (req, res) => {
    // Logic to update a user with specified ID
    res.send('PUT request to update a user');
});

// DELETE request
app.delete('/users/:id', (req, res) => {
    // Logic to delete a user with specified ID
    res.send('DELETE request to delete a user');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


For a comprehensive guide on HTTP methods in Express, check the [official documentation](https://expressjs.com/en/guide/routing.html).
```
### 3. Query Parameters

Query parameters are key-value pairs sent in the URL of an HTTP request. Express allows you to access these query parameters using the `req.query` object. 

Learn more about handling query parameters in Express from the [official documentation](https://expressjs.com/en/api.html#req.query).


### 4. Status Codes

HTTP status codes indicate the status of the HTTP request made by the client. Express provides methods to set and send appropriate status codes in the response. 

Refer to the [official documentation](https://expressjs.com/en/api.html#res.status) for details on status codes in Express.


### 5. `app.use(express.json())` (Basic Middlewares)

Express middleware functions are functions that have access to the request, response, and the next middleware function in the application's request-response cycle. The `express.json()` middleware is used to parse incoming JSON payloads. 

For more information on middleware and how to use them in Express, visit the [official documentation](https://expressjs.com/en/guide/using-middleware.html).


### 6. `req.params`

`req.params` is an object containing properties mapped to the named route “parameters”. These route parameters are part of the URL path and are captured whenever a matching route is accessed.

Explore more about route parameters in Express in the [official documentation](https://expressjs.com/en/api.html#req.params).
