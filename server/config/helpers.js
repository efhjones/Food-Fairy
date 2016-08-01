var request = require('request');
var apikey = process.env.API_KEY || require('../key').api_key;

exports.searchSpoonacular = function(obj, cb) {
  var query = obj.query;
  var max = obj.max;
    var options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients',
      qs: { ingredients: query },
      headers: {
        'postman-token': 'd4a14e23-00ad-cfbf-dc8f-d6423cd2e608',
        'cache-control': 'no-cache',
        'x-mashape-authorization': apikey
      }
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      cb(body);
    });
};

exports.searchInstructions = function(id, cb) {
    console.log("The id passed to search instructions is ", id);
    var options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+ id +'/analyzedInstructions',
      qs: {
        id: id,
        stepBreakdown: 'true'
      },
      headers: {
        'postman-token': '94490704-570c-19e4-4aa8-c54a892d3d13',
        'cache-control': 'no-cache',
        'x-mashape-authorization': apikey
      }
    };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    cb(body);
  });
};

exports.searchSummary = function(id, cb) {
  var options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/637008/summary',
    qs: {
      'X-Mashape-Authorization': apikey
    },
    headers: {
      'postman-token': '7256d417-79f8-88a9-0ef8-af5e9773f5e4',
      'cache-control': 'no-cache',
      'x-mashape-authorization': apikey
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    cb(body);
  });
};
