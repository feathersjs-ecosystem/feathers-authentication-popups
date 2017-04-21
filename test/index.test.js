import { expect } from 'chai';
import openLoginPopup, {authAgent, getCenterCoordinates} from '../src/feathers-authentication-popups';
import clickHandler from '../src/handler';
import EventEmitter from 'events';

var oldWindow = global.window;
global.window = {
  open () {
    return {success: true};
  }
};

describe('Client Utils', () => {
  describe('OAuth Popup', () => {
    it(`opens new window`, () => {
      let authWindow = openLoginPopup('/auth/github');
      expect(authWindow).to.not.equal(undefined);
    });
  });

  describe('Closure / Click Handler Version', () => {
    it(`returns a function`, () => {
      expect(typeof clickHandler).to.equal('function');
      expect(typeof clickHandler('/auth/github')).to.equal('function');
    });

    it(`opens new window`, () => {
      let event = {
        preventDefault () {}
      };
      let authWindow = clickHandler('/auth/github')(event);
      expect(authWindow).to.not.equal(undefined);
      global.window = oldWindow;
    });
  });

  describe('authAgent EventEmitter', () => {
    it(`sets up an eventEmitter at window.authAgent`, () => {
      expect(authAgent instanceof EventEmitter).to.equal(true);
    });
  });

  describe('getCenterCoordinates', () => {
    it(`function exists`, () => {
      expect(typeof getCenterCoordinates).to.equal('function');
    });
  });
});
