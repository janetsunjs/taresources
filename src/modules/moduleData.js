export const CONCEPT_CHECK_ITEMS = [
  {
    id: "cc-privacy",
    question: "When should a grading challenge move to a private conversation?",
    options: [
      { key: "B", text: "Always move private immediately with no explanation." },
      { key: "A", text: "When the exchange gets personal or disruptive, while acknowledging the concern." },
      { key: "C", text: "Only after a formal complaint is submitted." },
      { key: "D", text: "Never; resolve every grading issue publicly in class." },
    ],
    correct: "A",
    feedbackByOption: {
      B: "Immediate privacy can reduce tension, but skipping any public acknowledgement may feel dismissive to the student.",
      A: "Strong move. You protect class flow and preserve student dignity while still validating the concern.",
      C: "Waiting for a formal complaint is too slow for most classroom conflicts and can increase frustration.",
      D: "Public resolution can work for rubric reminders, but personal grading disputes often escalate in front of peers.",
    },
    feedback:
      "A short acknowledgement plus a private follow-up protects dignity and keeps the class moving.",
    takeaway: "Validate first, then set a clear follow-up channel and time.",
  },
  {
    id: "cc-first-move",
    question: "What is the best first de-escalation move in a public challenge?",
    options: [
      { key: "A", text: "Defend your grading in detail immediately." },
      { key: "B", text: "Ignore the comment and continue teaching." },
      { key: "C", text: "Acknowledge emotion, keep tone calm, and set next step." },
      { key: "D", text: "Tell the student they are being disrespectful." },
    ],
    correct: "C",
    feedbackByOption: {
      A: "Detailed public defense can sound adversarial and pull the class into a debate spiral.",
      B: "Ignoring the comment can signal that student concerns are unwelcome.",
      C: "Strong move. You lower intensity and create structure for a productive follow-up.",
      D: "Calling out behavior directly can escalate emotion before rapport is repaired.",
    },
    feedback:
      "Name the concern briefly, lower intensity, and guide the conversation into a productive process.",
    takeaway: "De-escalation is tone + structure, not just wording.",
  },
  {
    id: "cc-role-boundary",
    question: "Which statement best reflects TA role boundaries?",
    options: [
      { key: "A", text: "TAs can override any policy if they think it is fair." },
      { key: "B", text: "TAs interpret policy but align with instructor on exceptions and final calls." },
      { key: "C", text: "TAs should never explain policy decisions." },
      { key: "D", text: "TAs should avoid referencing policy in student conversations." },
    ],
    correct: "B",
    feedbackByOption: {
      A: "Overriding policy ad hoc creates inconsistency and risk for both you and students.",
      B: "Strong move. This balances student support with role clarity and course consistency.",
      C: "You can and should explain policy - clearly and respectfully.",
      D: "Avoiding policy language creates ambiguity and can increase conflict later.",
    },
    feedback:
      "Boundary clarity protects you and creates consistency for students across sections.",
    takeaway: "Use policy as a guide, not as a shield.",
  },
  {
    id: "cc-document",
    question: "When is documentation most important?",
    options: [
      { key: "A", text: "Only when a student is rude." },
      { key: "D", text: "When there are any issues that raise concerns, policy disputes, or emotionally charged interactions." },
      { key: "C", text: "After every student question in office hours." },
      { key: "B", text: "Only at the end of the term." },
    ],
    correct: "D",
    feedbackByOption: {
      A: "Rudeness is one trigger, but documentation is also important for repeated policy or escalation issues.",
      D: "Strong move. Documenting patterns and key moments supports fair follow-up.",
      C: "Documenting everything is usually unnecessary and unsustainable.",
      B: "End-of-term notes are often too late to be useful for active issues.",
    },
    feedback:
      "Brief factual notes help with follow-up, continuity, and instructor alignment. Email instructors to alert them that situations are occurring.",
    takeaway: "Document patterns and key decisions, not every minor exchange.",
  },
  {
    id: "cc-escalate",
    question: "What is the clearest signal that instructor escalation is needed?",
    options: [
      { key: "A", text: "The student asks one clarifying question." },
      { key: "B", text: "The same dispute repeats despite clear process and communication." },
      { key: "C", text: "You feel slightly nervous before responding." },
      { key: "D", text: "The student requests office hours." },
    ],
    correct: "B",
    feedbackByOption: {
      A: "One clarifying question is normal and usually manageable without escalation.",
      B: "Strong move. Repeated unresolved disputes often need instructor alignment.",
      C: "Also correct, feeling nervous is common. The instructor should be notified of the situation and nervousness but escalation is not necessarily needed",
      D: "Office hours requests are routine and not a standalone escalation signal.",
    },
    feedback:
      "Repeated conflict after process is followed usually needs course-level alignment and shared responsibility.",
    takeaway: "Escalate early enough to prevent pattern escalation.",
  },
];

export const DEFINITIONS_ITEMS = [
  {
    id: "def-equity",
    term: "Equity vs Equality",
    plain:
      "Equality gives everyone the same support. Equity gives support based on need so students can reach comparable outcomes.",
    whyItMatters: "Helps explain why consistent process can still include context-sensitive support.",
    commonMixup: "Equity is not random exceptions; it still relies on transparent criteria.",
    example: "Offer all students the same rubric, but direct extra office-hour support to those who need it.",
  },
  {
    id: "def-formative",
    term: "Formative vs Summative Feedback",
    plain:
      "Formative feedback guides improvement during learning. Summative feedback justifies an evaluated result.",
    whyItMatters: "Students often hear marks as judgment unless they can see improvement pathways.",
    commonMixup: "Giving a grade alone is not formative feedback.",
    example: "Summative: \"7/10 based on rubric.\" Formative: \"To reach 9/10, strengthen evidence in paragraph 2.\"",
  },
  {
    id: "def-regrade",
    term: "Regrade Request",
    plain:
      "A structured process for reviewing a submitted mark using course criteria, not an informal negotiation.",
    whyItMatters: "Protects fairness and consistency across students.",
    commonMixup: "Regrade is not a promise of mark increase.",
    example: "Student submits a written rationale mapped to rubric criteria by deadline.",
  },
  {
    id: "def-boundaries",
    term: "Professional Boundary",
    plain:
      "A clear limit on communication, role, and access that supports respectful and sustainable teaching relationships.",
    whyItMatters: "Prevents burnout and reduces ambiguity for students.",
    commonMixup: "Boundaries are not coldness; they are clarity.",
    example: "Respond in course channels during stated hours, not personal messaging apps.",
  },
  {
    id: "def-psych-safety",
    term: "Psychological Safety",
    plain:
      "A learning environment where students can ask questions and make mistakes without humiliation.",
    whyItMatters: "Supports engagement, especially during disagreement or confusion.",
    commonMixup: "Psychological safety does not mean absence of standards.",
    example: "Correct a misunderstanding without sarcasm, and invite follow-up questions.",
  },
  {
    id: "def-accommodation",
    term: "Accommodation vs Exception",
    plain:
      "Accommodation is an approved support mechanism. Exception is an ad-hoc change outside standard policy.",
    whyItMatters: "Keeps support aligned with institutional processes and fairness.",
    commonMixup: "Not every urgent request is an accommodation.",
    example: "Accessibility office letter = accommodation; informal extension request = policy-based exception decision.",
  },
];

export const EXAMPLES_ITEMS = [
  {
    id: "ex-public-dispute",
    prompt: "A student says loudly: \"This mark is unfair.\" Which opening response is strongest?",
    options: [
      { key: "A", text: "\"That's not true; I marked correctly.\""},
      { key: "B", text: "\"Please stop interrupting and sit down.\""},
      { key: "C", text: "\"I hear your concern. Let's review it right after class so we can do it properly.\""},
      { key: "D", text: "\"Email me if you still care tomorrow.\""},
    ],
    best: "C",
    feedbackByOption: {
      A: "This can sound defensive and shift focus from resolution to argument.",
      B: "This enforces control but does not acknowledge concern, so tension often stays high.",
      C: "Best fit. It validates concern and sets a clear, respectful next step.",
      D: "Delaying with weak commitment can feel dismissive and damage trust.",
    },
    rationale:
      "It acknowledges concern, sets a respectful boundary, and protects class flow.",
    improve:
      "Add a concrete follow-up: \"I'll stay 10 minutes after class.\"",
  },
  {
    id: "ex-extension",
    prompt: "A student asks for a third extension with little context. Best response?",
    options: [
      { key: "A", text: "\"No. You've asked too many times.\""},
      { key: "B", text: "\"I'll allow it this once, don't tell others.\""},
      { key: "C", text: "\"I can't approve this directly, but I can walk you through the course process.\""},
      { key: "D", text: "\"Sure, take as long as needed.\""},
    ],
    best: "C",
    feedbackByOption: {
      A: "Direct refusal may be policy-valid, but tone can shut down productive support.",
      B: "Private exceptions without process undermine fairness and consistency.",
      C: "Best fit. It supports the student while preserving role and policy boundaries.",
      D: "Open-ended approval is hard to sustain and unfair to other students.",
    },
    rationale:
      "This keeps support available while staying within role and policy boundaries.",
    improve:
      "Include timeline and channel: \"Submit by 5pm via the course form.\"",
  },
  {
    id: "ex-feedback-tone",
    prompt: "Which feedback comment is most constructive?",
    options: [
      { key: "A", text: "\"Weak work. This is confusing.\""},
      { key: "B", text: "\"You clearly didn't understand the lecture.\""},
      { key: "C", text: "\"Your main idea is clear; strengthen evidence in lines 3-5 to support the claim.\""},
      { key: "D", text: "\"This needs a lot of work.\""},
    ],
    best: "C",
    feedbackByOption: {
      A: "Too vague and judgmental; it does not tell the student what to improve.",
      B: "Personalized blame harms rapport and does not give actionable guidance.",
      C: "Best fit. It is specific, balanced, and improvement-oriented.",
      D: "General criticism without direction is hard for students to use.",
    },
    rationale:
      "It identifies what works and gives a specific, actionable next step.",
    improve:
      "Tie the advice to rubric language for transparency.",
  },
  {
    id: "ex-group-dynamics",
    prompt: "In a group activity, one student dominates and another is silent. Best in-the-moment move?",
    options: [
      { key: "A", text: "Publicly call out the dominant student as disrespectful."},
      { key: "B", text: "Do nothing and hope balance improves."},
      { key: "C", text: "Pause and assign each person a brief role or turn."},
      { key: "D", text: "End the activity early."},
    ],
    best: "C",
    feedbackByOption: {
      A: "Publicly shaming one student often raises defensiveness and harms group climate.",
      B: "Non-intervention usually reinforces the existing imbalance.",
      C: "Best fit. Structured turns rebalance participation quickly and fairly.",
      D: "Ending early avoids the issue instead of addressing it.",
    },
    rationale:
      "Role/turn structure quickly rebalances participation without personal shaming.",
    improve:
      "Follow up privately if pattern continues.",
  },
];

export const TRICKY_CASES_ITEMS = [
  {
    id: "tc-night-messages",
    scenario:
      "A student sends repeated late-night messages before deadlines asking for urgent help and exceptions.",
    choices: [
      { key: "A", text: "Respond instantly every time to show support." },
      { key: "B", text: "Set communication window and direct urgent requests to official channels." },
      { key: "C", text: "Ignore all future messages." },
      { key: "D", text: "Give private exceptions to reduce conflict." },
    ],
    best: "B",
    feedbackByOption: {
      A: "Highly responsive support can still create unsustainable expectations and boundary drift.",
      B: "Recommended first move. You provide support through clear, fair communication channels.",
      C: "Full disengagement removes support and can escalate student stress.",
      D: "Private exceptions reduce conflict short-term but create long-term consistency problems.",
    },
    why:
      "This is supportive but sustainable: clear access path, clear boundary, consistent process.",
    risk: "If wording is abrupt, student may read it as rejection.",
    followUp: "Use warm tone and repeat where/when they can expect responses.",
  },
  {
    id: "tc-policy-conflict",
    scenario:
      "You gave guidance in tutorial, then instructor announces a conflicting policy interpretation.",
    choices: [
      { key: "A", text: "Stick with your original guidance to avoid confusion." },
      { key: "B", text: "Publicly blame the instructor for changing rules." },
      { key: "C", text: "Acknowledge update, align to instructor policy, and clarify next steps." },
      { key: "D", text: "Avoid addressing it unless students ask." },
    ],
    best: "C",
    feedbackByOption: {
      A: "Consistency matters, but misalignment with instructor policy creates bigger downstream confusion.",
      B: "Blame language erodes trust and models poor professional alignment.",
      C: "Recommended first move. Transparent correction protects clarity and credibility.",
      D: "Silence leaves students operating under conflicting assumptions.",
    },
    why:
      "Transparent correction builds trust and keeps course messaging consistent.",
    risk: "Students may feel frustrated by change.",
    followUp: "Post a short written recap so nobody relies on conflicting memory.",
  },
  {
    id: "tc-integrity-unclear",
    scenario:
      "You suspect academic integrity issues, but evidence is incomplete and student is already distressed.",
    choices: [
      { key: "A", text: "Accuse the student immediately to test their reaction." },
      { key: "B", text: "Ignore it because certainty is low." },
      { key: "C", text: "Document observations and consult instructor before confronting." },
      { key: "D", text: "Privately negotiate a re-submission deal." },
    ],
    best: "C",
    feedbackByOption: {
      A: "Direct accusation without process can be unfair and risky.",
      B: "Ignoring concern can miss serious integrity issues.",
      C: "Recommended first move. Documenting facts and consulting keeps process fair and defensible.",
      D: "Private negotiation can compromise policy and create equity concerns.",
    },
    why:
      "Serious concerns require process integrity, factual documentation, and supervision.",
    risk: "Delay can feel uncomfortable when uncertainty is high.",
    followUp: "Record only observable facts, not assumptions.",
  },
  {
    id: "tc-emotional-moment",
    scenario:
      "A student becomes visibly upset after receiving feedback while other students wait nearby.",
    choices: [
      { key: "A", text: "Give detailed critique immediately in front of others." },
      { key: "B", text: "Offer a short supportive pause and move to a private check-in." },
      { key: "C", text: "Tell them to return when they are calm." },
      { key: "D", text: "Promise a grade change to reduce distress." },
    ],
    best: "B",
    feedbackByOption: {
      A: "Detailed public critique often increases distress and social pressure.",
      B: "Recommended first move. You reduce pressure while preserving support and boundaries.",
      C: "A hard dismissal may protect time but can feel invalidating.",
      D: "Changing marks to reduce distress undermines fairness and policy integrity.",
    },
    why:
      "It protects dignity, lowers pressure, and keeps boundaries around grading decisions.",
    risk: "Could delay immediate clarification.",
    followUp: "Set a concrete time for review so the student still feels supported.",
  },
];

export const HOME_COPY = {
  title: "Scenarios",
  intro:
    "The situations below are meant as reflection exercises, not scripts or rules. Teaching contexts vary widely, and there is rarely one correct response.",
  emphasis:
    "Each option has strengths, trade-offs, and risks depending on timing, tone, power dynamics, and course expectations.",
  callout:
    "The goal is not to choose perfectly, but to build awareness, intentionality, and confidence in how you respond.",
  startLabel: "Start Scenarios",
};

export const MODULE_CATALOG = [
  {
    id: "concept",
    chipLabel: "Concept Check",
    chipColor: "yellow",
    title: "Concept Check",
    desc: "Quick scenario-aligned checks on boundaries, de-escalation, and role clarity.",
    helper:
      "Choose the best answer for each question. After you make a selection, you will see a discussion with reasoning and a practical takeaway.",
    viewType: "choice",
    promptKey: "question",
    optionsKey: "options",
    answerKey: "correct",
    feedbackByOptionKey: "feedbackByOption",
    fallbackFeedbackKey: "feedback",
    feedbackTitles: {
      correct: "Strong answer.",
      incorrectPrefix: "Better answer: ",
    },
    showFallbackWhenWrong: true,
    showFallbackWhenCorrect: false,
    noteFields: [{ key: "takeaway", className: "moduleTakeaway", when: "always" }],
    items: CONCEPT_CHECK_ITEMS,
  },
  {
    id: "definitions",
    chipLabel: "Definitions",
    chipColor: "mint",
    title: "Definitions",
    desc: "Plain-language references for high-impact teaching terms.",
    helper:
      "Use these as short teaching-ready definitions, with a common mix-up and concrete example.",
    viewType: "definitions",
    definitionTitleKey: "term",
    definitionSections: [
      { key: "plain", label: "Plain language" },
      { key: "whyItMatters", label: "Why it matters" },
      { key: "commonMixup", label: "Common mix-up" },
    ],
    definitionCalloutKey: "example",
    items: DEFINITIONS_ITEMS,
  },
  {
    id: "examples",
    chipLabel: "Examples",
    chipColor: "lilac",
    title: "Examples",
    desc: "Compare response options and identify the strongest professional move.",
    helper:
      "Select an option to see why it works (or does not) and how to improve your wording.",
    viewType: "choice",
    promptKey: "prompt",
    optionsKey: "options",
    answerKey: "best",
    feedbackByOptionKey: "feedbackByOption",
    fallbackFeedbackKey: "rationale",
    feedbackTitles: {
      correct: "Best-fit response.",
      incorrectPrefix: "Best-fit response: ",
    },
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
    items: EXAMPLES_ITEMS,
  },
  {
    id: "tricky",
    chipLabel: "Tricky Cases",
    chipColor: "pink",
    title: "Tricky Cases",
    desc: "High-pressure edge cases with trade-offs and escalation decisions.",
    helper: "Pick a first move, then review the risk and suggested follow-up.",
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
    items: TRICKY_CASES_ITEMS,
  },
];

export function getModuleById(moduleId) {
  return MODULE_CATALOG.find((module) => module.id === moduleId) ?? null;
}
