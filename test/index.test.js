var oldWindow = global.window;
global.window = {
  open () {
    return {success: true};
  }
};

import { expect } from 'chai';
import openLoginPopup, {authAgent, getCenterCoordinates} from '../src/index';
import EventEmitter from 'events';

describe('Client Utils', () => {
  describe('OAuth Popup', () => {
    it(`opens new window`, () => {
      let authWindow = openLoginPopup('/auth/github');
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
