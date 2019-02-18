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

    },

    modifyAMeal(req, res) {
        /* 
            Json of format 
            {
                id: 'id of meal'
                name: 'name of meal',
                category: 'meal category',
                price: 'amount'
            }
        */
       const editedMeal = req.body;
       const modifiedMeal = MealService.modifyAMeal(editedMeal);
       return res.json({
            status: 'success',
            data: modifiedMeal
        }).status(201);

    },

    SelectTodayMeals(req, res) {
        /* 
            Array of Ids
            [1,2,3,4]
        */
       const selectedMeals = MealService.selectTodayMeals(req.body);
       return res.json({
            status: 'success',
            data: selectedMeals
        }).status(201);

    },

    fetchSelectedMeals(req, res) {
        const allselectedMeals = MealService.getTodayMeals();
        return res.json({
            status: 'success',
            data: allselectedMeals
        }).status(200);
    },

    selectedOrder(req, res) {
        /* 
            Array of Ids
            [1,2,3,4]
        */
       const selectOrder = MealService.getTodayOrder(req.body);
       return res.json({
            status: 'success',
            data: selectOrder
        }).status(201);

    },
    
    fetchSelectedOrders(req, res) {
        const allselectedOrders = MealService.getTodayOrders();
        return res.json({
            status: 'success',
            data: allselectedOrders
        }).status(200);
    },
}

export default MealController;