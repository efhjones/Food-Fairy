var Recipe = require('./recipesModel');

module.exports = function() {
  return {

    getAllRecipes: function(req, res, next) {
      Recipe.find({}).exec(function(err, recipes){
        if(err){
          return next(err);
        } else {
          res.json(recipes);
        }
      });
    },
      // TODO: implement action if recipe already saved
    addRecipe: function(req, res, next) {
      var inbound = req.body;
      var recipe = new Recipe({
        title: inbound.title,
        image: inbound.image,
        likes: inbound.likes,
        summary: inbound.summary,
        steps: inbound.steps
      });

      recipe.save(function(err, data){
        if(err){
          return next(err);
        } else {
          Recipe.find(function(err, data) {
            if(err){
              return next(err);
            } else {
              res.json(data);
            }
          });
        }
      });
    },

    removeRecipe: function(req, res, next) {
      Recipe.remove({ _id : req.params.recipe_id }, function(err, recipe){
        if(err){
          return next(err);
        } else {
          Recipe.find(function(err, recipes){
            if(err){
              return next(err);
            } else {
              res.json(recipes);
            }
          });
        }
      });
    }
  }
}