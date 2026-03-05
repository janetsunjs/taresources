export default function Home({ onStart, onPickModule}) {
  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Scenarios</h1>

        <div className="content">
          <p>
            The situations below are meant as <strong>reflection exercises</strong>, not scripts or rules.
            Teaching contexts vary widely, and there is rarely one “correct” response.
          </p>

          <p>
            Each option has strengths, trade-offs, and risks depending on
            <em> timing, tone, power dynamics, and course expectations</em>.
          </p>

          <div className="callout">
            The goal is not to choose perfectly, but to build awareness,
            intentionality, and confidence in how you respond.
          </div>

          <button className="button" onClick={onStart}>
            Start Scenarios
          </button>
        </div>

        <div className="chips" aria-label="Topics">
        <button className="chip yellow" onClick={() => onPickModule("concept")}>Concept Check</button>
        <button className="chip mint" onClick={() => onPickModule("definitions")}>Definitions</button>
        <button className="chip lilac" onClick={() => onPickModule("examples")}>Examples</button>
        <button className="chip pink" onClick={() => onPickModule("tricky")}>Tricky Cases</button>
        </div>

      </div>
    </div>
  );
}
