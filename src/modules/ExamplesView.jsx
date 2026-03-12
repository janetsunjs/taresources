import { useState } from "react";

export default function ExamplesView({ items }) {
  const [answers, setAnswers] = useState({});

  return (
    <div className="moduleStack">
      {items.map((item) => {
        const chosen = answers[item.id];
        const isBest = chosen === item.best;
        const choiceSpecific = chosen ? item.feedbackByOption?.[chosen] : null;

        return (
          <article key={item.id} className="moduleItem">
            <h2 className="modulePrompt">{item.prompt}</h2>

            <div className="moduleOptions">
              {item.options.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  className={`moduleOption ${chosen === option.key ? "isChosen" : ""}`}
                  onClick={() =>
                    setAnswers((prev) => ({
                      ...prev,
                      [item.id]: option.key,
                    }))
                  }
                >
                  <span className="moduleOptionKey">{option.key}</span>
                  <span>{option.text}</span>
                </button>
              ))}
            </div>

            {chosen && (
              <div className={`moduleFeedback ${isBest ? "good" : "warn"}`}>
                <div className="moduleFeedbackTitle">
                  {isBest ? "Best-fit response." : `Best-fit response: ${item.best}.`}
                </div>
                <p className="moduleFeedbackBody">{choiceSpecific ?? item.rationale}</p>
                {!isBest && <p className="moduleHint">{item.rationale}</p>}
                <p className="moduleTakeaway">{item.improve}</p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
