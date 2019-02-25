"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../services/meal.services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealController = {
  fetchAllMeals: function fetchAllMeals(req, res) {
    var allMeals = _meal.default.fetchAllMeals();

    return res.json({
      status: 'success',
      data: allMeals
    }).status(200);
  },
  addAMeal: function addAMeal(req, res) {
    /* 
        Json of format 
        {
            name: 'name of meal',
            category: 'meal category',
            price: 'amount'
        }
    */
    var newMeal = req.body;

    var createdMeal = _meal.default.addMeal(newMeal);

    return res.json({
      status: 'success',
      data: createdMeal
    }).status(201);
  },
  getSingleMeal: function getSingleMeal(req, res) {
    var id = req.params.id;

    var foundMeal = _meal.default.getAMeal(id);

    return res.json({
      status: 'success',
      data: foundMeal
    }).status(200);
  },
  deleteAMeal: function deleteAMeal(req, res) {
    var id = req.params.id;

    var deleteMeal = _meal.default.deleteAMeal(id);

    return res.json({
      status: 'success',
      data: deleteMeal
    }).status(200);
  },
  modifyAMeal: function modifyAMeal(req, res) {
    /* 
        Json of format 
        {
            id: 'id of meal'
            name: 'name of meal',
            category: 'meal category',
            price: 'amount'
        }
    */
    var editedMeal = req.body;

    var modifiedMeal = _meal.default.modifyAMeal(editedMeal);

    return res.json({
      status: 'success',
      data: modifiedMeal
    }).status(201);
  },
  SelectTodayMeals: function SelectTodayMeals(req, res) {
    /* 
        Array of Ids
        [1,2,3,4]
    */
    var selectedMeals = _meal.default.selectTodayMeals(req.body);

    return res.json({
      status: 'success',
      data: selectedMeals
    }).status(201);
  },
  fetchSelectedMeals: function fetchSelectedMeals(req, res) {
    var allselectedMeals = _meal.default.getTodayMeals();

    return res.json({
      status: 'success',
      data: allselectedMeals
    }).status(200);
  },
  selectedOrder: function selectedOrder(req, res) {
    /* 
        Array of Ids
        [1,2,3,4]
    */
    var selectOrder = _meal.default.getTodayOrder(req.body);

    return res.json({
      status: 'success',
      data: selectOrder
    }).status(201);
  },
  fetchSelectedOrders: function fetchSelectedOrders(req, res) {
    var allselectedOrders = _meal.default.getTodayOrders();

    return res.json({
      status: 'success',
      data: allselectedOrders
    }).status(200);
  }
};
var _default = MealController;
exports.default = _default;
//# sourceMappingURL=meal.controller.js.map