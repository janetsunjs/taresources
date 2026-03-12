import { useState } from "react";

export default function TrickyCasesView({ items }) {
  const [answers, setAnswers] = useState({});

  return (
    <div className="moduleStack">
      {items.map((item) => {
        const chosen = answers[item.id];
        const isBest = chosen === item.best;
        const choiceSpecific = chosen ? item.feedbackByOption?.[chosen] : null;

        return (
          <article key={item.id} className="moduleItem">
            <h2 className="modulePrompt">{item.scenario}</h2>

            <div className="moduleOptions">
              {item.choices.map((choice) => (
                <button
                  key={choice.key}
                  type="button"
                  className={`moduleOption ${chosen === choice.key ? "isChosen" : ""}`}
                  onClick={() =>
                    setAnswers((prev) => ({
                      ...prev,
                      [item.id]: choice.key,
                    }))
                  }
                >
                  <span className="moduleOptionKey">{choice.key}</span>
                  <span>{choice.text}</span>
                </button>
              ))}
            </div>

            {chosen && (
              <div className={`moduleFeedback ${isBest ? "good" : "warn"}`}>
                <div className="moduleFeedbackTitle">
                  {isBest ? "Recommended first move." : `Recommended first move: ${item.best}.`}
                </div>
                <p className="moduleFeedbackBody">{choiceSpecific ?? item.why}</p>
                {!isBest && <p className="moduleHint">{item.why}</p>}
                <p className="moduleRisk">
                  <strong>Risk:</strong> {item.risk}
                </p>
                <p className="moduleTakeaway">
                  <strong>Follow-up:</strong> {item.followUp}
                </p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
