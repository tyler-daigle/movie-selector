import styles from "../styles/LevelSelector.module.css";

function LevelSelector({
  onLevelChanged,
  label,
  numLevels = 5,
  selectedLevel = 0,
}) {
  const currentLevel = selectedLevel - 1;

  return (
    <div className={styles.levelSelectorContainer}>
      <span className={styles.levelSelectorLabel}>{label}</span>
      {Array.from({ length: numLevels }, (a, index) => {
        let classes = `${styles.levelSelectorItem} ${
          index <= currentLevel ? styles.selectedLevel : styles.notSelectedLevel
        }`;
        return (
          <span
            onClick={() => onLevelChanged(index + 1)}
            className={classes}
            key={`${index} + ${label}`}
          ></span>
        );
      })}
    </div>
  );
}

export default LevelSelector;
