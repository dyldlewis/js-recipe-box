import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName: string = 'Recipes';
  recipes: Recipe[] = [
    new Recipe('Beautiful Brownies', ['devil\'s lettuce', 'eggs', 'brownie mix', 'vegetable oil']),
    new Recipe('Max\'s Meatloaf', ['love', 'ground beef', 'ketchup', 'brown sugar', 'salt']),
    new Recipe('Grilled Cheese Sandwich', ['bread', 'butter', 'cheese'])
  ]
}

export class Recipe {
  constructor(public title: string, public ingredients: string[]) { }
}
