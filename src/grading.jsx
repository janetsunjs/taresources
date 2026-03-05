import { useMemo, useState } from "react";

/**
 * Fork-in-the-road scenario flow:
 * - Step 1: pick A/B/C/D (hover shows sample response)
 * - Click choice: detail view (why / strengths / risks)
 * - Continue: Step 2 escalation (another A/B/C/D)
 * - Back / Home controls
 */

const SCENARIO = {
  id: "grading",
  title: "Scenario 1: A Student Challenges Your Grading Publicly",
  situation:
    "You return marked work during lab/tutorial. A student raises their voice and says: “This doesn’t make sense. I don’t see why I lost marks.” Other students are present and watching.",

  step1: {
    prompt: "What do you do first?",
    choices: [
      {
        key: "A",
        label: "Address it immediately, in front of the class",
        sample:
          "“That’s a fair question. Let’s take a quick look together, and if it needs more time, we can follow up after.”",
        why: [
          "You want to be transparent",
          "You don’t want the student to feel dismissed",
          "You feel confident in your grading rationale",
        ],
        strengths: [
          "Models openness and accountability",
          "Can quickly de-escalate confusion if it’s a simple issue",
          "Signals that questions are welcome",
        ],
        risks: [
          "The student may feel embarrassed and become more defensive",
          "You may feel pressured to explain quickly or overshare",
          "It can unintentionally turn into a public debate",
        ],
      },
      {
        key: "B",
        label: "Ask to continue the conversation after class",
        sample:
          "“I’m happy to go through this with you — let’s chat right after class so we can give it proper attention.”",
        why: [
          "You want to preserve the learning environment",
          "You want to give the student full attention privately",
          "You want time to think",
        ],
        strengths: [
          "Reduces public pressure for both of you",
          "Protects the student’s dignity",
          "Allows for a more thoughtful discussion",
        ],
        risks: [
          "The student may feel brushed off if tone isn’t careful",
          "Other students may interpret it as avoidance if not explained clearly",
        ],
      },
      {
        key: "C",
        label: "Defer to the instructor or course policy",
        sample:
          "“For regrade requests, the course policy asks that we follow this process — I can help you navigate that.”",
        why: [
          "You want alignment with course authority",
          "The issue involves regrades or policy",
          "You’re unsure about flexibility",
        ],
        strengths: [
          "Maintains consistency with course rules",
          "Protects you from overstepping authority",
          "Reinforces clear boundaries",
        ],
        risks: [
          "Can feel impersonal if not explained well",
          "May frustrate students seeking immediate clarity",
        ],
      },
      {
        key: "D",
        label: "Freeze internally and respond minimally",
        sample: "Gentle reframe: Freezing is human. Reflection afterward is the growth step.",
        why: [
          "You’re caught off guard",
          "You want to avoid conflict",
          "You’re worried about saying the wrong thing",
        ],
        strengths: ["Buys time in high-stress moments", "Avoids escalation in the moment"],
        risks: [
          "Student may feel unheard",
          "You may replay the moment later with regret",
          "Patterns of avoidance can increase stress long-term",
        ],
      },
    ],
  },

  escalation: {
    title: "The situation shifts",
    context:
      "The moment continues. Emotions are higher, and other students are watching. You want to keep the learning environment intact and respond in a way that is fair and grounded.",
    prompt: "What do you do next?",
    choices: [
      {
        key: "A",
        label: "Prioritize privacy and reset the tone",
        sample:
          "“I hear you — let’s talk right after so we can go through it properly. For now, let’s keep moving so everyone can finish.”",
        why: [
          "You want to reduce public pressure",
          "You want to protect the student’s dignity",
          "You want time to respond thoughtfully",
        ],
        strengths: [
          "Often de-escalates the emotional temperature",
          "Keeps the class on track",
          "Prevents a public debate spiral",
        ],
        risks: [
          "If phrased too sharply, student may feel dismissed",
          "Other students might still be curious about grading clarity",
        ],
      },
      {
        key: "B",
        label: "Offer a brief rubric clarification to the group (without debating the individual mark)",
        sample:
          "“Quick reminder: marks were based on the rubric—especially clarity of reasoning and units. If you want to discuss your specific feedback, I’m happy to do that after.”",
        why: [
          "You suspect the confusion is broader than one student",
          "You want to reduce class-wide uncertainty",
          "You want to normalize rubric-based reasoning",
        ],
        strengths: [
          "Supports the whole class",
          "Keeps the focus on learning objectives",
          "Reduces repeat questions later",
        ],
        risks: [
          "Can unintentionally feel like you’re ‘defending yourself’ publicly",
          "May invite follow-up questions on the spot",
        ],
      },
      {
        key: "C",
        label: "Pause and ask a neutral question to slow the situation down",
        sample:
          "“Thanks for raising it. Which rubric line feels unclear to you — is it the method, the explanation, or something else?”",
        why: [
          "You want to shift from emotion to specifics",
          "You want to model a calm problem-solving tone",
        ],
        strengths: [
          "Can quickly pinpoint the real issue",
          "Feels respectful and grounded",
        ],
        risks: [
          "If emotions are high, the student may not answer calmly",
          "Could still become a public back-and-forth",
        ],
      },
      {
        key: "D",
        label: "Loop in the instructor for alignment and follow-up",
        sample:
          "“I want to make sure we’re consistent with course policy — I’ll check with the instructor and follow up with you.”",
        why: [
          "This is starting to repeat or feels bigger than a one-off",
          "You want policy clarity and shared responsibility",
        ],
        strengths: [
          "Protects role boundaries",
          "Creates consistent course-level messaging",
        ],
        risks: [
          "Can feel like escalation if not communicated warmly",
          "May delay resolution if you don’t set a clear follow-up plan",
        ],
      },
    ],
  },
};

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

function ScenarioHeader() {
  return (
    <div className="scenarioHeader">
      <span className="badge">Scenario</span>
      <h1 className="title">{SCENARIO.title}</h1>

      <div className="section">
        <div className="sectionTitle">Situation</div>
        <p className="para">{SCENARIO.situation}</p>
      </div>
    </div>
  );
}

function ChoiceGrid({ prompt, choices, onPick }) {
  return (
    <div className="section">
      <div className="sectionTitle">{prompt}</div>

      <div className="grid">
        {choices.map((c) => (
          <button key={c.key} className="forkChoice" onClick={() => onPick(c.key)}>
            <div className="optionHeader">
              <span className="optionKey">{c.key}</span>
              <div className="optionTitle">{c.label}</div>
            </div>

            {/* Hover preview: sample response */}
            <div className="hoverPreview">
              <div className="hoverTitle">Sample response</div>
              <div className="hoverText">{c.sample}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ChoiceDetail({ choice, onBack, onContinue, continueLabel }) {
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
          <div className="miniTitle">Sample response</div>
          <div className="quote">{choice.sample}</div>
        </div>

        <div className="miniSection">
          <div className="miniTitle">Why someone might choose this</div>
          <Bullets items={choice.why} />
        </div>

        <div className="miniSection">
          <div className="miniTitle">Potential strengths</div>
          <Bullets items={choice.strengths} />
        </div>

        <div className="miniSection">
          <div className="miniTitle">Trade-offs / risks</div>
          <Bullets items={choice.risks} />
        </div>
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

export default function Grading({ onHome }) {
  // step: "first" | "escalation"
  // view: "choose" | "detail"
  const [step, setStep] = useState("first");
  const [view, setView] = useState("choose");
  const [pickedKey, setPickedKey] = useState(null);

  const stepData = step === "first" ? SCENARIO.step1 : SCENARIO.escalation;

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
      // move to escalation step
      setStep("escalation");
      resetToChoices();
    } else {
      // end of current flow (for now)
      // keep it simple: go home
      onHome?.();
    }
  };

  return (
    <div className="page">
      <div className="card wide">
        {/* Scenario stays at top as reminder */}
        <ScenarioHeader />

        {/* Escalation context (only in step 2) */}
        {step === "escalation" && (
          <div className="callout">
            <div className="sectionTitle">{SCENARIO.escalation.title}</div>
            <div className="sectionBody">{SCENARIO.escalation.context}</div>
          </div>
        )}

        {/* Choose view */}
        {view === "choose" && (
          <>
            <ChoiceGrid
              prompt={stepData.prompt}
              choices={stepData.choices}
              onPick={goToDetail}
            />

            <div className="actionsRow">
              <button
                className="button secondary"
                onClick={() => {
                  if (step === "escalation") {
                    setStep("first");
                    resetToChoices();
                  } else {
                    onHome?.();
                  }
                }}
              >
                {step === "escalation" ? "Back to first fork" : "Go home"}
              </button>

              {step === "escalation" ? (
                <button className="button secondary" onClick={onHome}>
                  Go home
                </button>
              ) : (
                <button className="button secondary" onClick={() => setStep("escalation")}>
                  Skip to escalation
                </button>
              )}
            </div>
          </>
        )}

        {/* Detail view */}
        {view === "detail" && pickedChoice && (
          <ChoiceDetail
            choice={pickedChoice}
            onBack={resetToChoices}
            onContinue={continueFromDetail}
            continueLabel={step === "first" ? "Continue (escalation)" : "Finish + go home"}
          />
        )}
      </div>
    </div>
  );
}
