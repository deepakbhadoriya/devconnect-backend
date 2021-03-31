const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  //Get Token from Header
  const token = req.header('x-auth-token');

  //Check if Not Token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  //verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not Valid' });
  }
};
