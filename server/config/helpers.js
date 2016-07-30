var request = require('request');
var apikey = process.env.API_KEY || require('../key').api_key;
var $ = require('jquery');

// exports.searchSpoonacular = function(obj, callback) {
//   console.log("searchSpoonacular", obj);
//   var query = obj.query;
//   var max = obj.max;
//   request.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients', {
//       form: {
//         apikey: apikey,
//         fillIngredients: "true",
//         ingredients: query,
//         limitLicense: "false",
//         number: max,
//         ranking: "1"
//       }
//     },
//     success: function success(data) {
//       if (callback) { callback(data); }
//       console.log("Successfully completed GET request", data);
//     },
//     error: function error() {
//       console.log("Failed to load data from Spoontacular");
//     },
//     beforeSend: function(xhr) {
//       xhr.setRequestHeader("X-Mashape-Authorization", apikey);
//     }
//   );
// };

exports.searchSpoonacular = function(obj, cb) {
  var query = obj.query;
  var max = obj.max;
  var options = {
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients',
    headers: {
      'X-Mashape-Authorization': apikey
    },
    params : {
      fillIngredients: "true",
      ingredients: query,
      limitLicense: "false",
      number: max,
      ranking: "1"
    }
  };
    // request.get(options)
    // .on('response', function(response){
    //   console.log(response.statusCode);
    //   console.log(response.headers['content-type']);
    //   console.log(response.body);
    //   //cb({recipe:'bread'});
    // })
    var options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients',
      qs: { ingredients: query },
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

  };
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
