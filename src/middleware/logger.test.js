'use strict';

const { describe, it } = require('node:test');
const logger = require('../middleware/logger');

describe('Logger middleware', () => {
  let req = {};
  let res = {};
  let next = jest.fn();
  console.log = jest.fn();
  it('logs  method and path', () => {
    logger(req, res, next);

    expect(console.log).toHaveBeenCalledWith(`${req.path}, ${req.method}`);
    expect(next).toHaveBeenCalledWith();
  })
});