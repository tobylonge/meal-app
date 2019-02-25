"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _meal = _interopRequireDefault(require("../controllers/meal.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();
router.get('/', _meal.default.fetchAllMeals);
router.post('/', _meal.default.addAMeal);
router.get('/selected', _meal.default.fetchSelectedMeals);
router.get('/order', _meal.default.fetchSelectedOrders);
router.get('/:id', _meal.default.getSingleMeal);
router.delete('/:id', _meal.default.deleteAMeal);
router.put('/', _meal.default.modifyAMeal);
router.post('/selected', _meal.default.SelectTodayMeals);
router.post('/order', _meal.default.selectedOrder);
var _default = router;
exports.default = _default;
//# sourceMappingURL=meal.route.js.map