import styles from "./Description.module.css";
import React from "react";

let recipeTitle = "Zuppa Toscano Copycat"
const RecipeAuthor = () => {
  let authorLink = "https://natashaskitchen.com";
  let authorPhoto =
    "https://natashaskitchen.com/wp-content/uploads/2023/02/NK-Head-Red-Shirt-small-160x160.png";
  let authorName = "Natasha Kravchuk";

  return (
    <div className={styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt={authorName} className={styles.imageUpdates} />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Natasha's Kitchen</a>
      </div>
    </div>
  );
};

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>{recipeTitle}</h1>
          <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}
export default RecipeDescription;