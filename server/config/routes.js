
const helpers = require('./helpers');

module.exports = function(app, express) {

  app.post('/api/recipes', function(req, res){
    console.log("In routes, post req", req.body);
    helpers.searchSpoonacular({query: req.body.query, max : 10}, function(response){
      console.log("response", response);
      res.send(response);
    });
  })
}
  //   // retrieve all recipes from db
  // app.get('/api/recipes', recipesController.getAllRecipes);

  //   // add recipes to mongo database and retrieve all recipes
  // app.post('/api/recipes', recipesController.addRecipe);

  //   //remove recipe and send back all recipes
  // app.delete('/api/recipes/:recipe_id', recipesController.removeRecipe);


  /*
  * NONE OF THESE ARE BEING USED
  */

  // // get all searches from db
  // // currently not being used
  // app.get('/api/searches', function(req, res){
  //   Search.find({}).exec(function(err, recipes){
  //     if(err){
  //       res.send(err);
  //     } else {
  //       res.json(recipes);
  //     }
  //   });
  // });


  // // add search and send back all searches
  // // currently not being used
  // app.post('/api/searches', function(req, res){

  //   var inbound = req.body;
  //   console.log('got to post', inbound);

  //   var search = new Search({
  //     query: inbound.query
  //   });

  //   search.save(function(err, data){
  //     if(err){
  //       res.send(err);
  //     } else {
  //       Search.find(function(err, data) {
  //         if(err){
  //           res.send(err);
  //         } else {
  //           res.json(data);
  //         }
  //       });
  //     }
  //   });
  // });


  // // remove search and send back all search
  // // currently not being used
  // app.delete('/api/searches/:search', function(req, res){
  //   Search.remove({ _id : req.params.search_id }, function(err, search){
  //     if(err){
  //       res.send(err);
  //     } else {
  //       Search.find(function(err, searches){
  //         if(err){
  //           res.send(err);
  //         } else {
  //           res.json(searches);
  //         }
  //       });
  //     }
  //   });
  // });
