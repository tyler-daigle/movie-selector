import Head from "next/head";
import { useState } from "react";

import LevelSelector from "../components/LevelSelector";

function index() {
  const [bloodLevel, setBloodLevel] = useState(1);
  return (
    <>
      <Head>
        <title>Movie Selector</title>
      </Head>
      <section>
        <span className="levelSelectorLabel">Blood Level</span>
        <LevelSelector
          selectedLevel={bloodLevel}
          onSelectionChanged={(bloodLevel) => setBloodLevel(bloodLevel)}
        />

        <span className="levelSelectorLabel">Blood Level</span>
        <LevelSelector
          selectedLevel={bloodLevel}
          onSelectionChanged={(bloodLevel) => setBloodLevel(bloodLevel)}
        />

        <span className="levelSelectorLabel">Blood Level</span>
        <LevelSelector
          selectedLevel={bloodLevel}
          onSelectionChanged={(bloodLevel) => setBloodLevel(bloodLevel)}
        />
      </section>
    </>
  );
}

export default index;
