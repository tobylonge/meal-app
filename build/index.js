"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _meal = _interopRequireDefault(require("./routes/meal.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Routes
var app = (0, _express.default)();
var PORT = process.env.PORT || 9000;
app.use(_bodyParser.default.json());
app.get('/', function (req, res) {
  return res.send('The API is working');
});
app.use('/api/v1/meals', _meal.default);
app.listen(PORT, function () {
  console.log("Server is running on ".concat(PORT));
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=index.js.map