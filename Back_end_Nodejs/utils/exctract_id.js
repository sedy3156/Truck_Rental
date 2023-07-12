const jwt = require('jsonwebtoken');

const verifyToken = (req, res) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // Extract the token from the request headers

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decodedToken = jwt.verify(token, 'your_secret_key');
   const  userId = decodedToken.id; // Add the user ID to the request object
    return userId;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;
