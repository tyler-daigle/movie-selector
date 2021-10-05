import styles from "../styles/ScareRange.module.css";

function ScareRange(props) {
  return (
    <div className={styles.scareRangeContainer}>
      <span className={styles.scareRangeLabel}>Scare Level</span>
    </div>
  );
}

export default ScareRange;
