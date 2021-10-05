import styles from "../styles/LevelSelector.module.css";

function LevelSelector({
  onSelectionChanged,
  numLevels = 5,
  selectedLevel = 0,
}) {
  const currentLevel = selectedLevel - 1;

  return (
    <ul className={styles.levelSelectorContainer}>
      {Array.from({ length: numLevels }, (a, index) => {
        let classes = `${styles.levelSelectorItem} ${
          index <= currentLevel ? styles.selectedLevel : styles.notSelectedLevel
        }`;
        return (
          <li
            onClick={() => onSelectionChanged(index + 1)}
            className={classes}
          ></li>
        );
      })}
    </ul>
  );
}

export default LevelSelector;
