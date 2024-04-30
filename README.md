# Welcome to Red-Lipped Grocery

### What is the problem you’re solving?
- People keep forgetting when their groceries expire 
- People have trouble managing their pantry contents

### Solution: Create an App that stores grocery items with their expiration dates and recommends recipes to the user based on their current pantry items
1. Fast server updates and data fetching items from database and recipes from API
1. Fast and simple UI
1. Persistent data storage across sessions
1. Can manage database contents from Express server

### What are the tough technical challenges involved with solving this problem?
- Setting up dev environment, webpack, file structure, dev server
- Keeping the dev branch clean and working with feature branches and making sure everyone has the most updated changes
- Getting the table component to refresh when we add a new item to the database, we also had mongoDB IP whitelisting issues
- Issues applying the access key to our server request to use the recipe API and destructuring the massively nested data object from the api requests to use in the front end

### Instructions to get started:
1. Run npm install (This may take a while, just wait until it finishes)
1. Link your own MongoDB connection string in the .env file 
1. In Recommond.jsx and RecipeController.js, sign up for and add your own API key from spoonacular API website
1. Run npm run dev to start the website
