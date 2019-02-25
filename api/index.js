import express from 'express';
import bodyParser from 'body-parser';

//Routes
import mealRoutes from './routes/meal.route';

const app = express();

const PORT = process.env.PORT || 9000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send('The API is working');
})

app.use('/api/v1/meals', mealRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

export default app;