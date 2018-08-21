const test = require('ava');
const request = require('supertest');
const { server } = require('../server');
const person1 = require('./fixtures/person1.json');

test('base url responds with 200 and correct data', async t => {
  const { statusCode, body } = await request(server.callback()).get('/');
  t.is(statusCode, 200);
  t.is(body.data, 'It works!');
});

test('all people request returns an array', async t => {
  const { statusCode, body } = await request(server.callback()).get('/people');
  t.is(statusCode, 200);
  t.true(Array.isArray(body.data));
});

test('person number 1 is returned correctly', async t => {
  const { statusCode, body } = await request(server.callback()).get(
    '/people/1'
  );
  t.is(statusCode, 200);
  t.deepEqual(body.data, person1);
});
