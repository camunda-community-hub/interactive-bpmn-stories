// group 1 assets
import group1final11 from "/hackdays2024/group1/Final-1-1-checkHouse.bpmn?url";
import group1final12 from "/hackdays2024/group1/Final-1-2-friendCalls.bpmn?url";
import group1final1 from "/hackdays2024/group1/Final-1-escapeAttemptFailed.bpmn?url";
import group1final2 from "/hackdays2024/group1/Final-2-continueOutside.bpmn?url";
import group1final3 from "/hackdays2024/group1/Final-3-runOut.bpmn?url";
import group1final5 from "/hackdays2024/group1/Final-5-rightThingOrDash.bpmn?url";
import group1final6 from "/hackdays2024/group1/Final-6-getMeOutOfHere.bpmn?url";
import group1final7 from "/hackdays2024/group1/Final-7-noticeMoney.bpmn?url";
import group1final8 from "/hackdays2024/group1/Final-8-grabDrink.bpmn?url";
import group1final9 from "/hackdays2024/group1/Final-9-smallTalk.bpmn?url";
import group1finalS from "/hackdays2024/group1/Final-spaces.bpmn?url";
import group1finalT from "/hackdays2024/group1/Final-tabs.bpmn?url";
import group1final10 from "/hackdays2024/group1/Final-x10-metAtBar.bpmn?url";
import group1final from "/hackdays2024/group1/Final.bpmn?url";

//group 2 assets
import group2tripCompensationUrl from "/hackdays2024/group2/TripCompensation.bpmn?url";
import group2tripCompensationUrl1 from "/hackdays2024/group2/TripCompensation_1.bpmn?url";
import group2tripCompensationUrl2 from "/hackdays2024/group2/TripCompensation_2.bpmn?url";
import group2tripCancelUrl from "/hackdays2024/group2/TripCancel.bpmn?url";
import group2tripUrl from "/hackdays2024/group2/Trip.bpmn?url";

//group 3 assets
import group3subProcess1BpmnUrl from "/hackdays2024/group3/subprocess_1.bpmn?url";
import group3subProcess2BpmnUrl from "/hackdays2024/group3/subprocess_2.bpmn?url";
import group3subProcess3BpmnUrl from "/hackdays2024/group3/subprocess_3.bpmn?url";

export const Hackdays2024: bpmnStory[] = [
  // group 1 story
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
    tags: ["BPMN", "Termination Events", "Scope", "Subprocess", "Hackdays"],
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
            fileNames: [group1final],
          },
          {
            position: 2,
            fileNames: [group1final10],
          },
          {
            position: 4,
            fileNames: [group1final9],
          },
          {
            position: 5,
            fileNames: [group1final8],
          },
          {
            position: 6,
            fileNames: [group1final7],
          },
          {
            position: 7,
            fileNames: [group1final6],
          },
          {
            position: 9,
            fileNames: [group1final5],
          },
          {
            position: 11,
            fileNames: [group1final3],
          },
          {
            position: 13,
            fileNames: [group1final2],
          },
          {
            position: 14,
            fileNames: [group1final12],
          },
          {
            position: 15,
            fileNames: [group1final1],
          },
        ],
      },
      {
        conditions: ["q2-tabs"],
        files: [
          {
            position: 18,
            fileNames: [group1finalT, group1final],
          },
        ],
      },
      {
        conditions: ["q2-spaces"],
        files: [
          {
            position: 18,
            fileNames: [group1finalS, group1final],
          },
        ],
      },
    ],
  },
  //group 2 story
  {
    id: "compensation",
    title: "Compensation Commando",
    description:
      "Dive into a story where the compensation event is a pivotal challenge that can make or break the workflow. Navigate through an intricate process and marvel at its simplicity.\n" +
      "\n" +
      "Will you master the art of compensation and restore balance? Test your knowledge, sharpen your skills, and embrace the adventure.",
    participants: [
      {
        id: "1",
        protagonist: true,
        role: "Trainer",
        name: "Jess",
        emoji: "👩🏿",
      },
      {
        id: "2",
        protagonist: false,
        role: "Student",
        name: "Wolfgang",
        emoji: "🙋🏻‍♂️",
      },
      {
        id: "3",
        protagonist: false,
        role: "Another Student",
        name: "Mary",
        emoji: "👩‍🦰",
      },
    ],
    difficulty: {
      bpmn: 4,
      dmn: 0,
      forms: 0,
    },
    tags: ["BPMN", "Compensation", "Hackdays"],
    conversation: [
      {
        conditions: [],
        messages: [
          {
            position: 1,
            type: "narration",
            text: "Welcome to the Compensation Commando! Please click the button (>) below to follow the dialogue.",
          },
          {
            position: 2,
            type: "message",
            participant: "1",
            text: "Hey Wolfgang, my name is Jess. Ready for a challenge? Please have a look at the process on the right.",
          },
          {
            position: 3,
            type: "message",
            participant: "2",
            text: "Hey Jess, nice process. I got it!",
          },
          {
            position: 4,
            type: "question",
            participant: "1",
            question:
              "I'd like you to extend the process. Once a person becomes sick, all the bookings need to be cancelled. How would you model that? Do you know the compensation event?",
            answers: [
              {
                keyword: "q1-beginner",
                text: "Never heard of compensation. What's that?",
              },
              {
                keyword: "q1-pro",
                text: "I'm a compensation pro! How to live without it?",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q1-beginner"],
        messages: [
          {
            position: 5,
            type: "message",
            participant: "1",
            text: "Alright. Then let's see how you would model the process. Please, go ahead :)",
          },
          {
            position: 6,
            type: "message",
            participant: "2",
            text: "Here's what I came up with. Do you like it?",
          },
          {
            position: 7,
            type: "message",
            participant: "1",
            text: "Hmm, a good start, but maybe not the best solution.",
          },
          {
            position: 8,
            type: "question",
            participant: "1",
            question: "Could you imagine why?",
            answers: [
              {
                keyword: "q2-wrong1",
                text: "It has syntatcical BPMN errors",
              },
              {
                keyword: "q2-wrong2",
                text: "It does not work correctly",
              },
              {
                keyword: "q2-right",
                text: "It works, but the model is overly complex",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q2-wrong1"],
        messages: [
          {
            position: 9,
            type: "ending",
            isGoodEnding: false,
            title: "So messy",
            text: "No, I think it blows up our entire process model. I heard a colleague talk about compensations. Can you look them up and remodel the process?",
          },
        ],
      },
      {
        conditions: ["q2-wrong2"],
        messages: [
          {
            position: 9,
            type: "ending",
            isGoodEnding: false,
            title: "So messy",
            text: "No, I think it blows up our entire process model. I heard a colleague talk about compensations. Can you look them up and remodel the process?",
          },
        ],
      },
      {
        conditions: ["q2-right"],
        messages: [
          {
            position: 9,
            type: "ending",
            isGoodEnding: true,
            title: "Not so elegant",
            text: "Correct, I think it blows up our entire process model. I heard a colleague talk about compensations. Can you look them up and remodel the process?",
          },
        ],
      },
      {
        conditions: ["q1-pro"],
        messages: [
          {
            position: 5,
            type: "message",
            participant: "2",
            text: "Here's the updated process model using compensation. Do you love it as much as I do?",
          },
          {
            position: 6,
            type: "message",
            participant: "3",
            text: "Hey guys, that looks interesting! Could you explain in a bit more detail?",
          },
          {
            position: 7,
            type: "message",
            participant: "1",
            text: "Sure! It works as follows:",
          },
          {
            position: 8,
            type: "message",
            participant: "1",
            text: "When the process reaches the throwing Compensation Events, the compensation is started.",
          },
          {
            position: 9,
            type: "message",
            participant: "1",
            text: "The process engines then starts the compensations for catching Compensation Events only if that corresponding activity was executed before.",
          },
          {
            position: 10,
            type: "ending",
            isGoodEnding: true,
            title: "So compact!",
            text: "I love the simplicity. Well done! I hope you learned something new :)",
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
            fileNames: [group2tripUrl],
          },
        ],
      },
      {
        conditions: ["q1-beginner"],
        files: [
          {
            position: 6,
            fileNames: [group2tripCancelUrl],
          },
        ],
      },
      {
        conditions: ["q1-pro"],
        files: [
          {
            position: 5,
            fileNames: [group2tripCompensationUrl],
          },
          {
            position: 8,
            fileNames: [group2tripCompensationUrl1],
          },
          {
            position: 9,
            fileNames: [group2tripCompensationUrl2],
          },
        ],
      },
    ],
  },
  // group 3 story
  {
    id: "bpmn_subprocess_stories",
    title: "BPMN Embedded Subprocesses",
    description:
      "This interactive tutorial is an interactive short story version of Camunda Academy's BPMN Subprocesses course - Embedded subprocesses part.",
    participants: [
      {
        id: "1",
        protagonist: true,
        role: "Trainer",
        name: "CamunDiaz",
        emoji: "🧠",
      },
      {
        id: "2",
        protagonist: false,
        role: "Student",
        name: "GeneraLion",
        emoji: "🦁",
      },
    ],
    difficulty: {
      bpmn: 2,
      dmn: 0,
      forms: 0,
    },
    tags: ["BPMN", "Subprocess", "Hackdays"],
    conversation: [
      {
        conditions: [],
        messages: [
          {
            position: 1,
            type: "narration",
            text: "This story will be about BPMN embedded subprocesses - for further details on the topic, please refer to the BPMN Subprocesses course on the Camunda Academy!",
          },
          {
            position: 2,
            type: "message",
            participant: "1",
            text: "Hi there! Today's topic will be about BPMN subprocesses. Does anybody know, why do we use subprocesses?",
          },
          {
            position: 3,
            type: "question",
            question: "... That was a question, duh!",
            answers: [
              {
                keyword: "q1-incorrect-1",
                text: "To make our life more complicated!",
              },
              {
                keyword: "q1-incorrect-2",
                text: "To show that we can do that!",
              },
              {
                keyword: "q1-correct-1",
                text: "To help us to modularize our process",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q1-incorrect-1"],
        messages: [
          {
            position: 4,
            type: "ending",
            isGoodEnding: false,
            title: "Wrong group",
            text: "If you really think so, you should have chosen the complexity over quality task instead! See you next year!",
          },
        ],
      },
      {
        conditions: ["q1-incorrect-2"],
        messages: [
          {
            position: 4,
            type: "ending",
            isGoodEnding: false,
            title: "Mr Can Do",
            text: "Just because we can do something, it does not mean that we should!",
          },
        ],
      },
      {
        conditions: ["q1-correct-1"],
        messages: [
          {
            position: 4,
            type: "message",
            participant: "2",
            text: "OK, modularization always makes sense - but can I somehow hide the details of this subprocess, in case I am not interested in it?",
          },
          {
            position: 5,
            type: "message",
            participant: "1",
            text: "Sure, you can! We can use the collapsed view to hide the details - this makes sense, if the user whom the model is shown is not interested in the low-level details.",
          },
          {
            position: 6,
            type: "message",
            participant: "2",
            text: "OK, that was easy! But this process was very simple in the first place - could you show us a case where it makes more sense to use a subprocess?",
          },
          {
            position: 7,
            type: "message",
            participant: "1",
            text: "Sure! What about this one? Can you see, why does it make sense, to use a subprocess here?",
          },
          {
            position: 8,
            type: "message",
            participant: "2",
            text: "Uhm... It's about those funny circles on the border, right?",
          },
          {
            position: 9,
            type: "message",
            participant: "1",
            text: "Correct! With subprocesses, we can define so-called boundary events - this way we can attach events to a specific scope! ",
          },
          {
            position: 10,
            type: "message",
            participant: "1",
            text: "These boundary events can be either interrupting (indicated by solid lines, to abort the run of the subprocess) - or non-interrupting - indicated by dashed lines, in case our subprocess can run further.",
          },
          {
            position: 11,
            type: "message",
            participant: "2",
            text: "I think I'm getting the hang of it! Thanks for the explanation!",
          },
          {
            position: 12,
            type: "ending",
            isGoodEnding: true,
            title: "The End",
            text: "Have fun creating your own processes with subprocesses!",
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
            fileNames: [group3subProcess1BpmnUrl],
          },
          {
            position: 5,
            fileNames: [group3subProcess2BpmnUrl],
          },
          {
            position: 7,
            fileNames: [group3subProcess3BpmnUrl],
          },
        ],
      },
    ],
  },
];
