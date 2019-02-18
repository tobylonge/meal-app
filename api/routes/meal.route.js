import {Router} from 'express';
import MealController from '../controllers/meal.controller';

const router = new Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addAMeal);
router.get('/:id', MealController.getSingleMeal);
router.delete('/:id', MealController.deleteAMeal);

export default router;