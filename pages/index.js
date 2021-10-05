import { useState } from "react";
import Layout from "../components/Layout";
import LevelSelector from "../components/LevelSelector";
import ScareRange from "../components/ScareRange";
import RatingSelection from "../components/RatingSelector";
import FindButton from "../components/FindButton";

function index() {
  const [bloodLevel, setBloodLevel] = useState(1);
  const [jumpScaresLevel, setJumpScaresLevel] = useState(1);
  const [nudityLevel, setNudityLevel] = useState(1);
  const [violenceLevel, setViolenceLevel] = useState(1);

  return (
    <Layout>
      <section>
        <p className="page-intro">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed magni
          amet eos nostrum sequi unde tempora, dolorum eligendi quae placeat
          incidunt cum quasi eveniet tempore.
        </p>
      </section>
      <section>
        <LevelSelector
          label="Blood And Gore"
          selectedLevel={bloodLevel}
          onLevelChanged={(bloodLevel) => setBloodLevel(bloodLevel)}
        />

        <LevelSelector
          label="Jump Scares"
          selectedLevel={jumpScaresLevel}
          onLevelChanged={(level) => setJumpScaresLevel(level)}
        />

        <LevelSelector
          label="Sex/Nudity"
          selectedLevel={nudityLevel}
          onLevelChanged={(level) => setNudityLevel(level)}
        />

        <LevelSelector
          label="Violence"
          selectedLevel={violenceLevel}
          onLevelChanged={(level) => setViolenceLevel(level)}
        />

        <ScareRange />
        <RatingSelection />

        <FindButton />
      </section>
    </Layout>
  );
}

export default index;
