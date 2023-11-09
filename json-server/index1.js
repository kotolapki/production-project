/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express');

const db = {
  users: [
    {
      id: 1,
      username: 'admin',
      password: '123',
    },
  ],
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });
  next();
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const foundUser = db.users.find(
    (user) => user.password === password && user.username === username,
  );

  if (foundUser) {
    return res.json(foundUser);
  }

  return res.status(403).json({ message: 'auth error' });
});

app.listen('8000', () => {
  console.log('server is running on 8000 port');
});
