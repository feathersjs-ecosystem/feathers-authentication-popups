@function authentication-popups.openLoginPopup openLoginPopup
@parent authentication-popups.client
@description Open a centered popup window.

@signature `openLoginPopup(url, options)`

Open a centered popup window at the provided `url`.

```js
import openLoginPopup from 'authentication-popups';

openLoginPopup('/auth/github');
```

@param {String} url The URL for the new window.
@param {Object} options Allows changing the `width` and `height` of the popup window.
@option [width=1024] The popup window width in pixels.
@option [height=630] The popup window height in pixels.

@body