const request = require('supertest');
const app = require('../src/app');
const pool = require('../src/db');

afterAll(async () => {
  await pool.end();
});

test('GET /health debe responder correctamente', async () => {
  const response = await request(app).get('/health');
  expect(response.statusCode).toBe(200);
  expect(response.body.estado).toBe('ok');
});

test('GET /usuarios debe devolver una lista', async () => {
  const response = await request(app).get('/usuarios');
  expect(response.statusCode).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
});

test('GET /productos debe devolver una lista', async () => {
  const response = await request(app).get('/productos');
  expect(response.statusCode).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
});

test('GET /pedidos debe devolver una lista', async () => {
  const response = await request(app).get('/pedidos');
  expect(response.statusCode).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
});
