import recipedata from "./recipe.json";

function RecipeName(props) {

  const recipeName = recipedata.map((data) => (
    <div key={data.name}>
      <h1>{data.name}</h1>
    </div>
  ));

  return recipeName;
}

export default RecipeName;
