'use strict';

const { describe, it } = require('node:test');
const validator = require('../middleware/validator');

describe('validator middleware', () => {
  let req = {query: {name: 'Fred'}};
  let res = {};
  let next = jest.fn();

  // happy path
  it('validates query as expected', () => {
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith();
  });
  it('fails appropriately if no query name', () => {
    req = {query: {notName: 'Steve'}};
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('QUERY NAME REQUIRED');
  });
});