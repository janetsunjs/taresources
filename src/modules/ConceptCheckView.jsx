import { useState } from "react";

export default function ConceptCheckView({ items }) {
  const [answers, setAnswers] = useState({});

  return (
    <div className="moduleStack">
      {items.map((item) => {
        const chosen = answers[item.id];
        const isCorrect = chosen === item.correct;
        const choiceSpecific = chosen ? item.feedbackByOption?.[chosen] : null;

        return (
          <article key={item.id} className="moduleItem">
            <h2 className="modulePrompt">{item.question}</h2>

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
              <div className={`moduleFeedback ${isCorrect ? "good" : "warn"}`}>
                <div className="moduleFeedbackTitle">
                  {isCorrect ? "Strong answer." : `Better answer: ${item.correct}.`}
                </div>
                <p className="moduleFeedbackBody">{choiceSpecific ?? item.feedback}</p>
                {!isCorrect && <p className="moduleHint">{item.feedback}</p>}
                <p className="moduleTakeaway">{item.takeaway}</p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
