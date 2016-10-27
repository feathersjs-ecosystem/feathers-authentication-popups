
module.exports = function (app) {
  var cookieConfig = app.get('cookie');
  var cookieName = cookieConfig && cookieConfig.name || 'feathers-jwt';
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
        var token = readCookie('${cookieName}');
        if (token && window.opener) {
          window.opener.authAgent.emit('login', token);
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
