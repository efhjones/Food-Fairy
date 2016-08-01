var request = require('request');
var apikey = process.env.API_KEY || require('../key').api_key;
var User = require('../users/usersModel');

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
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/summary',
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

exports.complexSearch = function(obj, cb) {
  var query = obj.query;
  var max = obj.max;
  console.log("object query", obj.query)

    var options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex',
      qs: query,
      headers: {
        //'postman-token': 'd4a14e23-00ad-cfbf-dc8f-d6423cd2e608',
        'cache-control': 'no-cache',
        'x-mashape-authorization': 'R6un6vpSqfmshTqGWty9ffZySRO0p1QAKU4jsn5Zy79FEs8QMm'
      }
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      cb(body);
    });


}

  // $.ajax({
  //   url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients',
  //   method: 'GET',
  //   data: {
  //     fillIngredients: "true",
  //     ingredients: query,
  //     limitLicense: "false",
  //     number: max,
  //     ranking: "1"
  //   },
  //   success: function success(data) {
  //     if (callback) { callback(data); }
  //     console.log("Successfully completed GET request", data);
  //   },
  //   error: function error() {
  //     console.log("Failed to load data from Spoontacular");
  //   },
  //   beforeSend: function(xhr) {
  //     xhr.setRequestHeader("X-Mashape-Authorization", api_key);
  //   }
  // });

