import subProcess1BpmnUrl from "/bpmn-stories/group4/subprocess_1.bpmn?url";
import subProcess2BpmnUrl from "/bpmn-stories/group4/subprocess_2.bpmn?url";
import subProcess3BpmnUrl from "/bpmn-stories/group4/subprocess_3.bpmn?url";

export const Group4: bpmnStory[] = [
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
    tags: ["BPMN", "Subprocess"],
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
            fileNames: [subProcess1BpmnUrl],
          },
          {
            position: 5,
            fileNames: [subProcess2BpmnUrl],
          },
          {
            position: 7,
            fileNames: [subProcess3BpmnUrl],
          },
        ],
      },
    ],
  },
];
