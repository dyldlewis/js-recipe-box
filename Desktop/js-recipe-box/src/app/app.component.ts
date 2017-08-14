import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectName: string = 'Recipes';
  ingredients: string = 'Ingredients';
  instructions: string = 'Instructions';
  recipes: Recipe[] = [
    new Recipe('Dark Chocolate Brownies', ['1 cup Butter', '5oz, weight Unsweetened Chocolate', '1/4 cup Unsweetened Cocoa Powder', '2 cups Sugar', '1 Tbsp Vanilla', '3 Whole Large Eggs', '1-1/4 cup Flour', '3/4 cups Semi-sweet Chocolate Chips', 'Powdered Sugar, for sifting'], ['Preheat oven to 350 degrees', 'In a medium-large saucepan, melt the butter with the unsweetened chocolate over low heat, whisking occasionally until smooth and melted. Sprinkle in cocoa powder and whisk to combine. Remove the pan from heat and allow to cool for about 5 minutes.', 'Stir in sugar and vanilla until just combined.', 'One at a time, stir in the eggs.', 'Gently stir in the flour until halfway incorporated. Add the chocolate chips and stir just until combined.', 'Pour batter (it will be very thick!) into a greased 8 x 8 or 9 x 13 baking pan. (Square pan will result in thicker brownies.) Spread to even out the top and place in the oven.', 'Bake for 40 minutes, then check the brownies with a toothpick. If it is overly gooey/messy, return to the oven for 5 to 10 more minutes. (Just be careful not to burn the edges.)', 'Allow to cool completely (important!), then sprinkle with powdered sugar and cut into small squares. The brownies are very rich!', '*Note: When warm the brownies will seem overly gooey/soft. As they cool, they will firm up. (Brownies are best several hours after baking, or even the next day!)']),
    new Recipe('Meatloaf', ['1 cup Milk', '6 bread slices', '2 lbs ground beef', '1 cup grated Parmesan', '1 tsp Salt', 'Freshly ground black pepper', '1/4 tsp seasoned salt', '1/4-1/2 cup minced flat-leaf parsley', '4 eggs beaten', '8-12 thin bacon slices', '1/2 cup Ketchup', '6 tbsp brown sugar', '1 sp dry mustard', 'Dash or 2 hot sauce', 'Dash or 2 worcestershire sauce'], ['For the meatloaf: Preheat the oven to 350 degrees F', 'Pour the milk over the bread and allow it to soak in for several minutes. Place the ground beef, milk-soaked bread, Parmesan, salt, some pepper, seasoned salt and parsley in a large mixing bowl. Pour in the eggs. With clean hands, mix the ingredients until well combined', 'Form the mixture into a loaf shape on a foil-lined broiler pan, which will allow the fat from the meat to drain', 'Lay the bacon slices over the top, tucking them underneath the meatloaf to give the meatloaf some support.', 'Next, make the tomato sauce: Pour the ketchup into a bowl. Add the brown sugar and dry mustard, and splash in the hot sauce and Worcestershire sauce. Stir the mixture until well combined. Pour one-third of the sauce over the top of the meatloaf.', 'Bake for 45 minutes, and then pour over another one-third of the remaining tomato sauce over the meatloaf. Bake for an additional 20 to 25 minutes; the meatloaf should be no longer pink in the middle. Allow to sit 10 minutes before serving.', 'Serve with the remaining tomato sauce on the side as a dipping sauce.']),
    new Recipe('Grilled Cheese Sandwich', ['bread', 'butter', 'cheese'], ['Put butter on bread', 'cheese in the middle', 'slap that son-of-gun on the grill', 'flip after 2 mins', 'eat that money'])
  ]
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public instructions: string[]) { }
}
