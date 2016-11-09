
module.exports = function (options) {
  var cookieName = typeof options === 'string' ? options : options.name;
  if (!cookieName) {
    throw new Error('You must provide a cookie name {String} or an object with a `name` property to the feathers-authentication-popups middleware.');
  }
  var template = `<html>
    <head>
      <script>
        function readCookie(name) {
          var nameEQ = name + "=";
          var ca = document.cookie.split(';');
          for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
              c = c.substring(1,c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
              return c.substring(nameEQ.length,c.length);
            }
          }
          return null;
        }
        var cookieContents = readCookie('${cookieName}');
        if (cookieContents && window.opener) {
          window.opener.authAgent.emit('login', cookieContents);
          window.close();
        }
      </script>
    </head>
    <body></body>
  </html>`;

  return function (req, res) {
    res.send(template);
  };
};
