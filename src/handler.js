import openLoginPopup from './feathers-authentication-popups';

// Allows simple registration as an event handler. ie. onClick={openLoginPopup(url)}
export default function (url) {
  return function (event) {
    event.preventDefault();
    return openLoginPopup(url);
  };
}
