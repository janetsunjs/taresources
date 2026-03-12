export const SCENARIOS = [
  {
    id: "grading",
    title: "Scenario 1: A Student Challenges Your Grading Publicly",
    titleClassName: "scenarioOneTitle",
    blurb:
      "A student challenges their grade loudly during tutorial while other students watch.",
    tag: "Fairness | Compassion",
    situation:
      "You return marked assignments during tutorial. One student raises their voice and says: \"This doesn't make sense. I don't see why I lost marks.\" Several classmates look up, and the room becomes quiet as they wait for your response.",
    decisionLensTitle: "In this moment, several priorities may be in tension:",
    decisionLensPoints: [
      "Responding respectfully to the student",
      "Maintaining fairness and transparency in grading",
      "Keeping the tutorial on track for everyone else",
      "Supporting a focused and respectful learning environment",
    ],

    step1: {
      prompt: "What do you do first?",
      choices: [
        {
          key: "A",
          label: "Address the question briefly in front of the class",
          sample:
            "\"That's a fair question. Let's take a quick look together now, and if we need more time we can follow up after class.\"",
          why: [
            "When the concern may be a quick misunderstanding that can be clarified briefly",
            "When transparency about grading criteria could benefit the whole class",
            "When you feel confident the discussion will remain short and constructive",
          ],
          strengths: [
            "Models openness and accountability",
            "Can quickly resolve confusion",
            "Signals that thoughtful questions are welcome",
          ],
          risks: [
            "The student may feel embarrassed in front of peers",
            "The discussion could become longer than intended",
            "It may unintentionally turn into a public debate",
          ],
        },

        {
          key: "B",
          label: "Invite the student to discuss it after class",
          sample:
            "\"I'm happy to go through this with you - let's chat right after class so we can give it proper attention.\"",
          why: [
            "When the discussion may require more time than the tutorial allows",
            "When you want to avoid turning the moment into a public debate",
            "When a private conversation may help the student feel more comfortable",
          ],
          strengths: [
            "Protects the learning environment for the class",
            "Allows a more thoughtful and detailed explanation",
            "Helps maintain the student's dignity in front of peers",
          ],
          risks: [
            "The student may initially feel their concern is being postponed",
            "Other students may still wonder about grading criteria",
          ],
        },

        {
          key: "C",
          label: "Reference regrade policy and guide next steps",
          sample:
            "\"For regrade requests, the course policy asks that we follow this process - I can help you navigate that.\"",
          why: [
            "When grading concerns relate to formal regrade procedures",
            "When instructor approval is required for grade adjustments",
            "When maintaining consistent application of course policy is important",
          ],
          strengths: [
            "Maintains consistency with course rules",
            "Clarifies the role of the TA within course decision-making",
            "Reinforces transparent grading procedures",
          ],
          risks: [
            "May feel procedural if not paired with empathy",
            "Some students may still want immediate clarification",
          ],
        },

        {
          key: "D",
          label: "Acknowledge briefly and continue the tutorial",
          sample:
            "\"Let's continue for now, and we can take a closer look at your feedback after class.\"",
          why: [
            "When the situation feels unexpected and you need a moment to gather your thoughts",
            "When you want to avoid reacting impulsively in front of the class",
          ],
          strengths: [
            "Creates a moment to pause before responding more fully",
            "Keeps the tutorial moving while giving yourself time to think",
          ],
          risks: [
            "The student may feel their concern was not fully acknowledged",
            "The response may come across as dismissive if tone is not careful",
            "The issue still needs to be addressed later",
          ],
        },
      ],
    },

    escalation: {
      context:
        "The student continues pressing the issue. Several classmates are now watching the exchange.",
      prompt: "What do you do next?",
      choices: [
        {
          key: "A",
          label: "Move the conversation to a private follow-up",
          sample:
            "\"I hear that this is frustrating. Let's go through it together after class so we can give it the time it deserves.\"",
          why: [
            "When emotions are rising and the discussion is becoming public",
            "When a private conversation may help de-escalate tension",
          ],
          strengths: [
            "Reduces pressure in front of peers",
            "Keeps the tutorial moving forward",
            "Encourages a calmer discussion later",
          ],
          risks: [
            "The student may still want an immediate explanation",
            "Other students may remain curious about grading criteria",
          ],
        },

        {
          key: "B",
          label: "Give a short rubric reminder to the class",
          sample:
            "\"Just a quick reminder: marks were based on the rubric, especially clarity of reasoning and correct units. I'm happy to discuss individual feedback after class.\"",
          why: [
            "When multiple students may share the same grading question",
            "When reinforcing the rubric could benefit the whole class",
          ],
          strengths: [
            "Supports transparency in grading",
            "Helps the entire class understand expectations",
            "Reduces repeated questions later",
          ],
          risks: [
            "Could feel like defending the grading publicly",
            "May invite additional questions in the moment",
          ],
        },

        {
          key: "C",
          label: "Use a neutral question to narrow the concern",
          sample:
            "\"Thanks for raising it. Which part of the rubric felt unclear - the method, explanation, or something else?\"",
          why: [
            "When you want to clarify the specific concern",
            "When shifting the conversation toward problem-solving may help",
          ],
          strengths: [
            "Encourages a more focused discussion",
            "Shows respect for the student's concern",
          ],
          risks: [
            "The discussion could still continue publicly",
            "The student may struggle to respond calmly",
          ],
        },

        {
          key: "D",
          label: "Align with the instructor for a consistent follow-up",
          sample:
            "\"I'll check in with the instructor so we can make sure we're applying the policy consistently.\"",
          why: [
            "When the situation may require instructor input",
            "When consistency across the course is important",
          ],
          strengths: [
            "Maintains clear role boundaries",
            "Ensures consistent decisions across students",
          ],
          risks: [
            "Resolution may take longer",
            "The student may feel the issue has been deferred",
          ],
        },
      ],
    },
    reflection: {
      title: "Reflection",
      prompt: "Which priority did this response emphasize most?",
      priorities: [
        "Student dignity",
        "Transparency in grading",
        "Maintaining classroom flow",
        "Following course policy",
      ],
    },
  },
  {
    id: "groupConflict",
    title: "Scenario 2: Uneven Participation During a Group Activity",
    blurb:
      "During a small-group activity, one student is speaking much more than others while another student has stopped participating.",
    tag: "Group Dynamics | Inclusion",

    situation:
      "Students are working in small groups to solve a tutorial problem. As you circulate around the room, you notice one group where a single student is doing most of the talking. They frequently jump in with answers and continue explaining their ideas while others try to speak. Another student in the group has gradually stopped contributing and is looking down at their notes. The rest of the group appears unsure how to proceed.",
    decisionLensTitle: "In this moment, several priorities may be in tension:",
    decisionLensPoints: [
      "Supporting balanced participation and inclusion",
      "Protecting student dignity during conflict",
      "Keeping the group focused on the task",
      "Maintaining tutorial momentum for the full class",
    ],

    step1: {
      prompt: "What do you do first?",
      choices: [
        {
          key: "A",
          label: "Pause and reset the group's participation norms",
          sample:
            "\"Let's pause for a moment. I'd like to hear one idea from each person before we continue.\"",
          why: [
            "When the discussion would benefit from more balanced participation",
            "When a brief reset can help refocus the group on collaborative problem solving",
            "When the group dynamic can still be adjusted within the activity",
          ],
          strengths: [
            "Rebalances participation quickly",
            "Keeps the focus on the learning task",
            "Avoids singling out any individual student",
          ],
          risks: [
            "The dominant student may still continue to take over",
            "The quieter student may still hesitate to contribute",
          ],
        },

        {
          key: "B",
          label: "Briefly check in with the quieter student",
          sample:
            "\"How is this approach working for you? Is there something you'd like to add to the discussion?\"",
          why: [
            "When a student appears to be withdrawing from the conversation",
            "When a supportive prompt may help re-engage them in the discussion",
          ],
          strengths: [
            "Signals that their participation is valued",
            "Can help restore psychological safety within the group",
          ],
          risks: [
            "May place the student on the spot if they are uncomfortable speaking",
            "Does not immediately change the overall group dynamic",
          ],
        },

        {
          key: "C",
          label: "Assign short rotating roles for the next round",
          sample:
            "\"Let's try assigning roles for the next few minutes - facilitator, note-taker, and reporter - so everyone has a clear way to contribute.\"",
          why: [
            "When the group would benefit from clearer structure",
            "When defined roles can help distribute participation more evenly",
          ],
          strengths: [
            "Provides a clear framework for participation",
            "Reduces the likelihood that one person dominates the discussion",
          ],
          risks: [
            "May feel slightly artificial if introduced abruptly",
            "Requires some facilitation to ensure the roles are followed",
          ],
        },

        {
          key: "D",
          label: "Observe for one more minute before intervening",
          sample:
            "\"I'll give the group another minute to see if the dynamic shifts.\"",
          why: [
            "When you are still assessing whether the situation is temporary",
            "When you want to avoid intervening too quickly",
          ],
          strengths: [
            "Allows the group an opportunity to self-correct",
            "Gives you more context before stepping in",
          ],
          risks: [
            "The imbalance may continue or worsen",
            "The quieter student may disengage further",
          ],
        },
      ],
    },

    escalation: {

      context:
        "The dominant student becomes defensive and says, \"Well, no one else is saying anything anyway.\" The quieter student looks uncomfortable and turns away while nearby groups start noticing the tension.",

      prompt: "What do you do next?",

      choices: [
        {
          key: "A",
          label: "Name the norm and redirect to process",
          sample:
            "\"Let's slow down for a moment. I want to make sure everyone has space to contribute before we move forward.\"",
          why: [
            "When the conversation has shifted toward personal frustration",
            "When a reminder of collaborative expectations may help reset the tone",
          ],
          strengths: [
            "Protects the dignity of both students",
            "Re-establishes expectations for respectful participation",
          ],
          risks: [
            "The student may still feel defensive",
            "You may need to follow up after class if tensions remain",
          ],
        },

        {
          key: "B",
          label: "Temporarily re-pair students for this task",
          sample:
            "\"Let's mix groups for the next part of the activity and compare approaches afterward.\"",
          why: [
            "When the current group dynamic is no longer productive",
            "When a change in grouping may help students re-engage",
          ],
          strengths: [
            "Quickly reduces immediate tension",
            "Allows students to reset in a different environment",
          ],
          risks: [
            "May feel abrupt if the reason is unclear",
            "Does not directly address the original dynamic",
          ],
        },

        {
          key: "C",
          label: "Run a one-minute turn-taking structure",
          sample:
            "\"Let's try this: each person takes about 30 seconds to share one idea before we respond.\"",
          why: [
            "When the group would benefit from a clear structure for speaking",
            "When turn-taking can help create space for quieter voices",
          ],
          strengths: [
            "Creates more equitable participation",
            "Keeps the discussion focused on the task",
          ],
          risks: [
            "May feel mechanical if used repeatedly",
            "Requires active facilitation to maintain",
          ],
        },

        {
          key: "D",
          label: "Document and coordinate follow-up with the instructor",
          sample:
            "\"I'll make a note of this interaction and check in with the instructor so we can support the group appropriately.\"",
          why: [
            "When the dynamic appears persistent or sensitive",
            "When additional support or guidance may be needed",
          ],
          strengths: [
            "Creates an opportunity for thoughtful follow-up",
            "Ensures consistency with course expectations",
          ],
          risks: [
            "The issue may remain unresolved during the tutorial",
            "Students may want more immediate guidance",
          ],
        },
      ],
    },
    reflection: {
      title: "Reflection",
      prompt: "Which priority did this response emphasize most?",
      priorities: [
        "Equitable participation",
        "Student dignity during disagreement",
        "Task progress and classroom flow",
        "Longer-term group accountability",
      ],
    },
  },
  {
    id: "boundaries",
    title: "Scenario 3: A Student Pushes Boundaries Repeatedly",
    blurb:
      "A student emails frequently, asks for exceptions, and pushes deadlines.",
    tag: "Boundaries | De-escalation",
    situation:
      "A student sends frequent requests for special treatment, asks for one-off deadline changes, and follows up repeatedly when you do not reply quickly.",
    decisionLensTitle: "In this moment, several priorities may be in tension:",
    decisionLensPoints: [
      "Responding with care to student stress",
      "Maintaining fairness and consistency across students",
      "Setting sustainable communication boundaries",
      "Staying aligned with course policy and instructor expectations",
    ],
    step1: {
      prompt: "What do you do first?",
      choices: [
        {
          key: "A",
          label: "Approve the request immediately to reduce tension",
          sample:
            "\"I'll approve this extension now and we can discuss process later.\"",
          why: [
            "You want to de-escalate immediately",
            "You are trying to be supportive under pressure",
          ],
          strengths: [
            "Can calm the immediate interaction",
          ],
          risks: [
            "Can create precedent and inconsistency",
            "May increase future boundary pressure",
          ],
        },
        {
          key: "B",
          label: "Acknowledge concern and point to the official process",
          sample:
            "\"I understand this is stressful. Let's use the course request process so your case is handled consistently.\"",
          why: [
            "You want to be warm and firm",
            "You want fair treatment across students",
          ],
          strengths: [
            "Maintains empathy and policy alignment",
            "Sets clear expectations for future requests",
          ],
          risks: [
            "Student may feel frustrated in the moment",
            "May require repeated reinforcement",
          ],
        },
        {
          key: "C",
          label: "Forward to the instructor and pause direct response",
          sample:
            "\"I will pass this to the instructor.\"",
          why: [
            "You want to avoid overstepping your role",
            "You feel the pattern is beyond TA scope",
          ],
          strengths: [
            "Protects role boundaries",
            "Ensures instructor visibility",
          ],
          risks: [
            "Silence can feel abrupt to the student",
            "Misses chance for immediate boundary-setting language",
          ],
        },
        {
          key: "D",
          label: "Wait until office hours before replying",
          sample:
            "\"I'll address this later when I have time.\"",
          why: [
            "You need space to respond carefully",
            "You don't want reactive replies",
          ],
          strengths: [
            "Prevents rushed decisions",
          ],
          risks: [
            "Lack of acknowledgment can escalate anxiety",
            "May invite repeated follow-up pressure",
          ],
        },
      ],
    },
    escalation: {
      context:
        "The student sends repeated follow-ups, says your response is unfair compared with other students, and pushes for \"just this one exception.\" You need to stay supportive while protecting clear boundaries.",
      prompt: "What do you do next?",
      choices: [
        {
          key: "A",
          label: "Re-state boundary with empathy and concrete next steps",
          sample:
            "\"I hear that this feels urgent. I can't approve exceptions outside policy, but I can help you submit the request correctly today.\"",
          why: [
            "You want to remain supportive without moving boundaries",
            "You want to reduce ambiguity in next steps",
          ],
          strengths: [
            "Balances care and consistency",
            "Gives student an actionable path forward",
          ],
          risks: [
            "May still be challenged if student wants immediate exception",
          ],
        },
        {
          key: "B",
          label: "Consider a documented one-time exception with instructor alignment",
          sample:
            "\"I can make a one-time accommodation only after confirming with the instructor and recording the rationale.\"",
          why: [
            "You want flexibility in exceptional cases",
            "You want transparent accountability",
          ],
          strengths: [
            "Allows context-sensitive support",
            "Maintains documentation and oversight",
          ],
          risks: [
            "Can still be perceived as inconsistent by peers",
            "May encourage future exception requests",
          ],
        },
        {
          key: "C",
          label: "Set clear communication limits and official channels",
          sample:
            "\"I respond to course messages during posted hours in the official channel. Please use that channel for follow-up.\"",
          why: [
            "You need sustainable communication boundaries",
            "You want consistency and transparency",
          ],
          strengths: [
            "Reduces after-hours pressure",
            "Clarifies professional expectations",
          ],
          risks: [
            "Can feel impersonal without empathetic framing",
          ],
        },
        {
          key: "D",
          label: "Escalate with concise documentation to the instructor",
          sample:
            "\"I'll share a factual summary with the instructor so we can respond consistently at the course level.\"",
          why: [
            "Pattern is repeated and high-friction",
            "You want shared decision-making",
          ],
          strengths: [
            "Protects TA role boundaries",
            "Creates course-level consistency",
          ],
          risks: [
            "Resolution may feel slower for student",
          ],
        },
      ],
    },
    reflection: {
      title: "Reflection",
      prompt: "Which priority did this response emphasize most?",
      priorities: [
        "Supporting the student in the moment",
        "Fairness and consistency across the class",
        "Sustainable TA communication boundaries",
        "Instructor and policy alignment",
      ],
    },
  },
];

export function getScenarioById(id) {
  return SCENARIOS.find((scenario) => scenario.id === id) ?? null;
}

