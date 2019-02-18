import MealService from '../services/meal.services';

const MealController = {
    fetchAllMeals(req, res) {
        const allMeals = MealService.fetchAllMeals();
        return res.json({
            status: 'success',
            data: allMeals
        }).status(200);
    },

    addAMeal(req, res) {
        /* 
            Json of format 
            {
                name: 'name of meal',
                category: 'meal category',
                price: 'amount'
            }
        */
       const newMeal = req.body;
       const createdMeal = MealService.addMeal(newMeal);
       return res.json({
            status: 'success',
            data: createdMeal
        }).status(201);

    },

    getSingleMeal(req, res) {
        const id = req.params.id;
        const foundMeal = MealService.getAMeal(id);
        return res.json({
            status: 'success',
            data: foundMeal
        }).status(200);

    },

    deleteAMeal(req, res) {
        const id = req.params.id;
        const deleteMeal = MealService.deleteAMeal(id);
        return res.json({
            status: 'success',
            data: deleteMeal
        }).status(200);

    }
}

export default MealController;