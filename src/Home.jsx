import { HOME_COPY, MODULE_CATALOG } from "./modules/moduleData";

export default function Home({ onStart, onPickModule }) {
  return (
    <div className="page">
      <div className="card">
        <h1 className="title">{HOME_COPY.title}</h1>

        <div className="content">
          <p>
            {HOME_COPY.intro}
          </p>

          <p>
            {HOME_COPY.emphasis}
          </p>

          <div className="callout">{HOME_COPY.callout}</div>

          <button className="button" onClick={onStart}>
            {HOME_COPY.startLabel}
          </button>
        </div>

        <div className="chips" aria-label="Topics">
          {MODULE_CATALOG.map((module) => (
            <button
              key={module.id}
              className={`chip ${module.chipColor}`}
              onClick={() => onPickModule(module.id)}
            >
              {module.chipLabel}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
