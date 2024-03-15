import "./styling.css";
import recipedata from "./recipe.json";

function AuthorInfo() {
  const authorName = recipedata.map((data) => (
    <div key={data.name}> {data.author} </div>
  ));

  const authorImage = recipedata.map((data) => (
    <div>
      <img src={data.authorImage} class="authorImage"/>
    </div>
  ));

  const authorURL = recipedata.map((data) => (
    <div>
      <a href={data.website}>{data.website}</a>
    </div>
  ));

  return (
    <div>
      {authorImage}
      {authorName}
      {authorURL};
    </div>
  );
}

export default AuthorInfo;

//import styles.css
//import json file for author info
//image, name, website
//css for styling image
