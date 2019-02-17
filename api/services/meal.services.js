import dummyData from '../utils/dummyData';
import Meal from '../models/meal.models';

const MealService = {
    fetchAllMeals() {
        const validMeals = dummyData.meals.map((meal) => {
            const newMeal = new Meal();
            newMeal.id = meal.id,
            newMeal.name = meal.name,
            newMeal.category = meal.category,
            newMeal.price = meal.price
        });
        return validMeals;
    },

    addMeals(meal) {
        const mealLength = dummyData.meals.length;
        const lastId = dummyData.meals[mealLength - 1].id;
        const newId = lastId + 1;
        meal.id = newId
        dummyData.meals.push(meal);
        return meal;
    },

    getAMeal(id) {
        const Meal = dummyData.meals((meal) => {meal.id == id});
        return meal || {};
    }
};

export default MealService;