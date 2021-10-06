import { useState } from "react";

import styles from "../styles/ScareRange.module.css";

function ScareRange(props) {
  const [scareLevel, setScareLevel] = useState(1);

  return (
    <div className={styles.scareRangeContainer}>
      <span className={styles.scareRangeLabel}>Scare Level</span>
      <input
        className={styles.scareRangeControl + " scareRange"}
        type="range"
        value={scareLevel}
        min="1"
        max="100"
        onChange={(e) => setScareLevel(e.target.value)}
        style={{
          background: `linear-gradient(to right, red, black ${scareLevel}%)`,
        }}
      />
    </div>
  );
}

export default ScareRange;
