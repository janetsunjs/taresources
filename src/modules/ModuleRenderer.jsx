import { useState } from "react";

const DEFAULT_MODULE_CONFIG = {
  concept: {
    viewType: "choice",
    promptKey: "question",
    optionsKey: "options",
    answerKey: "correct",
    feedbackByOptionKey: "feedbackByOption",
    fallbackFeedbackKey: "feedback",
    feedbackTitles: { correct: "Strong answer.", incorrectPrefix: "Better answer: " },
    showFallbackWhenWrong: true,
    showFallbackWhenCorrect: false,
    noteFields: [{ key: "takeaway", className: "moduleTakeaway", when: "always" }],
  },
  definitions: {
    viewType: "definitions",
    definitionTitleKey: "term",
    definitionSections: [
      { key: "plain", label: "Plain language" },
      { key: "whyItMatters", label: "Why it matters" },
      { key: "commonMixup", label: "Common mix-up" },
    ],
    definitionCalloutKey: "example",
  },
  examples: {
    viewType: "choice",
    promptKey: "prompt",
    optionsKey: "options",
    answerKey: "best",
    feedbackByOptionKey: "feedbackByOption",
    fallbackFeedbackKey: "rationale",
    feedbackTitles: { correct: "Best-fit response.", incorrectPrefix: "Best-fit response: " },
    showFallbackWhenWrong: true,
    showFallbackWhenCorrect: true,
    fallbackTitles: {
      correct: "Why it works",
      wrong: "Why {answer} works best",
    },
    noteFields: [
      {
        key: "improve",
        label: "How to strengthen it further",
        className: "moduleTakeaway",
        when: "correct",
      },
    ],
  },
  tricky: {
    viewType: "choice",
    promptKey: "scenario",
    optionsKey: "choices",
    answerKey: "best",
    feedbackByOptionKey: "feedbackByOption",
    fallbackFeedbackKey: "why",
    feedbackTitles: {
      correct: "Recommended first move.",
      incorrectPrefix: "Recommended first move: ",
    },
    showFallbackWhenWrong: true,
    showFallbackWhenCorrect: true,
    fallbackTitles: {
      correct: "Why it works",
      wrong: "Why {answer} works best",
    },
    noteFields: [
      { key: "risk", label: "Risk", className: "moduleRisk", when: "correct" },
      { key: "followUp", label: "Follow-up", className: "moduleTakeaway", when: "correct" },
    ],
  },
};

function formatWithAnswer(template, answer) {
  if (!template) return "";
  return template.replace("{answer}", answer ?? "");
}

function noteShouldRender(note, isBest) {
  if (note.when === "correct") return isBest;
  if (note.when === "incorrect") return !isBest;
  return true;
}

function renderNote(item, note) {
  const value = item[note.key];
  if (!value) return null;

  return (
    <p key={note.key} className={note.className ?? "moduleTakeaway"}>
      {note.label ? <strong>{note.label}: </strong> : null}
      {value}
    </p>
  );
}

function ChoiceModule({ module }) {
  const [answers, setAnswers] = useState({});

  const promptKey = module.promptKey ?? "prompt";
  const optionsKey = module.optionsKey ?? "options";
  const answerKey = module.answerKey ?? "best";
  const feedbackByOptionKey = module.feedbackByOptionKey ?? "feedbackByOption";
  const fallbackFeedbackKey = module.fallbackFeedbackKey;
  const feedbackTitles = module.feedbackTitles ?? {
    correct: "Strong answer.",
    incorrectPrefix: "Better answer: ",
  };
  const fallbackTitles = module.fallbackTitles ?? {};
  const showFallbackWhenWrong = module.showFallbackWhenWrong ?? false;
  const showFallbackWhenCorrect = module.showFallbackWhenCorrect ?? false;
  const noteFields = module.noteFields ?? [];
  const items = module.items ?? [];

  return (
    <div className="moduleStack">
      {items.map((item) => {
        const chosen = answers[item.id];
        const best = item[answerKey];
        const isBest = chosen === best;
        const choiceSpecific = chosen ? item[feedbackByOptionKey]?.[chosen] : null;
        const fallback = fallbackFeedbackKey ? item[fallbackFeedbackKey] : null;
        const shouldShowFallback =
          Boolean(fallback) &&
          fallback !== choiceSpecific &&
          ((isBest && showFallbackWhenCorrect) || (!isBest && showFallbackWhenWrong));
        const primaryFeedback = choiceSpecific ?? (shouldShowFallback ? "" : fallback ?? "");
        const fallbackTitle = isBest
          ? fallbackTitles.correct
          : formatWithAnswer(fallbackTitles.wrong, best);
        const visibleNotes = noteFields.filter((note) => noteShouldRender(note, isBest));

        return (
          <article key={item.id} className="moduleItem">
            <h2 className="modulePrompt">{item[promptKey]}</h2>

            <div className="moduleOptions">
              {(item[optionsKey] ?? []).map((option) => (
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
                  {isBest
                    ? feedbackTitles.correct
                    : `${feedbackTitles.incorrectPrefix}${best}.`}
                </div>

                {primaryFeedback && <p className="moduleFeedbackBody">{primaryFeedback}</p>}

                {shouldShowFallback && (
                  <>
                    {fallbackTitle && <div className="moduleHintTitle">{fallbackTitle}</div>}
                    <p className="moduleHint">{fallback}</p>
                  </>
                )}

                {visibleNotes.map((note) => renderNote(item, note))}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

function DefinitionsModule({ module }) {
  const titleKey = module.definitionTitleKey ?? "term";
  const sections = module.definitionSections ?? [];
  const items = module.items ?? [];

  return (
    <div className="definitionGrid">
      {items.map((item) => (
        <article key={item.id} className="definitionCard">
          <h2 className="definitionTerm">{item[titleKey]}</h2>

          {sections.map((section) => (
            <div key={section.key} className="definitionBlock">
              <div className="definitionLabel">{section.label}</div>
              <p>{item[section.key]}</p>
            </div>
          ))}

          {module.definitionCalloutKey && (
            <div className="definitionExample">{item[module.definitionCalloutKey]}</div>
          )}
        </article>
      ))}
    </div>
  );
}

export default function ModuleRenderer({ module }) {
  if (!module || !Array.isArray(module.items)) {
    return <p className="subtitle">No module content configured yet.</p>;
  }

  const resolvedModule = {
    ...(DEFAULT_MODULE_CONFIG[module.id] ?? {}),
    ...module,
  };

  if (resolvedModule.viewType === "choice") return <ChoiceModule module={resolvedModule} />;
  if (resolvedModule.viewType === "definitions") return <DefinitionsModule module={resolvedModule} />;

  return <p className="subtitle">Module view type is missing or unsupported.</p>;
}
