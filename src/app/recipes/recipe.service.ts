import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Spaghetti", 
            "This is italian",
             'https://www.starfrit.com/media/contentmanager/content/cache/1070x1070//recipes/e1_r1_spaghetti.jpg',
             [
                new Ingredient('Pasta', 2),
                new Ingredient('tomatoe sauce', 3)
             ]),
        new Recipe(
            "Meatballs",
            "This is more italian", 
            'https://www.flavcity.com/wp-content/uploads/2018/06/meatballs-tomato-sauce.jpg',
            [
                new Ingredient('parmesean', 6),
                new Ingredient('beef', 2)
            ]
            )];

    constructor(private slService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
    }
}