import ModuleRenderer from "./modules/ModuleRenderer";
import { getModuleById } from "./modules/moduleData";

export default function ModuleHub({ module, onBack }) {
  const data = getModuleById(module);

  if (!data) {
    return (
      <div className="page">
        <div className="card">
          <span className="badge">Module</span>
          <h1 className="title">Choose a Module</h1>
          <p className="subtitle">Pick a chip on the home page to open module activities.</p>
          <button className="button secondary" onClick={onBack}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const { title, desc, helper } = data;

  return (
    <div className="page">
      <div className="cardwide moduleCard">
        <span className="badge">Module</span>
        <h1 className="title">{title}</h1>
        <p className="subtitle">{desc}</p>

        <div className="moduleIntro">{helper}</div>
        <ModuleRenderer module={data} />

        <div className="actionsRow">
          <button className="button secondary" onClick={onBack}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
