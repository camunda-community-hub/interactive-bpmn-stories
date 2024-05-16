import final11 from "/bpmn-stories/group1/Final-1-1-checkHouse.bpmn?url";
import final12 from "/bpmn-stories/group1/Final-1-2-friendCalls.bpmn?url";
import final1 from "/bpmn-stories/group1/Final-1-escapeAttemptFailed.bpmn?url";
import final2 from "/bpmn-stories/group1/Final-2-continueOutside.bpmn?url";
import final3 from "/bpmn-stories/group1/Final-3-runOut.bpmn?url";
import final5 from "/bpmn-stories/group1/Final-5-rightThingOrDash.bpmn?url";
import final6 from "/bpmn-stories/group1/Final-6-getMeOutOfHere.bpmn?url";
import final7 from "/bpmn-stories/group1/Final-7-noticeMoney.bpmn?url";
import final8 from "/bpmn-stories/group1/Final-8-grabDrink.bpmn?url";
import final9 from "/bpmn-stories/group1/Final-9-smallTalk.bpmn?url";
import finalS from "/bpmn-stories/group1/Final-spaces.bpmn?url";
import finalT from "/bpmn-stories/group1/Final-tabs.bpmn?url";
import final10 from "/bpmn-stories/group1/Final-x10-metAtBar.bpmn?url";
import final from "/bpmn-stories/group1/Final.bpmn?url";

export const Group1: bpmnStory[] = [
  {
    id: "WeKnowBPMN!",
    title: "A Never-Ending Date.",
    description:
      "WeKnowBPMN! - Submission to CamundaCon 2024 hackdays. A story about a horrible date that could not be terminated.",
    participants: [
      {
        id: "1",
        protagonist: true,
        role: "",
        name: "Anna",
        emoji: "👩",
      },
      {
        id: "2",
        protagonist: false,
        role: "BFF",
        name: "Charly",
        emoji: "👩🏽‍⚖️",
      },
    ],
    difficulty: {
      bpmn: 3,
      dmn: 0,
      forms: 0,
    },
    tags: ["BPMN", "Termination", "Scope", "Subprocess"],
    conversation: [
      {
        conditions: [],
        messages: [
          {
            position: 1,
            type: "narration",
            text: "Anna and Charly talk about Anna and Betty's date story.",
          },
          {
            position: 2,
            type: "message",
            participant: "1",
            text: "She called me at 5 PM and asked me out to the bar across the street, next to our apartment building.",
          },
          {
            position: 3,
            type: "message",
            participant: "2",
            text: "Sounds interesting, but really spontaneous.",
          },
          {
            position: 4,
            type: "message",
            participant: "1",
            text: "After we met at the bar, we started an interesting tech conversation and found out we were both Camunda engineers.",
          },
          {
            position: 5,
            type: "message",
            participant: "1",
            text: "I offered her a drink and went to the bar.",
          },
          {
            position: 6,
            type: "message",
            participant: "1",
            text: "While waiting for the drinks, I realized I had forgotten my wallet.",
          },
          {
            position: 7,
            type: "message",
            participant: "1",
            text: "I called my friend to help me out of this horrible situation!",
          },
          {
            position: 8,
            type: "question",
            question: "What did you do?",
            answers: [
              {
                keyword: "q1-steal",
                text: "Grab the drink.",
              },
              {
                keyword: "q1-leave",
                text: "Leave without the drink.",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q1-leave"],
        messages: [
          {
            position: 9,
            type: "message",
            participant: "1",
            text: "I left the bar in a panic!",
          },
          {
            position: 10,
            type: "message",
            participant: "2",
            text: "I would have too!",
          },
          {
            position: 11,
            type: "message",
            participant: "1",
            text: "While running away, I noticed that Betty was chasing after me. She wasn't done with our date, even though I was!",
          },
          {
            position: 12,
            type: "message",
            participant: "2",
            text: "🤯",
          },
          {
            position: 13,
            type: "message",
            participant: "1",
            text: "I didn't want to continue the date, but I was polite to Betty, and we continued our date outside. We started talking about coding preferences. Then, my friend called to help me leave the date!",
          },
          {
            position: 14,
            type: "message",
            participant: "2",
            text: "Did your friend get you out of the date?",
          },
          {
            position: 15,
            type: "message",
            participant: "1",
            text: "Sadly, no. My friend said my house was on fire and I had to leave immediately. But, my friend didn't know we could see my house, and it definitely wasn’t on fire. Betty called my bluff and I had to stay…",
          },
          {
            position: 16,
            type: "message",
            participant: "1",
            text: "That wasn’t the worst of it. We started talking about a pet peeve of mine: tabs vs. spaces when coding. I HATE it when people use spaces.",
          },
          {
            position: 17,
            type: "question",
            question: "Did Betty agree with you?",
            answers: [
              {
                keyword: "q2-tabs",
                text: "Yes, she hates spaces!",
              },
              {
                keyword: "q2-spaces",
                text: "No, she uses spaces…",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q1-steal"],
        messages: [
          {
            position: 9,
            type: "message",
            participant: "1",
            text: "I left the bar in a panic!",
          },
          {
            position: 10,
            type: "message",
            participant: "2",
            text: "I would have too!",
          },
          {
            position: 11,
            type: "message",
            participant: "1",
            text: "While running away, I noticed that Betty was chasing after me. She wasn't done with our date, even though I was!",
          },
          {
            position: 12,
            type: "message",
            participant: "2",
            text: "🤯",
          },
          {
            position: 13,
            type: "message",
            participant: "1",
            text: "I didn't want to continue the date, but I was polite to Betty, and we continued our date outside. We started talking about coding preferences. Then, my friend called to help me leave the date!",
          },
          {
            position: 14,
            type: "message",
            participant: "2",
            text: "Did your friend get you out of the date?",
          },
          {
            position: 15,
            type: "message",
            participant: "1",
            text: "Sadly, no. My friend said my house was on fire and I had to leave immediately. But, my friend didn't know we could see my house, and it definitely wasn’t on fire. Betty called my bluff and I had to stay…",
          },
          {
            position: 16,
            type: "message",
            participant: "1",
            text: "That wasn’t the worst of it. We started talking about a pet peeve of mine: tabs vs. spaces when coding. I HATE it when people use spaces.",
          },
          {
            position: 17,
            type: "question",
            question: "Did Betty agree with you?",
            answers: [
              {
                keyword: "q2-tabs",
                text: "Yes, she hates spaces!",
              },
              {
                keyword: "q2-spaces",
                text: "No, she uses spaces…",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q2-tabs"],
        messages: [
          {
            position: 18,
            type: "ending",
            isGoodEnding: true,
            title: "Happy Ending to the Date",
            text: "I knew it was meant to be. We had a rocky start, but we are perfect for each other! The moral of the story is you cannot terminate a process from a subprocess no matter how hard you try.",
          },
        ],
      },
      {
        conditions: ["q2-spaces"],
        messages: [
          {
            position: 18,
            type: "ending",
            isGoodEnding: false,
            title: "Sad Ending to the Date",
            text: "It didn’t work out… The moral of the story is you cannot terminate a process from a subprocess no matter how hard you try.",
          },
        ],
      },
    ],
    fileDisplay: [
      {
        conditions: [],
        files: [
          {
            position: 1,
            fileNames: [final],
          },
          {
            position: 2,
            fileNames: [final10],
          },
          {
            position: 4,
            fileNames: [final9],
          },
          {
            position: 5,
            fileNames: [final8],
          },
          {
            position: 6,
            fileNames: [final7],
          },
          {
            position: 7,
            fileNames: [final6],
          },
          {
            position: 9,
            fileNames: [final5],
          },
          {
            position: 11,
            fileNames: [final3],
          },
          {
            position: 13,
            fileNames: [final2],
          },
          {
            position: 14,
            fileNames: [final12],
          },
          {
            position: 15,
            fileNames: [final1],
          },
        ],
      },
      {
        conditions: ["q2-tabs"],
        files: [
          {
            position: 18,
            fileNames: [finalT, final],
          },
        ],
      },
      {
        conditions: ["q2-spaces"],
        files: [
          {
            position: 18,
            fileNames: [finalS, final],
          },
        ],
      },
    ],
  },
];
