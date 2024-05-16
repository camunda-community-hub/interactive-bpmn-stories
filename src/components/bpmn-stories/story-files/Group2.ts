import tripCompensationUrl from "/bpmn-stories/group2/TripCompensation.bpmn?url";
import tripCompensationUrl1 from "/bpmn-stories/group2/TripCompensation_1.bpmn?url";
import tripCompensationUrl2 from "/bpmn-stories/group2/TripCompensation_2.bpmn?url";
import tripCancelUrl from "/bpmn-stories/group2/TripCancel.bpmn?url";
import tripUrl from "/bpmn-stories/group2/Trip.bpmn?url";

export const Group2: bpmnStory[] = [
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
    tags: ["BPMN", "Compensation"],
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
            fileNames: [tripUrl],
          },
        ],
      },
      {
        conditions: ["q1-beginner"],
        files: [
          {
            position: 6,
            fileNames: [tripCancelUrl],
          },
        ],
      },
      {
        conditions: ["q1-pro"],
        files: [
          {
            position: 5,
            fileNames: [tripCompensationUrl],
          },
          {
            position: 8,
            fileNames: [tripCompensationUrl1],
          },
          {
            position: 9,
            fileNames: [tripCompensationUrl2],
          },
        ],
      },
    ],
  },
];
