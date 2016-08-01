const jwt = require('jwt-simple');
const config = require('../config/app_key');
const User = require('./usersModel');
const Recipe = require('../recipes/recipesModel');
const helpers = require('../config/helpers');
/*
  # Takes in a user
  @sub => subject
  @iat => issued_at
  # Ouputs a JWT token
*/
function userToken(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

/*
  # At this point, user has already been authenticated before
    # Just need to give them a token
*/
exports.signin = function(req, res, next) {
  res.send({ token: userToken(req.user) });
}

/*
  # Takes in a user
  @sub => subject
  @iat => issued_at
  # Ouputs a JWT token
*/
exports.signup = function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    //422 => unprocessable data
    return res.status(422).send({ error: 'You must provide username and password'});
  }

  User.findOne({username: username}, function(err, existingUser) {
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

exports.getUserRecipes = function (req, res) {
  var username = req.username;
  User.findOne({username: username}, function (err, user){
    if (err) { return next(err); }
    if (user) {
      res.send(200, user.recipes);
    }
  })
}

exports.saveUserRecipe = function (req, res) {
  console.log("Save user recipe called");
  //req should be {recipe: {}, user: username}
  var username = req.user;
  User.findOne({username: username}, function (err, user){
    if (err) { return next(err); }
    if (user) {
      var rr = req.recipe;
      var recipe = new Recipe ({
        title: rr.title,

      })
      user.recipes.push(recipe);
      res.send(201, user.recipes);
    }
  })
}



exports.deleteUserRecipe = function (req, res) {
  console.log("Delete user recipe called");
  //req should be {recipe: {}, user: username}
  var username = req.user;
  var recipeId = req.recipeId;
  User.findOne({username: username}, function (err, user){
    if (err) { return next(err); }
    if (user) {
      for (var i = 0; i < user.recipes.length; i++){
        if (recipes[i].id === recipeId) {
          recipes.splice(i, 1);
        }
      }
      res.send(201, user.recipes);
    }
  })
}
