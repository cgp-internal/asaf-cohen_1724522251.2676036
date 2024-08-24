const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY || 'secretkey';

function authenticate(req, res, next) {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).send({ error: 'Please authenticate.' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(401).send({ error: 'Please authenticate.' });
    }

    req.user = user;
    next();
  });
}

module.exports = { authenticate };