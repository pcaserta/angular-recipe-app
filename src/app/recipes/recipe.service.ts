import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe("Spaghetti", "This is italian", 'https://www.starfrit.com/media/contentmanager/content/cache/1070x1070//recipes/e1_r1_spaghetti.jpg'),
        new Recipe("Meatballs", "This is italian", 'https://www.starfrit.com/media/contentmanager/content/cache/1070x1070//recipes/e1_r1_spaghetti.jpg')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}