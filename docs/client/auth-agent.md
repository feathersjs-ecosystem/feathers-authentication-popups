@module {EventEmitter} window.authAgent
@parent authentication-popups.client
@group authentication-popups.authAgent.static static
@description Enable observable messages from other windows.

@type {EventEmitter}

`window.authAgent` is an [EventEmitter](https://nodejs.org/api/events.html) that allows popup windows to send information back to the main window.  It has four useful methods:

 - [authentication-popups.authAgent.static.on] registers a function to run when an event is emitted. 
 - [authentication-popups.authAgent.static.once] is like [authentication-popups.authAgent.static.on], but only runs the function once.
 - [authentication-popups.authAgent.static.off] deregisters a function from an event.
 - [authentication-popups.authAgent.static.emit] triggers an event, which runs all of its registered functions.

@body

## Use in the primary application window

```js
// Adds 
import 'authentication-popups';

function doSomethingWithToken (token) {
	// Do something with the token
}

window.authAgent.on('login', doSomethingWithToken);
```
The `doSomethingWithToken` function will run when the 'login' event is emitted on `window.authAgent`. The next section shows how to use it from a popup window.

## Use in the popup window
Due to browser security features, both windows must be on the same domain.

```js
var cookieContents = readCookie('feathers-jwt');

// Trigger the 'login' event on the primary window's `authAgent`
window.opener.authAgent.emit('login', cookieContents);
```