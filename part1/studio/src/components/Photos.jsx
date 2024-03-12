import styles from "./Description.module.css";

const RecipePhoto = () => {
  return (
    <img
      src="https://natashaskitchen.com/wp-content/uploads/2017/03/Zuppa-Toscana-Soup-5-600x900.jpg"
      alt="Zuppa Topscano photo"
      className={styles.imageUpdates}
    />
  );
};

export default RecipePhoto;