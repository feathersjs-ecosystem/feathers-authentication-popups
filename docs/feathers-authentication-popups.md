@module authentication-popups
@description Implement popup-based authentication flows with server and client utilities.
@parent can-ecosystem
@group authentication-popups.client 0 client
@group authentication-popups.server 1 server
@package ../package.json

@body

## Use

When implementing an OAuth login workflow with the bundled utilities, the general steps are as follows:

1. The `[authentication-popups.openLoginPopup]` function is used (eg. attached to a user action like a button click) to open a popup window with the OAuth provider's authorization form (eg. Facebook's login window).  This also sets up the [authentication-popups.authAgent] object used in the next step.  Here's an example of importing and using the `[authentication-popups.openLoginPopup]` function in a component. 
```js
var Component = require('can-component');
var DefineMap = require('can-define/map/');
var openLoginPopup = require('authentication-popups');

var ViewModel = DefineMap.extend({
  openLoginPopup,
});

Component.extend({
  tag: 'github-login-button',
  ViewModel,
  template
});
```

```hbs
<button ($click)="openLoginPopup('/auth/github')">Login with GitHub</button>
```

2. A handler function is setup on the [authentication-popups.authAgent]'s `login` event using the [authentication-popups.authAgent.static.on] or [authentication-popups.authAgent.static.once] method. This awaits receipt of login-related data from the popup window.

```js
require('feathers-authentication-popups');

window.authAgent.on('login', function (authData) {
  // handle the authData
});
```

3. The user authorizes the action on the OAuth provider's page.
4. The OAuth provider redirects the popup window back to a URL that has been preregistered as a "success redirect" URL.
5. A server "middleware" function creates a cookie containing authorization data. This middleware is not bundled with `authentication-popups`, but would be come with an authentication module such as [PassportJS](http://passportjs.org/) or the [feathers-authentication](https://github.com/feathersjs/feathers-authentication) plugin for [FeathersJS](http://feathersjs.com).
6. The included [authentication-popups.express] middleware sends the cookie and some basic HTML to the popup window.  Here's a simplified example of using the middleware in an Express server:

```js
var express = require('express');
var successHandler = require('authentication-popups/express');
var app = express();

// Your PassportJS or other authentication middleware would go here.

app.use('/auth/success', successHandler('cookie-name'));
```

7. The script sent by the [authentication-popups.express] middleware then
   - pulls the data from the cookie
   - [authentication-popups.authAgent.static.emit]s the data on the `login` event to the main window's [authentication-popups.authAgent authAgent].
   - closes the popup window.
8. The event handler created in step 2, above, receives the raw data from the cookie, allowing the application to respond as needed.
