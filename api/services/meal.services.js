import dummyData from '../utils/dummyData';
import Meal from '../models/meal.models';

let selectMeals = dummyData.meals;
const MealService = {
    fetchAllMeals() {
        const validMeals = dummyData.meals.map((meal) => {
            const newMeal = new Meal();
            newMeal.id = meal.id,
            newMeal.name = meal.name,
            newMeal.category = meal.category,
            newMeal.price = meal.price
            return newMeal;
        });
        return validMeals;
    },

    addMeal(meal) {
        const mealLength = dummyData.meals.length;
        const lastId = dummyData.meals[mealLength - 1].id;
        const newId = lastId + 1;
        meal.id = newId
        dummyData.meals.push(meal);
        return meal;
    },

    getAMeal(id) {
        const meal = dummyData.meals.find(meal => meal.id == id);
        return meal || {};
    },

    deleteAMeal(id) {
        dummyData.meals.splice(id-1, 1);
        return id;
    },

    modifyAMeal(meal) {
        const modifyId = meal.id - 1;
        dummyData.meals[modifyId] = meal;
        return meal;
    },

    selectTodayMeals(selectedIds) {
        const selectedMeals = dummyData.meals.filter(function(meal) { 
            return selectedIds.indexOf(meal.id) !== -1; 
        });
        selectMeals = selectedMeals;
        return selectedMeals;
    },

    getTodayMeals() {
        const a = selectMeals;
        return a;
    }
    
};

export default MealService;