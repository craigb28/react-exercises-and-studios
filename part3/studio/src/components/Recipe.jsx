import { useState } from "react";

const RecipeAuthor = () => {
  let authorLink = "https://sallysbakingaddiction.com/about/";
  let authorPhoto =
    "https://sallysbakingaddiction.com/wp-content/uploads/2023/09/sally-mckenney-1.jpg";
  let authorName = "Sally McKenney";

  return (
    <div>
      <img
        src={authorPhoto}
        alt=""
        style={{objectFit: "contain", borderRadius: "50%"}}
        width = "200px"
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}></a>
      </div>
    </div>
  );
};

const RecipeIngredients = () => {
  const ingredients = ["brown sugar", "flour", "butter", "eggs", "cinnamon", "vanilla"];

  const ingredientListItems = ingredients.map((ingredient, index) => {return <li key={index}>{ingredient}</li>})
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul>
      {ingredientListItems}
      </ul>
    </div>
  );
};

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1>Sour Cream Coffee Cake</h1>
        <p>Simple and classic, this buttery cinnamon crumb coffee cake is anything but plain! Sour cream ensures a moist, light breakfast cake, and there is double the brown sugar cinnamon crumb streusel. Enjoy a thick ribbon of streusel inside and plenty of crumbs on top, both made from the same mixture.</p>
      </div>
      <div className="recipePhotoBlock">
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
  );
};

const RecipePhoto = () => {
  return <img src="https://sallysbakingaddiction.com/wp-content/uploads/2015/05/crumb-coffee-cake.jpg" alt="Sour Cream Coffee Cake" className="imageUpdates" height = "400px"/>;
};

export default function RecipeDisplay() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
        <RecipeDescription />
      </div>
    </div>
  );
}
