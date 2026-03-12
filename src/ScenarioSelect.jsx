import { SCENARIOS } from "./scenarios/scenarioData";

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
