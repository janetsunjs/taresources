const MODULES = {
  concept: {
    title: "Concept Check",
    desc: "Quick questions to test understanding of key ideas.",
    actions: ["Start 5-question quiz", "Browse topics", "View score history (later)"],
  },
  definitions: {
    title: "Definitions",
    desc: "Short prompts to practice clear, precise explanations.",
    actions: ["Start definitions drill", "Flashcards (later)", "Common misconceptions (later)"],
  },
  examples: {
    title: "Examples",
    desc: "Choose the best example or identify what’s missing.",
    actions: ["Start examples quiz", "Case bank (later)", "Compare answers (later)"],
  },
  tricky: {
    title: "Tricky Cases",
    desc: "Edge cases and scenario-style questions with trade-offs.",
    actions: ["Start tricky quiz", "Office hours scripts (later)", "Reflection prompts (later)"],
  },
};

export default function ModuleHub({ module, onBack }) {
  const data = MODULES[module] ?? {
    title: "Choose a module",
    desc: "Pick a chip on the home page to start.",
    actions: [],
  };

  return (
    <div className="page">
      <div className="card">
        <span className="badge">Module</span>
        <h1 className="title">{data.title}</h1>
        <p className="subtitle">{data.desc}</p>

        <div className="grid">
        {data.actions.map((a) => (
            <button
            key={a}
            className="scenarioCard"
            onClick={() => alert(a)}
            >
            <div className="scenarioTitle">{a}</div>
            <div className="scenarioBlurb">
                Begin this activity within the {data.title} module.
            </div>
            </button>
        ))}
        </div>



        <button className="button secondary" onClick={onBack}>
          Back to Home
        </button>
      </div>
    </div>
  );
}
