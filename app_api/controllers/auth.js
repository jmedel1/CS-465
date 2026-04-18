const jwt = require('jsonwebtoken');

const secret = 'MY_SECRET_KEY';

const login = (req, res) => {
  const { email, password } = req.body;

  if (email === 'admin@test.com' && password === 'password123') {
    const token = jwt.sign({ email: email }, secret, { expiresIn: '1h' });

    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = {
  login
};