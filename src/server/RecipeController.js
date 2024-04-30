
/*
 * @Author: Christie Laferriere & Abel xabelpenguin@gmail.com
 * @Date: 2024-04-27 5:40 pm
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-04-29 21:28:34
 */

const recipeController = {
    async getRecipes(req, res, next) {
        try {
            const { ingredients } = req.query;
            if (!ingredients) {
                return res.status(400).send({ error: 'Ingredients parameter is required' });
            }

            const lowerCaseIngredients = ingredients.toLowerCase();

            const apiUrl = `https://api.spoonacular.com/recipes/random?number=1&apiKey=<add your own api key here>&tags=${lowerCaseIngredients}`;

            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch data from Spoonacular API with status: ' + response.status);
            }
            const data = await response.json();

            if (!data || !data.recipes || data.recipes.length === 0) {
                return next({
                    log: 'No recipes found for the given ingredients',
                    status: 404,
                    message: { error: 'No recipes found' },
                });
            }

            const arrayOfSteps = data.recipes[0].analyzedInstructions[0].steps;
            const results = [];
            for (const steps of arrayOfSteps) {
                results.push('Step ' + steps.number + ': ' + steps.step);
            }
            res.locals.doc = {
                image: data.recipes[0].image,
                title: data.recipes[0].title,
                steps: results,
            };
            return next();
        } catch (err) {
            return next({
                log: 'Error in recipeController.getRecipes: ' + err,
                status: 500,
                message: { error: 'Internal server error: ' + err },
            });
        }
    }
};

module.exports = recipeController;

