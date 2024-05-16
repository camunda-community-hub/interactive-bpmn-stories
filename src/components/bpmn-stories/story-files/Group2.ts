import dummyBpmnUrl from "/bpmn-stories/group2/dummy.bpmn?url";
import dummyDmnUrl from "/bpmn-stories/group2/dummy.dmn?url";
import dummyFormUrl from "/bpmn-stories/group2/dummy.form?url";

export const Group2: bpmnStory[] = [
  {
    id: "compensation",
    title: "Group2 - Compensation Commando",
    description: "Welcome to \"The Compensation Commando,\" where your BPMN expertise will be put to the test.\n" +
        "\n" +
        "Dive into a story where the compensation event is a pivotal challenge that can make or break the workflow. Navigate through an intricate process and marvel at its simplicity.\n" +
        "\n" +
        "Will you master the art of compensation and restore balance? Test your knowledge, sharpen your skills, and embrace the adventure. Are you ready to take on the challenge?",
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
    ],
    difficulty: {
      bpmn: 4,
      dmn: 0,
      forms: 0,
    },
    tags: ["BPMN"],
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
            question: "I'd like you to extend the process. Once a person becomes sick, all the bookings need to be cancelled. How would you model that? Do you know the compensation event?",
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
            type: "ending",
            isGoodEnding: false,
            title: "So messy",
            text: "I think it blows up our entire process model. I heard a colleague talk about compensations. Can you look them up and remodel the process?",
          },
        ],
      },
      {
        conditions: ["q1-pro"],
        messages: [
          {
            position: 5,
            type: "narration",
            text: "We can also add conversation before our bad ending.",
          },
          {
            position: 6,
            type: "ending",
            isGoodEnding: false,
            title: "Different Title",
            text: "This is another bad ending with a different title.",
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
            fileNames: [dummyBpmnUrl],
          },
          {
            position: 6,
            fileNames: [dummyDmnUrl],
          },
          {
            position: 8,
            fileNames: [dummyFormUrl],
          },
        ],
      },
    ],
  },
];
