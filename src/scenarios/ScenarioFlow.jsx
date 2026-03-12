import { useMemo, useState } from "react";
import { getScenarioById } from "./scenarioData";

function Bullets({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="bullets">
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

function ChoiceGrid({ prompt, framingText, choices, hoveredKey, onHover, onPick }) {
  return (
    <div className="section">
      <div className="sectionTitle">{prompt}</div>
      <p className="decisionPromptHint">
        {framingText ??
          "Different responses emphasize different priorities. Choose the approach that best reflects how you would handle the moment."}
      </p>

      <div className="forkGrid" onMouseLeave={() => onHover(null)}>
        {choices.map((c) => (
          <button
            key={c.key}
            type="button"
            className={`forkChoice ${hoveredKey === c.key ? "isActive" : ""}`}
            onMouseEnter={() => onHover(c.key)}
            onFocus={() => onHover(c.key)}
            onClick={() => onPick(c.key)}
          >
            <div className="optionHeader">
              <span className="optionKey">{c.key}</span>
              <div className="optionTitle">{c.label}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function HoverPanel({ choice }) {
  return (
    <div className="previewPanel" role="status" aria-live="polite">
      <div className="previewLabel">Example response</div>
      {!choice && (
        <div className="previewHint">Select an option above to see an example response.</div>
      )}
      <div className="previewText">{choice?.sample ?? ""}</div>
    </div>
  );
}

function ReflectionBlock({ reflection }) {
  if (!reflection) return null;

  return (
    <div className="miniSection reflectionBlock">
      <div className="miniTitle">{reflection.title ?? "Reflection"}</div>
      <p className="para reflectionPrompt">{reflection.prompt}</p>
      <Bullets items={reflection.priorities} />
    </div>
  );
}

function ChoiceDetail({ choice, reflection, onBack, onContinue, continueLabel }) {
  return (
    <div className="detailCard">
      <div className="detailTop">
        <div className="modalTitle">
          <span className="optionKey">{choice.key}</span>
          <span>{choice.label}</span>
        </div>
      </div>

      <div className="detailBody">
        <div className="miniSection">
          <div className="miniTitle">Example response</div>
          <div className="quote">{choice.sample}</div>
        </div>

        <div className="miniSection">
          <div className="miniTitle">When this approach may be helpful</div>
          <Bullets items={choice.why} />
        </div>

        <div className="miniSection">
          <div className="miniTitle">Potential strengths</div>
          <Bullets items={choice.strengths} />
        </div>

        <div className="miniSection">
          <div className="miniTitle">Things to Keep in Mind</div>
          <Bullets items={choice.risks} />
        </div>

        <ReflectionBlock reflection={reflection} />
      </div>

      <div className="detailBottom">
        <button className="button secondary" onClick={onBack}>
          Back to choices
        </button>
        <button className="button" onClick={onContinue}>
          {continueLabel}
        </button>
      </div>
    </div>
  );
}

export default function ScenarioFlow({ scenarioId, onBack, onHome }) {
  const scenario = getScenarioById(scenarioId);
  const scenarioData = scenario ?? {
    id: "missing",
    title: "Scenario not found",
    situation: "This scenario ID is not configured in the scenario data file.",
    step1: { prompt: "", choices: [] },
    escalation: { context: "", prompt: "", choices: [] },
  };

  const [step, setStep] = useState("first");
  const [view, setView] = useState("choose");
  const [hoveredKey, setHoveredKey] = useState(null);
  const [pickedKey, setPickedKey] = useState(null);

  const stepData = step === "first" ? scenarioData.step1 : scenarioData.escalation;

  const hoveredChoice = useMemo(
    () => stepData.choices.find((c) => c.key === hoveredKey) || null,
    [stepData, hoveredKey]
  );

  const pickedChoice = useMemo(
    () => stepData.choices.find((c) => c.key === pickedKey) || null,
    [stepData, pickedKey]
  );

  const resetToChoices = () => {
    setView("choose");
    setPickedKey(null);
  };

  const goToDetail = (key) => {
    setPickedKey(key);
    setView("detail");
  };

  const continueFromDetail = () => {
    if (step === "first") {
      setStep("escalation");
      setHoveredKey(null);
      resetToChoices();
    } else {
      onHome?.();
    }
  };

  if (!scenario) {
    return (
      <div className="page">
        <div className="card">
          <span className="badge">Scenario</span>
          <h1 className="title">Scenario not found</h1>
          <p className="subtitle">This scenario ID is not configured in the scenario data file.</p>
          <button className="button secondary" onClick={onBack}>
            Back to scenarios
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="cardwide">
        <div className="scenarioHeader">
          <span className="badge">Scenario</span>
          <h1 className={`title ${scenarioData.titleClassName ?? ""}`}>
            {scenarioData.title}
          </h1>

          <div className="section">
            <div className="sectionTitle">Situation</div>
            <p className="para">{scenarioData.situation}</p>
          </div>

          {!!scenarioData.decisionLensPoints?.length && (
            <div className="callout decisionLensCallout">
              <div className="sectionTitle">
                {scenarioData.decisionLensTitle ?? "Decision lens"}
              </div>
              <Bullets items={scenarioData.decisionLensPoints} />
            </div>
          )}
        </div>

        {step === "escalation" && (
          <div className="callout escalationCallout">
            <div className="escalationEyebrow">Escalation step</div>
            <div className="sectionTitle">The situation escalates</div>
            <p className="sectionBody">{scenarioData.escalation.context}</p>
          </div>
        )}

        {view === "choose" && (
          <>
            <ChoiceGrid
              prompt={stepData.prompt}
              framingText={stepData.framingText}
              choices={stepData.choices}
              hoveredKey={hoveredKey}
              onHover={setHoveredKey}
              onPick={goToDetail}
            />

            <HoverPanel choice={hoveredChoice} />

            <div className="actionsRow">
              <button
                className="button secondary"
                onClick={() => {
                  if (step === "escalation") {
                    setStep("first");
                    setHoveredKey(null);
                    resetToChoices();
                  } else {
                    onBack?.();
                  }
                }}
              >
                {step === "escalation" ? "Back to first fork" : "Back to scenarios"}
              </button>

              {step === "escalation" ? (
                <button className="button secondary" onClick={onHome}>
                  Go home
                </button>
              ) : (
                <button
                  className="button secondary"
                  onClick={() => {
                    setStep("escalation");
                    setHoveredKey(null);
                  }}
                >
                  Skip to escalation
                </button>
              )}
            </div>
          </>
        )}

        {view === "detail" && pickedChoice && (
          <ChoiceDetail
            choice={pickedChoice}
            reflection={step === "escalation" ? scenarioData.reflection : null}
            onBack={resetToChoices}
            onContinue={continueFromDetail}
            continueLabel={step === "first" ? "Continue (escalation)" : "Finish + go home"}
          />
        )}
      </div>
    </div>
  );
}
