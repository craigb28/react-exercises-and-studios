import recipedata from "./recipe.json";

function IngredientList() {
  const ingredientsElement = (
    <div>
      <h3>Ingredients</h3>
      {recipedata.map((data) => {
        return (
          <ul key={data.name}>
            {data.ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </ul>
        );
      })}
    </div>
  );
  return ingredientsElement;
}

export default IngredientList;
