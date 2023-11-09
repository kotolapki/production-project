/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const jsonServer = require('json-server');
// const jwt = require('jsonwebtoken');
const path = require('path');
const express = require('express');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });
  next();
});

server.use(jsonServer.defaults());

// server.use(async (req, res, next) => {
//   if (!req.headers.authorization) {
//     return res.status(403).json({ message: 'Auth error' });
//   }

//   next();
// });

server.post('/', (req, res) => {
  console.log('post');
  return res.json({ message: 'post' });
});

server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'),
  );
  const users = db;

  const userFromDb = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (userFromDb) {
    return res.json(userFromDb);
  }

  return res.status(403).json({ message: 'auth error' });
});

server.use(router);

server.listen('8000', () => {
  console.log('server is running on 8000 port');
});
