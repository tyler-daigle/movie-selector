import Head from "next/head";
import { useState } from "react";

import LevelSelector from "../components/LevelSelector";

function index() {
  const onSelectionChanged = (i) => setSelectedLevel(i);
  const [selectedLevel, setSelectedLevel] = useState(1);
  return (
    <>
      <Head>
        <title>Movie Selector</title>
      </Head>
      <div>
        <h1>Movie Selector</h1>
        <LevelSelector
          selectedLevel={selectedLevel}
          onSelectionChanged={onSelectionChanged}
        />
      </div>
    </>
  );
}

export default index;
