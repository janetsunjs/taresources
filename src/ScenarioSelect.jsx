const SCENARIOS = [
  {
    id: "grading",
    title: "A Student Challenges Your Grading Publicly ",
    blurb:
      "You return marked work during lab/tutorial. A student raises their voice and says: “This doesn’t make sense. I don’t see why I lost marks.” Other students are present and watching. ",
    tag: "Fairness • Compassion",
  },
  {
    id: "groupConflict",
    title: "Group Conflict During a Tutorial Activity",
    blurb:
      "You notice one student dominating discussion while another is silent and disengaged. Tension is visible. ",
    tag: " ",
  },
  {
    id: "boundaries",
        title: "A Student Pushes Boundaries Repeatedly",
            blurb:
                  "A student emails frequently, asks for exceptions, and pushes deadlines. ",
                      tag: "Boundaries • De-escalation",
  },
];

export default function ScenarioSelect({ onBack, onPickScenario }) {
  return (
    <div className="page">
      <div className="cardwide">
        <span className="badge">Choose one</span>
        <h1 className="title">Pick a Scenario</h1>
        <p className="subtitle">
          Read a short description, then enter the scenario you want to reflect on.
        </p>

        <div className="grid">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              className="scenarioCard"
              onClick={() => onPickScenario(s.id)}
            >
              <div className="scenarioTitle">{s.title}</div>
              <div className="scenarioBlurb">{s.blurb}</div>
              <div className="scenarioTag">{s.tag}</div>
            </button>
          ))}
        </div>

        <button className="button secondary" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
}
