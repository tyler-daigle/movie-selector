import styles from "../styles/LevelSelector.module.css";

function LevelSelector({
  onSelectionChanged,
  numLevels = 5,
  selectedLevel = 0,
}) {
  const currentLevel = selectedLevel - 1;

  return (
    <div className={styles.levelSelectorContainer}>
      {Array.from({ length: numLevels }, (a, index) => {
        let classes = `${styles.levelSelectorItem} ${
          index <= currentLevel ? styles.selectedLevel : styles.notSelectedLevel
        }`;
        return (
          <span
            onClick={() => onSelectionChanged(index + 1)}
            className={classes}
          >
            {index}
          </span>
        );
      })}
    </div>
  );
}

export default LevelSelector;
