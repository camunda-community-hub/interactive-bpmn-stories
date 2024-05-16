import dummyBpmnUrl from "/bpmn-stories/group2/dummy.bpmn?url";
import dummyDmnUrl from "/bpmn-stories/group2/dummy.dmn?url";
import dummyFormUrl from "/bpmn-stories/group2/dummy.form?url";
import tripCompensationUrl from "/bpmn-stories/group2/TripCompensation.bpmn?url";
import tripCancelUrl from "/bpmn-stories/group2/tripCancel.bpmn?url";

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
            question: "I'd like you to extent the process. Once a person becomes sick, all the bookings need to be cancelled. How would you model that?",
            answers: [
              {
                keyword: "q1-incorrect-1",
                text: "Each answer has a specific keyword which is used to progress in the story.",
              },
              {
                keyword: "q1-incorrect-2",
                text: 'The first two answers lead to "bad endings".',
              },
              {
                keyword: "q1-correct-1",
                text: "This is the correct answer.",
              },
            ],
          },
          {
            position: 5,
            type: "question",
            question: "This is a question?",
            answers: [
              {
                keyword: "q1-incorrect-1",
                text: "A",
              },
              {
                keyword: "q1-incorrect-2",
                text: 'B',
              },
              {
                keyword: "q1-correct-1",
                text: "C",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q1-incorrect-1"],
        messages: [
          {
            position: 6,
            type: "ending",
            isGoodEnding: false,
            title: "Wrong Answer",
            text: "This is an example for a bad ending.",
          },
        ],
      },
      {
        conditions: ["q1-incorrect-2"],
        messages: [
          {
            position: 6,
            type: "narration",
            text: "We can also add conversation before our bad ending.",
          },
          {
            position: 7,
            type: "ending",
            isGoodEnding: false,
            title: "Different Title",
            text: "This is another bad ending with a different title.",
          },
        ],
      },
      {
        conditions: ["q1-correct-1"],
        messages: [
          {
            position: 6,
            type: "narration",
            text: "You can create multiple threads and use keywords to let your story play out the way you want it to!",
          },
          {
            position: 7,
            type: "message",
            participant: "1",
            text: "Displaying BPMN, DMN and Forms has the same thread/keyword system.",
          },
          {
            position: 8,
            type: "message",
            participant: "2",
            text: "But don't make your story too complex! Using multiple threads that depend on different keywords is optional.",
          },
          {
            position: 9,
            type: "message",
            participant: "1",
            text: "We made to the end of our demo story!",
          },
          {
            position: 10,
            type: "ending",
            isGoodEnding: true,
            title: "The End",
            text: "Have fun creating your own stories!",
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
            fileNames: [tripCompensationUrl],
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
