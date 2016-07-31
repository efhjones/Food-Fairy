const jwt = require('jwt-simple');
const config = require('../config/app_key');
const User = require('./usersModel');
/*
  # Takes in a user
  @sub => subject
  @iat => issued_at_time
  # Ouputs a JWT token
*/
function userToken(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next) {
  const username = req.body.username;
  const password = req.bodypassword;

  User.findOne({username}, function(err, existingUser) {
    if (err) { return next(err); }
    if (existingUser) {
        //422 => unprocessable data
      return res.status(422).send({error: 'username is already in use'});
    }
    const user = new User({
      username: username,
      password: password
    });
      //save if no error and username not taken
    user.save(function(err) {
      if (err) { return next(err); }
      res.json({token: userToken(user)});
    })
  })
}