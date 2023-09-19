import { fetchAllRecipes, serviceAllRecipes } from './api-requests'; 

// Функция для фильтрации рецептов по категории
async function filterRecipesByCategory(categoryName) {
    try {
        const allRecipes = await serviceAllRecipes();
        const categories = [
            { "_id": "6462a6cd4c3d0ddd28897f8e", "name": "Beef" },
            { "_id": "6462a6cd4c3d0ddd28897f95", "name": "Breakfast" },
            { "_id": "6462a6cd4c3d0ddd28897f8d", "name": "Chicken" },
            { "_id": "6462a6cd4c3d0ddd28897f8f", "name": "Dessert" },
            { "_id": "6462a6cd4c3d0ddd28897f97", "name": "Goat" },
            { "_id": "6462a6cd4c3d0ddd28897f8b", "name": "Lamb" },
            { "_id": "6462a6cd4c3d0ddd28897f93", "name": "Miscellaneous" },
            { "_id": "6462a6cd4c3d0ddd28897f94", "name": "Pasta" },
            { "_id": "6462a6cd4c3d0ddd28897f91", "name": "Pork" },
            { "_id": "6462a6cd4c3d0ddd28897f8a", "name": "Seafood" },
            { "_id": "6462a6cd4c3d0ddd28897f96", "name": "Side" },
            { "_id": "6462a6cd4c3d0ddd28897f98", "name": "Soup" },
            { "_id": "6462a6cd4c3d0ddd28897f8c", "name": "Starter" },
            { "_id": "6462a6cd4c3d0ddd28897f90", "name": "Vegan" },
            { "_id": "6462a6cd4c3d0ddd28897f92", "name": "Vegetarian" }
        ];

			const category = categories.find(cat => cat.name === categoryName);
			
        if (!category) {
            throw new Error('Category not found');
        }

        const filteredRecipes = allRecipes.filter(recipe => {
            return recipe.category === category._id;
        });

        return filteredRecipes;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

filterRecipesByCategory('Breakfast').then(resp=>console.log(resp))

export { filterRecipesByCategory };