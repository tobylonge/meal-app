"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../utils/dummyData"));

var _meal = _interopRequireDefault(require("../models/meal.models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectMeals = _dummyData.default.meals;
var orderMeals = [];
var MealService = {
  fetchAllMeals: function fetchAllMeals() {
    var validMeals = _dummyData.default.meals.map(function (meal) {
      var newMeal = new _meal.default();
      newMeal.id = meal.id, newMeal.name = meal.name, newMeal.category = meal.category, newMeal.price = meal.price;
      return newMeal;
    });

    return validMeals;
  },
  addMeal: function addMeal(meal) {
    var mealLength = _dummyData.default.meals.length;
    var lastId = _dummyData.default.meals[mealLength - 1].id;
    var newId = lastId + 1;
    meal.id = newId;

    _dummyData.default.meals.push(meal);

    return meal;
  },
  getAMeal: function getAMeal(id) {
    var meal = _dummyData.default.meals.find(function (meal) {
      return meal.id == id;
    });

    return meal || {};
  },
  deleteAMeal: function deleteAMeal(id) {
    _dummyData.default.meals.splice(id - 1, 1);

    return id;
  },
  modifyAMeal: function modifyAMeal(meal) {
    var modifyId = meal.id - 1;
    _dummyData.default.meals[modifyId] = meal;
    return meal || {};
  },
  selectTodayMeals: function selectTodayMeals(selectedIds) {
    var selectedMeals = _dummyData.default.meals.filter(function (meal) {
      return selectedIds.indexOf(meal.id) !== -1;
    });

    selectMeals = selectedMeals;
    return selectedMeals;
  },
  getTodayOrder: function getTodayOrder(orderIds) {
    var selectedOrder = selectMeals.filter(function (meal) {
      return orderIds.indexOf(meal.id) !== -1;
    });
    orderMeals = selectedOrder;
    return selectedOrder;
  },
  getTodayMeals: function getTodayMeals() {
    return selectMeals;
  },
  getTodayOrders: function getTodayOrders() {
    return orderMeals;
  }
};
var _default = MealService;
exports.default = _default;
//# sourceMappingURL=meal.services.js.map