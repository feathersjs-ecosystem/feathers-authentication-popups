@function {ExpressMiddleware} authentication-popups.express ./express
@parent authentication-popups.server
@description Express middleware for handling successful OAuth logins.

@signature `successHandler(options|cookieName)`

Creates Express middleware that handles successful auth by returning an HTML page that:
* Pulls the data from a provided `cookieName`.
* Sends the data to the parent window through the `authAgent`.
* Closes the popup window.

```js
const successHandler = require('authentication-popups/express');

app.get('/auth/success', successHandler('feathers-jwt'));
// or pull from your app config variables.
app.get('/auth/success', successHandler( app.get('cookie') ));
```

@param {Object} options An object with a `name` property containingthe cookie name.
@option {String} name The cookie name. 
@param {String} cookieName The name of the cookie location.
