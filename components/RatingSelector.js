import styles from "../styles/RatingSelection.module.css";

function RatingSelection(props) {
  return (
    <div className={styles.ratingSelectionContainer}>
      <span className={styles.ratingSelectionLabel}>Rating</span>
      <div className={styles.ratingChoices}>
        <div>
          <input
            className={styles.ratingCheckBox}
            name="pg-checkbox"
            type="checkbox"
          ></input>
          <label className={styles.ratingLabel} htmlFor="pg-checkbox">
            PG
          </label>
        </div>

        <div>
          <input
            className={styles.ratingCheckBox}
            name="r-checkbox"
            type="checkbox"
          ></input>
          <label className={styles.ratingLabel} htmlFor="r-checkbox">
            R
          </label>
        </div>

        <div>
          <input
            className={styles.ratingCheckBox}
            name="pg13-checkbox"
            type="checkbox"
          ></input>
          <label className={styles.ratingLabel} htmlFor="pg13-checkbox">
            PG-13
          </label>
        </div>

        <div>
          <input
            className={styles.ratingCheckBox}
            name="unrated-checkbox"
            type="checkbox"
          ></input>
          <label className={styles.ratingLabel} htmlFor="unrated-checkbox">
            Unrated
          </label>
        </div>
      </div>
    </div>
  );
}

export default RatingSelection;
