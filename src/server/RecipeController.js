const recipeController = {
    async getRecipes (req, res, next) {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=96de5f8d876b4599a17a24264d8ba2f9`);
        if (!response.ok) {
          throw new Error('Failed to fetch data from API with status: ' + response.status);
        }
        const recipe = await response.json(); 
  
        if (!recipe) { 
          return next({
            log: 'Message: Item names not found in DB',
            status: 404,
            message: { error: 'Could not find items in DB!'},
          });
        }
  
        res.locals.doc = recipe;
        console.log(recipe); 
        return next();
      } catch (err) {
        return next({
          log: 'Error in recipeController.getRecipes: ' + err,
          status: 500,
          message: { error: 'Message: ' + err},
        });
      }
    }
  };
  
  module.exports = recipeController;