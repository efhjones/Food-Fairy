const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function (app, express) {
  app.use(morgan('combined'));
  app.use(cors());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));
};