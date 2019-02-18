import {Router} from 'express';
import MealController from '../controllers/meal.controller';

const router = new Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addAMeal);
router.get('/selected', MealController.fetchSelectedMeals);
router.get('/:id', MealController.getSingleMeal);
router.delete('/:id', MealController.deleteAMeal);
router.put('/', MealController.modifyAMeal);
router.post('/selected', MealController.SelectTodayMeals);

export default router;