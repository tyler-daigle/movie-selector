import styles from "../styles/FindButton.module.css";

function FindButton(props) {
  return (
    <button type="button" className={styles.findButton}>
      Find A Movie
    </button>
  );
}

export default FindButton;
