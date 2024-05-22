// bpmn-basics-elements assets
import startBpmnUrl from "/camunda-internal/bpmn-basics-elements/start.bpmn?url";
import allEventsBpmnUrl from "/camunda-internal/bpmn-basics-elements/all-events.bpmn?url";
import startLabeledBpmnUrl from "/camunda-internal/bpmn-basics-elements/start-labeled.bpmn?url";
import startTaskBpmnUrl from "/camunda-internal/bpmn-basics-elements/start-task.bpmn?url";
import allTasksBpmnUrl from "/camunda-internal/bpmn-basics-elements/all-tasks.bpmn?url";
import startTaskCaBpmnUrl from "/camunda-internal/bpmn-basics-elements/start-task-ca.bpmn?url";
import allGatewaysBpmnUrl from "/camunda-internal/bpmn-basics-elements/all-gateways.bpmn?url";
import startTaskCaGwBpmnUrl from "/camunda-internal/bpmn-basics-elements/start-task-ca-gw.bpmn?url";

// operational-modeling-link-events assets
import linkEventsDesignSubprocessBpmnUrl from "/camunda-internal/operational-modeling-link-events/link-events-design-subprocess.bpmn?url";
import linkEventsDesignThreeCatchBpmnUrl from "/camunda-internal/operational-modeling-link-events/link-events-design-three-catch.bpmn?url";
import linkEventsDesignBpmnUrl from "/camunda-internal/operational-modeling-link-events/link-events-design.bpmn?url";
import linkEventsInitialBpmnUrl from "/camunda-internal/operational-modeling-link-events/link-events-initial.bpmn?url";
import linkEventsManualCheckBpmnUrl from "/camunda-internal/operational-modeling-link-events/link-events-manual-check.bpmn?url";
import linkEventsNoPoolCallActivityDesignBpmnUrl from "/camunda-internal/operational-modeling-link-events/link-events-no-pool-call-activity-design.bpmn?url";
import linkEventsNoPoolCallActivityBpmnUrl from "/camunda-internal/operational-modeling-link-events/link-events-no-pool-call-activity.bpmn?url";
import linkEventsNoPoolDesignSubprocessBpmnUrl from "/camunda-internal/operational-modeling-link-events/link-events-no-pool-design-subprocess.bpmn?url";
import linkEventsNoPoolDesignThreeCatchBpmnUrl from "/camunda-internal/operational-modeling-link-events/link-events-no-pool-design-three-catch.bpmn?url";
import linkEventsNoPoolDesignBpmnUrl from "/camunda-internal/operational-modeling-link-events/link-events-no-pool-design.bpmn?url";
import linkEventsNoPoolSubprocessBpmnUrl from "/camunda-internal/operational-modeling-link-events/link-events-no-pool-subprocess.bpmn?url";
import linkEventsNoPoolThreeCatchBpmnUrl from "/camunda-internal/operational-modeling-link-events/link-events-no-pool-three-catch.bpmn?url";
import linkEventsNoPoolBpmnUrl from "/camunda-internal/operational-modeling-link-events/link-events-no-pool.bpmn?url";
import linkEventsSubprocessBpmnUrl from "/camunda-internal/operational-modeling-link-events/link-events-subprocess.bpmn?url";
import linkEventsThreeCatchBpmnUrl from "/camunda-internal/operational-modeling-link-events/link-events-three-catch.bpmn?url";

// operational-modeling-retry assets
import onboardingBpmnUrl from "/camunda-internal/operational-modeling-retry/onboarding.bpmn?url";
import onboardingBoundaryBpmnUrl from "/camunda-internal/operational-modeling-retry/onboarding-boundary.bpmn?url";
import onboardingSubprocessBpmnUrl from "/camunda-internal/operational-modeling-retry/onboarding-subprocess.bpmn?url";

// refactoring-dmn assets
import assignmentInitialDmnUrl from "/camunda-internal/refactoring-dmn/assignment_initial.dmn?url";
import assignmentAllocationDmnUrl from "/camunda-internal/refactoring-dmn/assignment_allocation.dmn?url";
import assignmentAllocationSuitabilityDmnUrl from "/camunda-internal/refactoring-dmn/assignment_allocation_suitability.dmn?url";
import assignmentFeelDmnUrl from "/camunda-internal/refactoring-dmn/assignment_feel.dmn?url";
import assignmentWithLiteralexpressionDmnUrl from "/camunda-internal/refactoring-dmn/assignment_with_literalexpression.dmn?url";
import assignmentWithLiteralexpressionAndAllocationDmnUrl from "/camunda-internal/refactoring-dmn/assignment_with_literalexpression_and_allocation.dmn?url";
import decisionFlowBpmnUrl from "/camunda-internal/refactoring-dmn/decision-flow.bpmn?url";
import keepPreviousAssignmentDmnUrl from "/camunda-internal/refactoring-dmn/keep_previous_assignment.dmn?url";
import assignmentEscalatedCaseDmnUrl from "/camunda-internal/refactoring-dmn/assignment_escalated_case.dmn?url";
import regularAssignmentDmnUrl from "/camunda-internal/refactoring-dmn/regular_assignment.dmn?url";

// strategic-modeling-asynchronous
import orderProcessBpmnUrl from "/camunda-internal/strategic-modeling-asynchronous/order-process.bpmn?url";
import orderProcessAsyncBpmnUrl from "/camunda-internal/strategic-modeling-asynchronous/order-process-async.bpmn?url";

export const CamundaInternal: bpmnStory[] = [
  // bpmn-basics-elements story
  {
    id: "bpmn-basics-elements",
    title: "BPMN Basics - Elements",
    description:
      "In this story, a trainer is discussing the basic BPMN elements with their students.",
    participants: [
      {
        id: "1",
        protagonist: true,
        role: "Trainer",
        name: "Fred",
        emoji: "👨🏾‍🏫",
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
        role: "Student",
        name: "Kim",
        emoji: "🙋🏿‍♀️",
      },
    ],
    difficulty: {
      bpmn: 1,
      dmn: 0,
      forms: 0,
    },
    tags: ["BPMN", "BPMN Basics", "BPMN Elements", "Labeling"],
    conversation: [
      {
        conditions: [],
        messages: [
          {
            position: 1,
            type: "narration",
            text: "This story provides an introduction to the basic BPMN elements!",
          },
          {
            position: 2,
            type: "message",
            participant: "1",
            text: "The three groups of elements in the BPMN 2.0 standard are events, tasks and gateways. Does anyone know what these elements are used for? Let's start with events!",
          },
          {
            position: 3,
            type: "message",
            participant: "3",
            text: "Oh, I will try!",
          },
          {
            position: 3,
            type: "question",
            question: "What functionality do events represent in BPMN 2.0?",
            answers: [
              {
                keyword: "q1-incorrect-1",
                text: "There are only start and end events. They represent the beginning and end of a process.",
              },
              {
                keyword: "q1-incorrect-2",
                text: "Events represent a specific activity that should be performed once the event is reached.",
              },
              {
                keyword: "q1-correct-1",
                text: "Events often represent a status or milestone of an entity or the entire process. If possible, they are best labeled with an object and a verb in past tense.",
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
            title: "Wrong Answer",
            text: "Next to start and end events, there are also intermediate events. All these events come with different types and functionalities.",
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
            title: "Wrong Answer",
            text: "Events sometimes trigger specific activities, but they generally represent a status or milestone of an entity or the entire process that has been reached.",
          },
        ],
      },
      {
        conditions: ["q1-correct-1"],
        messages: [
          {
            position: 4,
            type: "narration",
            text: "Correct! Start, intermediate and end events of different types represent a status or milestone of an entity or the entire process.",
          },
          {
            position: 5,
            type: "message",
            participant: "1",
            text: "Great answer! Here you can see all events that are available in BPMN 2.0. For the moment, please notice the different groups of start, intermediate and end events.",
          },
          {
            position: 6,
            type: "message",
            participant: "2",
            text: "Ah, I see. Start, intermediate and end events have different borders, right? Start events have a thin border, intermediate events have two thin concentric borders, and end events have a thick border!",
          },
          {
            position: 7,
            type: "message",
            participant: "1",
            text: "Exactly! In the modeler, you first select the event group, start, intermediate and end, afterwards you can change the type of the event! In fact, there are event more types of events in Camunda 8 because of connectors, but that's for another time!",
          },
          {
            position: 8,
            type: "message",
            participant: "3",
            text: "Nice, now we can start and end our process and also model states and milestones, but where does the actual activities take place?",
          },
          {
            position: 9,
            type: "message",
            participant: "1",
            text: 'That would be the next group of elements in BPMN 2.0: tasks. Let\'s model our process from the beginning. We start with a start event which we simply label with "Order received". And now...',
          },
          {
            position: 10,
            type: "message",
            participant: "1",
            text: "we add a task! So, how should we label the task?",
          },
          {
            position: 11,
            type: "message",
            participant: "2",
            text: "I'll try this one!",
          },
          {
            position: 11,
            type: "question",
            question: "How should we label the task in BPMN 2.0?",
            answers: [
              {
                keyword: "q2-incorrect-1",
                text: "Tasks should be labeled using an object and a nominalized verb. Same for subprocesses and call activities.",
              },
              {
                keyword: "q2-correct-1",
                text: "Tasks should be labeled using a verb in the infinitive and an object describing what you do with the object. Subprocesses and call activities should be labeled differently by using an object and a nominalized verb.",
              },
              {
                keyword: "q2-incorrect-2",
                text: "Tasks should be labeled by describing in some detail what object is changed and how.",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q2-incorrect-1"],
        messages: [
          {
            position: 12,
            type: "ending",
            isGoodEnding: false,
            title: "Wrong Answer",
            text: "Tasks and subprocesses/call activities should be labeled differently. Subprocesses and call activities are labeled with an object and a nominalized verb which can be seen as the name of the process they refer to.",
          },
        ],
      },
      {
        conditions: ["q2-incorrect-2"],
        messages: [
          {
            position: 12,
            type: "ending",
            isGoodEnding: false,
            title: "Wrong Answer",
            text: "The labeling of tasks should be concise. You can add more details with text annotations or as an element documentation in its properties.",
          },
        ],
      },
      {
        conditions: ["q2-correct-1"],
        messages: [
          {
            position: 12,
            type: "narration",
            text: "Correct! By labeling tasks with a verb in the infinitive and an object, you roughly describe what happens in that task while keeping the process readable. Using an object and a nominalized verb for subprocesses and call activities helps distinguishing them from tasks.",
          },
          {
            position: 13,
            type: "message",
            participant: "1",
            text: "Good job! Here are all tasks that are available in BPMN 2.0.",
          },
          {
            position: 14,
            type: "message",
            participant: "3",
            text: "This doesn't look too difficult, only 10 options. Not like the 47 options we had for the events!",
          },
          {
            position: 15,
            type: "message",
            participant: "1",
            text: "Yeah, task are quite straightforward! With the connectors in Camunda 8, you could argue that there are more types than these 10, but even for those it is easy to understand what they represent.",
          },
          {
            position: 16,
            type: "message",
            participant: "2",
            text: "Then, let's go back to our process model. I'd say we also add a call activity, then label them accordingly.",
          },
          {
            position: 17,
            type: "message",
            participant: "3",
            text: 'Looks good to me! So, the call activity refers to another BPMN process, right? So, "Order processing" is more or less the name of that different process...',
          },
          {
            position: 18,
            type: "message",
            participant: "1",
            text: "Right! Alright, let's proceed! We will take a look at the different types of tasks later.",
          },
          {
            position: 19,
            type: "message",
            participant: "1",
            text: "So, which group of elements is still missing?",
          },
          {
            position: 20,
            type: "message",
            participant: "2",
            text: "That would be gateways. Oh, and how do we call the arrows again?",
          },
          {
            position: 21,
            type: "message",
            participant: "1",
            text: "The arrows are called sequence flows! Gateways, right... They have something to do with sequence flows.",
          },
          {
            position: 22,
            type: "message",
            participant: "3",
            text: "I think gateways split and join sequence flows following some specific logic.",
          },
          {
            position: 23,
            type: "message",
            participant: "1",
            text: "That's correct! Here you can see the different gateways that are available in BPMN 2.0. In Camunda, we don't use the complex gateway.",
          },
          {
            position: 24,
            type: "message",
            participant: "2",
            text: "So, some of the gateways split and join... I guess you can easily make some severe mistakes with the gateways...",
          },
          {
            position: 25,
            type: "message",
            participant: "1",
            text: "Indeed! But for today, we shouldn't go into too much detail here. How would you best describe the different functionalities of the gateways?",
          },
          {
            position: 26,
            type: "message",
            participant: "1",
            text: "We'll focus on the exclusive gateway for now. The exclusive gateway splits a sequence flow into multiple sequence flows, but only the process can only take exactly one of them!",
          },
          {
            position: 27,
            type: "message",
            participant: "2",
            text: "Okay. And, can an exclusive gateway join and split at the same time?",
          },
          {
            position: 28,
            type: "message",
            participant: "1",
            text: "Yes, it can. But we advise against it! It's better to keep the joining logic and the splitting logic separate!",
          },
          {
            position: 29,
            type: "message",
            participant: "3",
            text: "So, I've added an exclusive gateway, splitting our sequence flow into two. How do we best label the gateway so we know what is happening and why?",
          },
          {
            position: 30,
            type: "message",
            participant: "1",
            text: "We base the logic of the splitting exclusive gateway on data, right? There is some process variable that determines where we will go next. So, the best way to label the gateway is to ask a business related question that reflects the different values of this process variable.",
          },
          {
            position: 31,
            type: "message",
            participant: "2",
            text: 'Well, I think we have a process variable called "isNotificationNecessary". Because for some of the orders, we need to notify the customer. So, in this specific use case, how do we best label the gateway?',
          },
          {
            position: 32,
            type: "question",
            question: "How should we label this exclusive gateway?",
            answers: [
              {
                keyword: "q3-correct-1",
                text: 'We should ask the question "Notify customer?" and then add "Yes" and "No" to the respective sequence flows.',
              },
              {
                keyword: "q3-incorrect-1",
                text: 'We should label the gateway with "isNotificationNecessary" and add "true" and "false" to the respective sequence flows.',
              },
              {
                keyword: "q3-incorrect-2",
                text: "We don't need to label the gateway if the subsequent tasks are explanation enough.",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q3-incorrect-1"],
        messages: [
          {
            position: 33,
            type: "ending",
            isGoodEnding: false,
            title: "Wrong Answer",
            text: "Why use the technical name of the process variable and make it harder for business users to understand the process?",
          },
        ],
      },
      {
        conditions: ["q3-incorrect-2"],
        messages: [
          {
            position: 33,
            type: "ending",
            isGoodEnding: false,
            title: "Wrong Answer",
            text: "As the process model is read left to right, an exclusive gateway that is not labeled will confuse the reader. Especially, if they expect every exclusive gateway to be labeled, following the modeling best practices.",
          },
        ],
      },
      {
        conditions: ["q3-correct-1"],
        messages: [
          {
            position: 33,
            type: "narration",
            text: "Correct! A business-related question as the label for the exclusive gateway and clear answers on the outgoing sequence flows is the best way to label a splitting exclusive gateway.",
          },
          {
            position: 34,
            type: "message",
            participant: "2",
            text: "Alright, I won't use the technical name of the process variable! I guess sometimes the expressions on the outgoing sequence flows are too complex for technical labeling anyway.",
          },
          {
            position: 35,
            type: "message",
            participant: "1",
            text: "This is good! Good labeling of the end events as well! I think we can stop for today! Here you can see the different steps our process went through!",
          },
          {
            position: 36,
            type: "ending",
            isGoodEnding: true,
            title: "Well done!",
            text: "You have finished the BPMN story on the basic BPMN elements. There is much more to explore! Don't hesitate to try some other stories. You can filter the story according to your current knowledge on BPMN, DMN and Forms!",
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
            fileNames: [startBpmnUrl],
          },
          {
            position: 5,
            fileNames: [allEventsBpmnUrl, startBpmnUrl],
          },
          {
            position: 9,
            fileNames: [startLabeledBpmnUrl],
          },
          {
            position: 10,
            fileNames: [startTaskBpmnUrl],
          },
          {
            position: 13,
            fileNames: [allTasksBpmnUrl, startTaskBpmnUrl],
          },
          {
            position: 16,
            fileNames: [startTaskCaBpmnUrl],
          },
          {
            position: 23,
            fileNames: [allGatewaysBpmnUrl, startTaskCaBpmnUrl],
          },
          {
            position: 34,
            fileNames: [startTaskCaGwBpmnUrl],
          },
          {
            position: 35,
            fileNames: [
              startTaskCaGwBpmnUrl,
              startTaskCaBpmnUrl,
              startTaskBpmnUrl,
              startLabeledBpmnUrl,
            ],
          },
        ],
      },
    ],
  },
  // operational-modeling-link-events story
  {
    id: "operational-modeling-link-events",
    title: "How To Use Link Events Correctly",
    description:
      "Link events are great to keep a larger BPMN model clean. But be careful not to overuse them!",
    participants: [
      {
        id: "1",
        protagonist: true,
        role: "Business Analyst",
        name: "Kenta",
        emoji: "👴🏼",
      },
      {
        id: "2",
        protagonist: false,
        role: "Consultant",
        name: "Akiko",
        emoji: "👩🏻",
      },
    ],
    difficulty: {
      bpmn: 3,
      dmn: 0,
      forms: 0,
    },
    tags: ["BPMN", "Operational Modeling", "Link Events", "Subprocess"],
    conversation: [
      {
        conditions: [],
        messages: [
          {
            position: 1,
            type: "narration",
            text: "Kenta is a business analyst who likes to overuse link events. Let's follow along as Kenta and Akiko discuss how to use link events properly!",
          },
          {
            position: 2,
            type: "message",
            participant: "1",
            text: "Hi Akiko! Thanks for taking some time out of your day to discuss this process model with me!",
          },
          {
            position: 3,
            type: "message",
            participant: "2",
            text: "No problem, Kenta! I can already see that you love to use link events, right?",
          },
          {
            position: 4,
            type: "message",
            participant: "1",
            text: "Yes! With link events, I can jump from any place in the process to another place. Isn't that nice?",
          },
          {
            position: 5,
            type: "message",
            participant: "2",
            text: "That is nice! But don't you think there is a problem with this process model?",
          },
          {
            position: 6,
            type: "question",
            question: "What might be the problem with this process model?",
            answers: [
              {
                keyword: "q1-correct-lanes",
                text: "Lanes should represent participants of the process. Here, they are misused to describe subprocesses. It is not recommended to use lanes in operational models.",
              },
              {
                keyword: "q1-correct-link-events",
                text: "Multiple link throw events are caught by a single link catch event. This is a serious case of implicit modeling. Multiple sequence flows are merged in an obscure manner which can lead to bad BPMN design.",
              },
              {
                keyword: "q1-correct-design",
                text: "At least one user task has to be completed, even though the risk level of the order might be high anyway.",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q1-correct-lanes"],
        messages: [
          {
            position: 7,
            type: "narration",
            text: "That is correct! Lanes should be used in strategic process models to represent participants of a process. Using lanes in operational process models does not necessarily help with readability and worsens manageability of the process.",
          },
          {
            position: 8,
            type: "message",
            participant: "2",
            text: 'I noticed that you are using lanes, and you labeled them "Main process" and "Manual check". These seem to be descriptions for processes, not participants. Also, it is not recommended to use lanes in operational process models.',
          },
          {
            position: 9,
            type: "message",
            participant: "2",
            text: "Let's remove the lanes. Also, pools do not really add a lot of value to the process, so I prefer to not use pools in operational process models.",
          },
          {
            position: 10,
            type: "message",
            participant: "1",
            text: "Ok, that's fine. Do you see any other issues?",
          },
          {
            position: 11,
            type: "question",
            question: "What other problems are there in this process model?",
            answers: [
              {
                keyword: "q2-correct-link-events",
                text: "Multiple link throw events are caught by a single link catch event. This is a serious case of implicit modeling. Multiple sequence flows are merged in an obscure manner which can lead to bad BPMN design.",
              },
              {
                keyword: "q2-correct-design",
                text: "At least one user task has to be completed, even though the risk level of the order might be high anyway.",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q1-correct-lanes", "q2-correct-link-events"],
        messages: [
          {
            position: 12,
            type: "narration",
            text: "That is correct! Again! Having three link throw events merge into one link catch event can lead to bad readability in larger process models and can lead to bad process design.",
          },
          {
            position: 13,
            type: "message",
            participant: "2",
            text: "It's better to have a one-to-one relationship when it comes to link throw and link catch events! In larger process models, coupled with parallel processing, you might get into some serious trouble!",
          },
          {
            position: 14,
            type: "message",
            participant: "1",
            text: "So, should we use three link catch events instead?",
          },
          {
            position: 15,
            type: "message",
            participant: "2",
            text: "Oh no! Now you created a deadlock! The second parallel gateway will never be passed like this!",
          },
          {
            position: 16,
            type: "message",
            participant: "2",
            text: "It's a good first step to create the one-to-one relationships for the link events, it can show us that our overall design might be a bit flawed.",
          },
          {
            position: 17,
            type: "message",
            participant: "1",
            text: "Oh, sorry! Maybe the link events aren't the best choice here?",
          },
          {
            position: 18,
            type: "message",
            participant: "2",
            text: 'Yeah... Remember the "Manual check" lane? Let\'s just introduce an embedded subprocess!',
          },
          {
            position: 19,
            type: "message",
            participant: "1",
            text: "Like this?",
          },
          {
            position: 20,
            type: "message",
            participant: "2",
            text: "Nice! We didn't need all those link events. We can just end the subprocess when one of the supervisors approves!",
          },
          {
            position: 21,
            type: "message",
            participant: "1",
            text: "When I look at it like this, it seem that we don't need to use the link events at all.",
          },
          {
            position: 22,
            type: "message",
            participant: "2",
            text: 'Well, we could extract the "Manual check" process to a separate BPMN file. That would also make it reusable!',
          },
          {
            position: 23,
            type: "message",
            participant: "1",
            text: "Now, having the check via DMN and the manual check in parallel seems a bit weird. It seems at least one user task needs to be completed, even if the order is high risk!",
          },
          {
            position: 24,
            type: "message",
            participant: "2",
            text: "True! Let's shift this around a bit!",
          },
          {
            position: 25,
            type: "message",
            participant: "1",
            text: "That looks so much better! And it also saves us a lot of money because we don't have to have one supervisor check the order if it is high risk and rejected anyway.",
          },
          {
            position: 26,
            type: "ending",
            isGoodEnding: true,
            title: "Great job!",
            text: "You improved the readability and the process design! The model is now easier to understand and maintain!",
          },
        ],
      },
      {
        conditions: ["q1-correct-lanes", "q2-correct-design"],
        messages: [
          {
            position: 12,
            type: "narration",
            text: "That is correct! Again! The automated risk check via DMN is great! But we still ask the supervisors for a manual check!",
          },
          {
            position: 13,
            type: "message",
            participant: "1",
            text: "Did you notice that we don't need to ask the supervisors to check manually if the risk is high?",
          },
          {
            position: 14,
            type: "message",
            participant: "2",
            text: "You're right! Let's shift this around a bit!",
          },
          {
            position: 15,
            type: "message",
            participant: "1",
            text: "It still looks quite messy! I like link events, but it does feel right to use them like this!",
          },
          {
            position: 16,
            type: "message",
            participant: "2",
            text: "Yeah! You should have a one-to-one relationship between link throw and link catch events!",
          },
          {
            position: 17,
            type: "message",
            participant: "1",
            text: "Like this?",
          },
          {
            position: 18,
            type: "message",
            participant: "2",
            text: "We now have an exclusive gateway that is joining and splitting. That's not recommended. It's a good first step to create the one-to-one relationships for the link events, it can show us that our overall design might be a bit flawed.",
          },
          {
            position: 19,
            type: "message",
            participant: "2",
            text: 'Remember the "Manual check" lane? Let\'s introduce an embedded subprocess! That might help with these link events as well.',
          },
          {
            position: 20,
            type: "message",
            participant: "1",
            text: "Like this?",
          },
          {
            position: 21,
            type: "message",
            participant: "1",
            text: "When I look at it like this, it seem that we don't need to use the link events at all.",
          },
          {
            position: 22,
            type: "message",
            participant: "2",
            text: 'Well, we could extract the "Manual check" process to a separate BPMN file. That would also make it reusable!',
          },
          {
            position: 23,
            type: "message",
            participant: "1",
            text: "That looks so much better! And it also saves us a lot of money because we don't have to have one supervisor check the order if it is high risk and rejected anyway.",
          },
          {
            position: 24,
            type: "ending",
            isGoodEnding: true,
            title: "Great job!",
            text: "You improved the readability and the process design! The model is now easier to understand and maintain!",
          },
        ],
      },
      {
        conditions: ["q1-correct-link-events"],
        messages: [
          {
            position: 7,
            type: "narration",
            text: "That is correct! Having multiple link throw events with just one link catch event can lead to bad process design and unforseen consequences!",
          },
          {
            position: 8,
            type: "message",
            participant: "2",
            text: "It's better to have a one-to-one relationship when it comes to link throw and link catch events! In larger process models, coupled with parallel processing, you might get into some serious trouble!",
          },
          {
            position: 9,
            type: "message",
            participant: "1",
            text: "So, should we use three link catch events instead?",
          },
          {
            position: 10,
            type: "message",
            participant: "2",
            text: "Oh no! Now you created a deadlock! The second parallel gateway will never be passed like this!",
          },
          {
            position: 11,
            type: "message",
            participant: "2",
            text: "It's a good first step to create the one-to-one relationships for the link events, it can show us that our overall design might be a bit flawed.",
          },
          {
            position: 12,
            type: "message",
            participant: "1",
            text: "Oh, sorry! Maybe the link events aren't the best choice here?",
          },
          {
            position: 13,
            type: "message",
            participant: "2",
            text: "Yeah... Let's just introduce an embedded subprocess!",
          },
          {
            position: 14,
            type: "message",
            participant: "1",
            text: "Like this?",
          },
          {
            position: 15,
            type: "message",
            participant: "2",
            text: "Nice! We didn't need all those link events. We can just end the subprocess when one of the supervisors approves!",
          },
          {
            position: 16,
            type: "message",
            participant: "1",
            text: "Do you see any other issues with the process model?",
          },
          {
            position: 17,
            type: "question",
            question: "What other problems are there in this process model?",
            answers: [
              {
                keyword: "q2-correct-lanes",
                text: "Lanes should represent participants of the process. Here, they are misused to describe a subprocess. It is not recommended to use lanes in operational models.",
              },
              {
                keyword: "q2-correct-design",
                text: "At least one user task has to be completed, even though the risk level of the order might be high anyway.",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q1-correct-link-events", "q2-correct-lanes"],
        messages: [
          {
            position: 18,
            type: "narration",
            text: "That is correct! Again! Lanes should be used in strategic process models to represent participants of a process. Using lanes in operational process models does not necessarily help with readability and worsens manageability of the process.",
          },
          {
            position: 19,
            type: "message",
            participant: "2",
            text: 'I noticed that you are using lanes, and you labeled them "Main process" and "Manual check". These seem to be descriptions for processes, not participants. Also, it is not recommended to use lanes in operational process models.',
          },
          {
            position: 20,
            type: "message",
            participant: "2",
            text: "Let's remove the lanes. Also, pools do not really add a lot of value to the process, so I prefer to not use pools either in operational process models.",
          },
          {
            position: 21,
            type: "message",
            participant: "1",
            text: "Having the check via DMN and the manual check in parallel seems a bit weird. It seems at least one user task needs to be completed, even if the order is high risk!",
          },
          {
            position: 22,
            type: "message",
            participant: "2",
            text: "True! Let's shift this around a bit!",
          },
          {
            position: 23,
            type: "message",
            participant: "1",
            text: "Ok, that's fine. When I look at it like this, it seems we do not need to have those link events at all...",
          },
          {
            position: 24,
            type: "message",
            participant: "2",
            text: 'Well, we could extract the "Manual check" process to a separate BPMN file. That would also make it reusable!',
          },
          {
            position: 25,
            type: "message",
            participant: "1",
            text: "That looks so much better! And it also saves us a lot of money because we don't have to have one supervisor check the order if it is high risk and rejected anyway.",
          },
          {
            position: 26,
            type: "ending",
            isGoodEnding: true,
            title: "Great job!",
            text: "You improved the readability and the process design! The model is now easier to understand and maintain!",
          },
        ],
      },
      {
        conditions: ["q1-correct-link-events", "q2-correct-design"],
        messages: [
          {
            position: 18,
            type: "narration",
            text: "That is correct! Again! The automated risk check via DMN is great! But we still ask the supervisors for a manual check!",
          },
          {
            position: 19,
            type: "message",
            participant: "1",
            text: "Did you notice that we don't need to ask the supervisors to check manually if the risk is high?",
          },
          {
            position: 20,
            type: "message",
            participant: "2",
            text: "You're right! Let's shift this around a bit!",
          },
          {
            position: 21,
            type: "message",
            participant: "1",
            text: "This is much better! Now we don't let the supervisors check the order if it is high risk anyway! Do you see anything else to improve?",
          },
          {
            position: 22,
            type: "message",
            participant: "2",
            text: "Yes! The lanes seem to be misused, as you label them with the name of processes, not participants. The pool itself also does not add significant value. I prefer to not use any pools or lanes in operational models!",
          },
          {
            position: 23,
            type: "message",
            participant: "1",
            text: "Ok, that's fine. When I look at it like this, it seems we do not need to have those link events at all...",
          },
          {
            position: 24,
            type: "message",
            participant: "2",
            text: 'Well, we could extract the "Manual check" process to a separate BPMN file. That would also make it reusable!',
          },
          {
            position: 25,
            type: "message",
            participant: "1",
            text: "That looks so much better! And it also saves us a lot of money because we don't have to have one supervisor check the order if it is high risk and rejected anyway.",
          },
          {
            position: 26,
            type: "ending",
            isGoodEnding: true,
            title: "Great job!",
            text: "You improved the readability and the process design! The model is now easier to understand and maintain!",
          },
        ],
      },
      {
        conditions: ["q1-correct-design"],
        messages: [
          {
            position: 7,
            type: "narration",
            text: "That is correct! The automated risk check via DMN is great! But we still ask the supervisors for a manual check!",
          },
          {
            position: 8,
            type: "message",
            participant: "1",
            text: "Did you notice that we don't need to ask the supervisors to check manually if the risk is high?",
          },
          {
            position: 9,
            type: "message",
            participant: "2",
            text: "You're right! Let's shift this around a bit!",
          },
          {
            position: 10,
            type: "message",
            participant: "1",
            text: "This is much better! Now we don't let the supervisors check the order if it is high risk anyway! Do you see anything else to improve?",
          },
          {
            position: 11,
            type: "question",
            question: "What other problems are there in this process model?",
            answers: [
              {
                keyword: "q2-correct-lanes",
                text: "Lanes should represent participants of the process. Here, they are misused to describe a subprocess. It is not recommended to use lanes in operational models.",
              },
              {
                keyword: "q2-correct-link-events",
                text: "Multiple link throw events are caught by a single link catch event. This is a serious case of implicit modeling. Multiple sequence flows are merged in an obscure manner which can lead to bad BPMN design.",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q1-correct-design", "q2-correct-lanes"],
        messages: [
          {
            position: 12,
            type: "narration",
            text: "That is correct! Again! Lanes should be used in strategic process models to represent participants of a process. Using lanes in operational process models does not necessarily help with readability and worsens manageability of the process.",
          },
          {
            position: 13,
            type: "message",
            participant: "2",
            text: 'I noticed that you are using lanes, and you labeled them "Main process" and "Manual check". These seem to be descriptions for processes, not participants. Also, it is not recommended to use lanes in operational process models.',
          },
          {
            position: 14,
            type: "message",
            participant: "2",
            text: "Let's remove the lanes. Also, pools do not really add a lot of value to the process, so I prefer to not use pools either in operational process models.",
          },
          {
            position: 15,
            type: "message",
            participant: "1",
            text: "Ok, that's fine. Do you see any other issues?",
          },
          {
            position: 16,
            type: "message",
            participant: "2",
            text: "Yeah! You should have a one-to-one relationship between link throw and link catch events!",
          },
          {
            position: 17,
            type: "message",
            participant: "1",
            text: "Like this?",
          },
          {
            position: 18,
            type: "message",
            participant: "2",
            text: "We now have an exclusive gateway that is joining and splitting. That's not recommended. It's a good first step to create the one-to-one relationships for the link events, it can show us that our overall design might be a bit flawed.",
          },
          {
            position: 19,
            type: "message",
            participant: "2",
            text: 'Remember the "Manual check" lane? Let\'s introduce an embedded subprocess! That might help with these link events as well.',
          },
          {
            position: 20,
            type: "message",
            participant: "1",
            text: "Like this?",
          },
          {
            position: 21,
            type: "message",
            participant: "1",
            text: "When I look at it like this, it seem that we don't need to use the link events at all.",
          },
          {
            position: 22,
            type: "message",
            participant: "2",
            text: 'Well, we could extract the "Manual check" process to a separate BPMN file. That would also make it reusable!',
          },
          {
            position: 23,
            type: "message",
            participant: "1",
            text: "That looks so much better! And it also saves us a lot of money because we don't have to have one supervisor check the order if it is high risk and rejected anyway.",
          },
          {
            position: 24,
            type: "ending",
            isGoodEnding: true,
            title: "Great job!",
            text: "You improved the readability and the process design! The model is now easier to understand and maintain!",
          },
        ],
      },
      {
        conditions: ["q1-correct-design", "q2-correct-link-events"],
        messages: [
          {
            position: 12,
            type: "narration",
            text: "That is correct! Again! Having multiple link throw events with just one link catch event can lead to bad process design and unforseen consequences!",
          },
          {
            position: 13,
            type: "message",
            participant: "2",
            text: "It's better to have a one-to-one relationship when it comes to link throw and link catch events! In larger process models, coupled with parallel processing, you might get into some serious trouble!",
          },
          {
            position: 14,
            type: "message",
            participant: "1",
            text: "So, should we use three link catch events instead?",
          },
          {
            position: 15,
            type: "message",
            participant: "2",
            text: "We now have an exclusive gateway that is joining and splitting. That's not recommended. It's a good first step to create the one-to-one relationships for the link events, it can show us that our overall design might be a bit flawed.",
          },
          {
            position: 16,
            type: "message",
            participant: "1",
            text: "Oh, sorry! Maybe the link events aren't the best choice here?",
          },
          {
            position: 17,
            type: "message",
            participant: "2",
            text: "Yeah... Let's just introduce an embedded subprocess!",
          },
          {
            position: 18,
            type: "message",
            participant: "1",
            text: "Like this?",
          },
          {
            position: 19,
            type: "message",
            participant: "2",
            text: "Nice! We didn't need all those link events. We can just end the subprocess when one of the supervisors approves!",
          },
          {
            position: 20,
            type: "message",
            participant: "1",
            text: "Do you see any other issues with the process model?",
          },
          {
            position: 21,
            type: "message",
            participant: "2",
            text: 'I noticed that you are using lanes, and you labeled them "Main process" and "Manual check". These seem to be descriptions for processes, not participants. Also, it is not recommended to use lanes in operational process models.',
          },
          {
            position: 22,
            type: "message",
            participant: "1",
            text: "Alright! Let's just remove them! Anything else?",
          },
          {
            position: 23,
            type: "message",
            participant: "2",
            text: 'Well, we could extract the "Manual check" process to a separate BPMN file. That would also make it reusable!',
          },
          {
            position: 24,
            type: "message",
            participant: "1",
            text: "That looks so much better! And it also saves us a lot of money because we don't have to have one supervisor check the order if it is high risk and rejected anyway.",
          },
          {
            position: 25,
            type: "ending",
            isGoodEnding: true,
            title: "Great job!",
            text: "You improved the readability and the process design! The model is now easier to understand and maintain!",
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
            fileNames: [linkEventsInitialBpmnUrl],
          },
        ],
      },
      {
        conditions: ["q1-correct-lanes"],
        files: [
          {
            position: 7,
            fileNames: [linkEventsInitialBpmnUrl],
          },
          {
            position: 9,
            fileNames: [linkEventsNoPoolBpmnUrl, linkEventsInitialBpmnUrl],
          },
        ],
      },
      {
        conditions: ["q1-correct-lanes", "q2-correct-link-events"],
        files: [
          {
            position: 12,
            fileNames: [linkEventsNoPoolBpmnUrl, linkEventsInitialBpmnUrl],
          },
          {
            position: 14,
            fileNames: [
              linkEventsNoPoolThreeCatchBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 19,
            fileNames: [
              linkEventsNoPoolSubprocessBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 22,
            fileNames: [
              linkEventsNoPoolCallActivityBpmnUrl,
              linkEventsManualCheckBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 24,
            fileNames: [
              linkEventsNoPoolCallActivityDesignBpmnUrl,
              linkEventsManualCheckBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
        ],
      },
      {
        conditions: ["q1-correct-lanes", "q2-correct-design"],
        files: [
          {
            position: 12,
            fileNames: [linkEventsNoPoolBpmnUrl, linkEventsInitialBpmnUrl],
          },
          {
            position: 14,
            fileNames: [
              linkEventsNoPoolDesignBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 17,
            fileNames: [
              linkEventsNoPoolDesignThreeCatchBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 20,
            fileNames: [
              linkEventsNoPoolDesignSubprocessBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 22,
            fileNames: [
              linkEventsNoPoolCallActivityDesignBpmnUrl,
              linkEventsManualCheckBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
        ],
      },
      {
        conditions: ["q1-correct-link-events"],
        files: [
          {
            position: 7,
            fileNames: [linkEventsInitialBpmnUrl],
          },
          {
            position: 9,
            fileNames: [linkEventsThreeCatchBpmnUrl, linkEventsInitialBpmnUrl],
          },
          {
            position: 14,
            fileNames: [linkEventsSubprocessBpmnUrl, linkEventsInitialBpmnUrl],
          },
        ],
      },
      {
        conditions: ["q1-correct-link-events", "q2-correct-lanes"],
        files: [
          {
            position: 18,
            fileNames: [linkEventsSubprocessBpmnUrl, linkEventsInitialBpmnUrl],
          },
          {
            position: 20,
            fileNames: [
              linkEventsNoPoolSubprocessBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 22,
            fileNames: [
              linkEventsNoPoolDesignSubprocessBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 24,
            fileNames: [
              linkEventsNoPoolCallActivityDesignBpmnUrl,
              linkEventsManualCheckBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
        ],
      },
      {
        conditions: ["q1-correct-link-events", "q2-correct-design"],
        files: [
          {
            position: 18,
            fileNames: [linkEventsSubprocessBpmnUrl, linkEventsInitialBpmnUrl],
          },
          {
            position: 20,
            fileNames: [
              linkEventsDesignSubprocessBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 23,
            fileNames: [
              linkEventsNoPoolDesignSubprocessBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 25,
            fileNames: [
              linkEventsNoPoolCallActivityDesignBpmnUrl,
              linkEventsManualCheckBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
        ],
      },
      {
        conditions: ["q1-correct-design"],
        files: [
          {
            position: 7,
            fileNames: [linkEventsInitialBpmnUrl],
          },
          {
            position: 9,
            fileNames: [linkEventsDesignBpmnUrl, linkEventsInitialBpmnUrl],
          },
        ],
      },
      {
        conditions: ["q1-correct-design", "q2-correct-lanes"],
        files: [
          {
            position: 12,
            fileNames: [linkEventsDesignBpmnUrl, linkEventsInitialBpmnUrl],
          },
          {
            position: 14,
            fileNames: [
              linkEventsNoPoolDesignBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 17,
            fileNames: [
              linkEventsNoPoolDesignThreeCatchBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 20,
            fileNames: [
              linkEventsNoPoolDesignSubprocessBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 23,
            fileNames: [
              linkEventsNoPoolCallActivityDesignBpmnUrl,
              linkEventsManualCheckBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
        ],
      },
      {
        conditions: ["q1-correct-design", "q2-correct-link-events"],
        files: [
          {
            position: 12,
            fileNames: [linkEventsDesignBpmnUrl, linkEventsInitialBpmnUrl],
          },
          {
            position: 14,
            fileNames: [
              linkEventsDesignThreeCatchBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 18,
            fileNames: [
              linkEventsDesignSubprocessBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 22,
            fileNames: [
              linkEventsNoPoolDesignSubprocessBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
          {
            position: 24,
            fileNames: [
              linkEventsNoPoolCallActivityDesignBpmnUrl,
              linkEventsManualCheckBpmnUrl,
              linkEventsInitialBpmnUrl,
            ],
          },
        ],
      },
    ],
  },
  // operational-modeling-retry story
  {
    id: "operational-modeling-retry",
    title: "Modeling Retries for Technical Errors",
    description:
      "Let's take a look at this conversation between a business analyst and a developer to learn more about how to handle technical errors and how to react to them.",
    participants: [
      {
        id: "1",
        protagonist: true,
        role: "Business Analyst",
        name: "Steve",
        emoji: "👨",
      },
      {
        id: "2",
        protagonist: false,
        role: "Developer",
        name: "Kim",
        emoji: "👩",
      },
    ],
    difficulty: {
      bpmn: 4,
      dmn: 0,
      forms: 0,
    },
    tags: ["BPMN", "Operational Modeling", "Retry"],
    conversation: [
      {
        conditions: [],
        messages: [
          {
            position: 1,
            type: "narration",
            text: "Steve is a business analyst and is wondering about how technical errors are best handled in BPMN. Kim is a developer who just completed the BPMN 2.0 course in the Camunda Academy. The two are currently working on a process model for an onboarding process and are discussing the use of BPMN error events.",
          },
          {
            position: 2,
            type: "message",
            participant: "1",
            text: "The process looks nice, but I am a bit unsure about this service task here. The one to check for fraud.",
          },
          {
            position: 3,
            type: "message",
            participant: "2",
            text: "This service task is performed by a job worker! The code that is run calls an external system to make a quick fraud check.",
          },
          {
            position: 4,
            type: "message",
            participant: "1",
            text: "And what happens if the job worker cannot reach the external system? It throws an error, right? Shouldn't we model this? We shoud retry this, right?",
          },
          {
            position: 5,
            type: "question",
            question:
              "How would you model this? (This is not a time-crucial situation)",
            answers: [
              {
                keyword: "q1-incorrect-boundary-event",
                text: "With an error boundary event.",
              },
              {
                keyword: "q1-incorrect-event-based-subprocess",
                text: "With an event-based subprocess.",
              },
              {
                keyword: "q1-correct",
                text: "This should not be modeled in BPMN.",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q1-incorrect-boundary-event"],
        messages: [
          {
            position: 6,
            type: "ending",
            isGoodEnding: false,
            title: "Wrong Answer!",
            text: "The fraud check is not time-crucial. We can let the service task run its retries and let it raise an incident. It is better to wait for the technical problem to resolve and then retry the incident. Take a look at the process. The addition of the error boundary event and the intermediate timer event clutters the process model without adding any business benefit.",
          },
        ],
      },
      {
        conditions: ["q1-incorrect-event-based-subprocess"],
        messages: [
          {
            position: 6,
            type: "ending",
            isGoodEnding: false,
            title: "Wrong Answer!",
            text: "An event-based subprocess is great for generic error handling. But we cannot use it to implements retries here.",
          },
        ],
      },
      {
        conditions: ["q1-correct"],
        messages: [
          {
            position: 6,
            type: "narration",
            text: "That is correct! The fraud check is not time-crucial. We can let the service task run its retries and let it raise an incident. It is better to wait for the technical problem to resolve and then retry the incident.",
          },
          {
            position: 7,
            type: "message",
            participant: "2",
            text: "In this case, it's better to not model a BPMN error event. Not every technical problem requires a business reaction that is modeled in BPMN!",
          },
          {
            position: 8,
            type: "message",
            participant: "1",
            text: "But if the job worker cannot reach the external system, doesn't the service task just throw an error...?",
          },
          {
            position: 9,
            type: "message",
            participant: "2",
            text: "That depends on the job worker code! Instead of directly throwing a BPMN error, we can let the job fail when we cannot connect to the external system.",
          },
          {
            position: 10,
            type: "question",
            question:
              "What is the difference between throwing a BPMN error and letting a job fail?",
            answers: [
              {
                keyword: "q2-correct",
                text: "Throwing a BPMN error is a business reaction to a technical or business problem. A BPMN error needs to be caught in the BPMN process. A failed job either results in a retry or a raised incident.",
              },
              {
                keyword: "q2-incorrect",
                text: "A failed job throws a BPMN error. BPMN errors can be retried by the engine.",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q2-incorrect"],
        messages: [
          {
            position: 11,
            type: "ending",
            isGoodEnding: false,
            title: "Wrong Answer!",
            text: "A failed job never throws a BPMN error. It is either retried or it raises an incident.",
          },
        ],
      },
      {
        conditions: ["q2-correct"],
        messages: [
          {
            position: 11,
            type: "narration",
            text: "That is correct! You need to be careful when writing your job worker code. Always ask yourself if you need a business reaction to a technical problem. If not, retry and raise an incident.",
          },
          {
            position: 12,
            type: "message",
            participant: "1",
            text: "I see, so we let the job fail then. The engine can perform some retries, maybe the connection issue was just temporary. If no retries are left, we have a raised incident we can retry once the technical issue is solved.",
          },
          {
            position: 13,
            type: "message",
            participant: "2",
            text: "Nice! But, there is one thing we should be careful about: Idempotency! Better design our service task to be idempotent.",
          },
          {
            position: 14,
            type: "message",
            participant: "1",
            text: "Yeah, that's a good idea! This is nice, the BPMN process stays clean without modeling all the retries with BPMN!",
          },
          {
            position: 15,
            type: "ending",
            isGoodEnding: true,
            title: "You reach the end!",
            text: "Congratulation on reaching the end of this story! We hope you learned something useful!",
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
            fileNames: [onboardingBpmnUrl],
          },
        ],
      },
      {
        conditions: ["q1-incorrect-boundary-event"],
        files: [
          {
            position: 6,
            fileNames: [onboardingBoundaryBpmnUrl],
          },
        ],
      },
      {
        conditions: ["q1-incorrect-event-based-subprocess"],
        files: [
          {
            position: 6,
            fileNames: [onboardingSubprocessBpmnUrl],
          },
        ],
      },
      {
        conditions: ["q1-correct"],
        files: [
          {
            position: 6,
            fileNames: [onboardingBpmnUrl],
          },
        ],
      },
    ],
  },
  // refactoring-dmn story
  {
    id: "dmn-case-1",
    title: "Refactoring large decision tables",
    description:
      "Learn how to refactor DMN tables to be concise and comprehensible.",
    participants: [
      {
        id: "1",
        protagonist: true,
        role: "Business Analyst",
        name: "Steve",
        emoji: "👨",
      },
      {
        id: "2",
        protagonist: false,
        role: "DMN Expert",
        name: "Jenny",
        emoji: "👩🏾",
      },
    ],
    difficulty: {
      bpmn: 1,
      dmn: 4,
      forms: 0,
    },
    tags: ["BPMN", "DMN", "Operational Modeling", "Refactoring"],
    conversation: [
      {
        conditions: [],
        messages: [
          {
            position: 0,
            type: "narration",
            text: "In this story, you follow the business analyst Steve learning how to create concise and comprehensible DMN models.",
          },
          {
            position: 1,
            type: "message",
            participant: "1",
            text: "Hi Jenny! After the training with Camunda, I started using DMN for our business rules.",
          },
          {
            position: 2,
            type: "message",
            participant: "2",
            text: "Great! But you mentioned you have questions?",
          },
          {
            position: 3,
            type: "message",
            participant: "1",
            text: "Well, I modeled a first decision to assign cases to our consultants. While testing the logic, we found more and more exceptions, and we added them to the table. I have seen the table evolve, and it it makes sense. But, it took me quite some time to explain it to my colleages.",
          },
          {
            position: 3,
            type: "narration",
            text: "Steve opens the DMN table.",
          },
          {
            position: 4,
            type: "message",
            participant: "2",
            text: "This is a common problem. The DMN tables evolve and eventually become complex and hard to maintain. But, we also have mechanisms to tame the complexity: DMN's decision requirements graph, decision flows, and FEEL expressions.",
          },
          {
            position: 5,
            type: "question",
            question: "Which path would you like to explore?",
            answers: [
              {
                keyword: "DRG",
                text: "Decision requirement graph",
              },
              {
                keyword: "Decision Flows",
                text: "Decision flows",
              },
              {
                keyword: "FEEL",
                text: "advanced FEEL expressions",
              },
            ],
          },
        ],
      },
      {
        conditions: ["DRG"],
        messages: [
          {
            position: 6,
            type: "message",
            participant: "2",
            text: "We recommend to have at most 2-4 inputs and keep the number or rules low. The DRG allows us to split a single decision into multiple subdecisions.",
          },
          {
            position: 7,
            type: "message",
            participant: "1",
            text: "I see! But, how do I divide one decision into multiple?",
          },
          {
            position: 8,
            type: "message",
            participant: "2",
            text: "The decisions are domain-specific. Looking at the annotation of your rules, I see that there are different allocation mechanisms. So, your decision does multiple things simultaniously: It determines the right allocation mechanism and executes it. Let's separate these into two decisions.",
          },
          {
            position: 8,
            type: "narration",
            text: "Jenny creates a copy of the DMN file and calls it assigment_allocation.dmn. Then, she refactors the model by adding a dedicated allocation decision.",
          },
          {
            position: 9,
            type: "message",
            participant: "1",
            text: "Great! Now we have two decisions, and the assignment table has fewer inputs than before. However, it still has 15 rules. Can we simplify it further?",
          },
          {
            position: 10,
            type: "message",
            participant: "2",
            text: "What do you think?",
          },
          {
            position: 11,
            type: "message",
            participant: "1",
            text: "We spend a lot of space on checking the availability. We then choose the cheapest and least utilized resource. The latter is given by the order inside the lists. I think if we move this logic outside the assigment decision, it becomes significantly simpler. But I do not know how to do it with DMN, so I would ask our developers to implement it.",
          },
          {
            position: 12,
            type: "message",
            participant: "2",
            text: "It is always possible to move part of the logic to code. However, we lose transparency. Let's see whether we can realize your proposal in DMN.",
          },
          {
            position: 13,
            type: "message",
            participant: "2",
            text: "I think with some FEEL functions, we can do it in DMN. Let me try...",
          },
          {
            position: 14,
            type: "message",
            participant: "1",
            text: "Wow. That really looks simple. Thank you! I will discuss it with the stakeholders.",
          },
          {
            position: 15,
            type: "ending",
            isGoodEnding: true,
            title: "Successfull refactoring",
            text: "Congratulations! You successfully refactored one complex decision table into three simple ones using the DRG and FEEL expressions. The result is easier to comprehend and hence, easier to maintain.",
          },
        ],
      },
      {
        conditions: ["FEEL"],
        messages: [
          {
            position: 6,
            type: "message",
            participant: "2",
            text: "We recommend to have at most 2-4 inputs and keep the number or rules low. FEEL enables us to write more expressive rules.",
          },
          {
            position: 7,
            type: "message",
            participant: "1",
            text: "The logic remains the same, but we express it more concisely?",
          },
          {
            position: 8,
            type: "message",
            participant: "2",
            text: "Correct! In your example, you have a boolean input for each seniority level. What do you do with this?",
          },
          {
            position: 9,
            type: "message",
            participant: "1",
            text: "Usually, we want to assign the cheapest appropriate worker. So the one with the lowest seniority level.",
          },
          {
            position: 10,
            type: "message",
            participant: "2",
            text: "Instead of having explicit inputs, we can buid a list of all appropriate workers, sort them according to their seniority, and choose the first element. Correct?",
          },
          {
            position: 11,
            type: "message",
            participant: "1",
            text: "...I think so",
          },
          {
            position: 12,
            type: "message",
            participant: "2",
            text: "The result could look like this...",
          },
          {
            position: 13,
            type: "message",
            participant: "1",
            text: "But we still have 5 inputs, and I don't like to put so much logic in the output column.",
          },
          {
            position: 14,
            type: "message",
            participant: "2",
            text: "We can also move the calculation to a dedicated literal expression. We just have to add a decision in the DRG.",
          },
          {
            position: 15,
            type: "message",
            participant: "1",
            text: "Still - 5 inputs are more than the recommended 4!",
          },
          {
            position: 16,
            type: "message",
            participant: "2",
            text: "Ha! You make me regret my words. But I like a challenge. Let's add one more decision to decide whether it's a priority-, history-, or escalation-based assignment.",
          },
          {
            position: 17,
            type: "message",
            participant: "1",
            text: "That looks good!",
          },
          {
            position: 18,
            type: "ending",
            isGoodEnding: true,
            title: "Successful refactored",
            text: "FEEL enables you to write epressive rules. But be careful, each rule can become more complex and harder to comprehend because you need to know FEEL to understand the logic.",
          },
        ],
      },
      {
        conditions: ["Decision Flows"],
        messages: [
          {
            position: 6,
            type: "message",
            participant: "2",
            text: "Decision flows combine BPMN and DMN to derive a decision result.",
          },
          {
            position: 7,
            type: "message",
            participant: "1",
            text: "Okay, so we use process models that connect multiple business rule tasks via sequence flows? What is the advantage compared to a DRG?",
          },
          {
            position: 8,
            type: "message",
            participant: "2",
            text: "We can work around some of DMN's limitations: There are no optional decisions in DMN, but we can branch off sequence flows to skip a business rule task in the BPMN. Similarly, we may not need all inputs. So, we can skip fetching unrequired inputs.",
          },
          {
            position: 9,
            type: "message",
            participant: "1",
            text: "So what you mean is, if the previously assigned worker is available and there is no escalation, I can skip fetching other available consultants from the ERP-system?",
          },
          {
            position: 10,
            type: "message",
            participant: "2",
            text: "That is a good idea! Let's model it!",
          },
          {
            position: 11,
            type: "message",
            participant: "2",
            text: "I also simplified the logic of the priority-based assignment. Check it out!",
          },
          {
            position: 12,
            type: "message",
            participant: "1",
            text: "You're using the comma to merge multiple rules with the same outcome into one, right?",
          },
          {
            position: 13,
            type: "ending",
            isGoodEnding: true,
            title: "Refactoring Successful",
            text: "If decisions are complex, we can combine DMN with BPMN to break them into multiple decisions connect via sequence flow.",
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
            fileNames: [assignmentInitialDmnUrl],
          },
        ],
      },
      {
        conditions: ["DRG"],
        files: [
          {
            position: 8,
            fileNames: [assignmentAllocationDmnUrl, assignmentInitialDmnUrl],
          },
          {
            position: 13,
            fileNames: [
              assignmentAllocationSuitabilityDmnUrl,
              assignmentAllocationDmnUrl,
              assignmentInitialDmnUrl,
            ],
          },
        ],
      },
      {
        conditions: ["FEEL"],
        files: [
          {
            position: 12,
            fileNames: [assignmentFeelDmnUrl, assignmentInitialDmnUrl],
          },
          {
            position: 14,
            fileNames: [
              assignmentWithLiteralexpressionDmnUrl,
              assignmentFeelDmnUrl,
              assignmentInitialDmnUrl,
            ],
          },
          {
            position: 16,
            fileNames: [
              assignmentWithLiteralexpressionAndAllocationDmnUrl,
              assignmentWithLiteralexpressionDmnUrl,
              assignmentFeelDmnUrl,
              assignmentInitialDmnUrl,
            ],
          },
        ],
      },
      {
        conditions: ["Decision Flows"],
        files: [
          {
            position: 11,
            fileNames: [
              decisionFlowBpmnUrl,
              keepPreviousAssignmentDmnUrl,
              assignmentEscalatedCaseDmnUrl,
              regularAssignmentDmnUrl,
              assignmentInitialDmnUrl,
            ],
          },
        ],
      },
    ],
  },
  // strategic-modeling-asynchronous story
  {
    id: "strategic-modeling-sync-and-async",
    title: "Strategic modeling of (a-)synchronous interdependencies",
    description:
      "This conversation between a process owner and a stakeholder shows how to best model synchronous and asynchronous interdependencies between systems in strategic process models.",
    participants: [
      {
        id: "1",
        protagonist: true,
        role: "Business Analyst",
        name: "Ahmed",
        emoji: "👨🏾",
      },
      {
        id: "2",
        protagonist: false,
        role: "Stakeholder",
        name: "Elli",
        emoji: "👩🏿",
      },
    ],
    difficulty: {
      bpmn: 2,
      dmn: 0,
      forms: 0,
    },
    tags: ["BPMN", "Strategic Modeling"],
    conversation: [
      {
        conditions: [],
        messages: [
          {
            position: 1,
            type: "narration",
            text: "In this conversation, Elli and Ahmed are discussing a strategic process model depicting the order process of their company. Different departments are involved in the process. There is an external service provider that handles payments.",
          },
          {
            position: 2,
            type: "message",
            participant: "1",
            text: "Hey Elli, here is our current strategic process model for the order process! Do you have any questions about it?",
          },
          {
            position: 3,
            type: "message",
            participant: "2",
            text: "I think it is quite easy to understand! And I like that the KPIs of the order process are included as well. Very convenient!",
          },
          {
            position: 4,
            type: "message",
            participant: "1",
            text: "Also, creating this strategic model together with the department managers was super helpful. We just had to be careful not to include too many details!",
          },
          {
            position: 5,
            type: "message",
            participant: "2",
            text: "There is just this one aspect with the payment. I can see that we have this external service provider. And these dashed arrows...?",
          },

          {
            position: 6,
            type: "message",
            participant: "1",
            text: "Oh, those are message flows!",
          },
          {
            position: 7,
            type: "question",
            question: "What are message flows?",
            answers: [
              {
                keyword: "q1-incorrect-1",
                text: "Message flows are necessary for the workflow engine to understand how different BPMN elements are connected to one another.",
              },
              {
                keyword: "q1-incorrect-2",
                text: "Message flows are essentially sequence flows. They just look different when a send or receive activity is involved.",
              },
              {
                keyword: "q1-correct-1",
                text: "Message flows are for documentation purposes only. They depict interactions between different BPMN elements, including pools.",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q1-incorrect-1"],
        messages: [
          {
            position: 8,
            type: "ending",
            isGoodEnding: false,
            title: "Wrong Answer",
            text: "The workflow engine does not use message flows for its processing.",
          },
        ],
      },
      {
        conditions: ["q1-incorrect-2"],
        messages: [
          {
            position: 8,
            type: "ending",
            isGoodEnding: false,
            title: "Wrong Answer",
            text: "Sequence flows are evaluated by the workflow engine. Message flows are for documentation purposes only.",
          },
        ],
      },
      {
        conditions: ["q1-correct-1"],
        messages: [
          {
            position: 8,
            type: "narration",
            text: "Exactly! Message flows are for documentation purposes only. They often connect message-related activities and pools.",
          },
          {
            position: 9,
            type: "message",
            participant: "2",
            text: "Ah, so these message flows show the interaction between the payment task and the external system!",
          },
          {
            position: 10,
            type: "message",
            participant: "1",
            text: "Now that you mention it,... Hm. Do you think this interface to the external system is synchronous or asynchronous?",
          },
          {
            position: 11,
            type: "message",
            participant: "2",
            text: "It looks like a synchronous interface, but it could be asynchronous... It's not really clear. I know it is asynchronous.",
          },
          {
            position: 12,
            type: "message",
            participant: "1",
            text: "In this case, it is an important detail that this interface is asynchronous, so let's make a small adjustment. We are sending the payment request to the external system, then wait until we get the response at some point.",
          },
          {
            position: 13,
            type: "message",
            participant: "2",
            text: "So what happens when we don't get the response?",
          },
          {
            position: 14,
            type: "question",
            question: "How should we model this?",
            answers: [
              {
                keyword: "q2-incorrect-1",
                text: "With an event-based gateway with a message catch event and a timer event.",
              },
              {
                keyword: "q2-correct-1",
                text: "We shouldn't model this. A strategic process model is focused on the happy path.",
              },
              {
                keyword: "q2-incorrect-2",
                text: "With a timer event followed by an exclusive gateway to check if the message has been correlated.",
              },
            ],
          },
        ],
      },
      {
        conditions: ["q2-incorrect-1"],
        messages: [
          {
            position: 15,
            type: "ending",
            isGoodEnding: false,
            title: "Wrong Answer",
            text: "That would be a good solution for the operational process model!",
          },
        ],
      },
      {
        conditions: ["q2-incorrect-2"],
        messages: [
          {
            position: 15,
            type: "ending",
            isGoodEnding: false,
            title: "Wrong Answer",
            text: "A message catch event is a natural wait state. It should be ready to be correlated directly after sending the request. The timer event would prevent the correlation in the first place.",
          },
        ],
      },
      {
        conditions: ["q2-correct-1"],
        messages: [
          {
            position: 15,
            type: "narration",
            text: "Correct! If this information is important, you can add some information with an annotation or using the element documentation.",
          },
          {
            position: 16,
            type: "message",
            participant: "1",
            text: "In the operation process model, we use an event-based gateway, but that's too complex for a strategic process model.",
          },
          {
            position: 17,
            type: "message",
            participant: "2",
            text: "Yeah, it's better not to use an event-based gateway in a strategic process model. Better stick to exlcusive and parallel gateways.",
          },
          {
            position: 18,
            type: "ending",
            isGoodEnding: true,
            text: "Good job! The strategic process model was adjusted to depict the asynchronous interface to the external system!",
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
            fileNames: [orderProcessBpmnUrl],
          },
        ],
      },
      {
        conditions: [],
        files: [
          {
            position: 12,
            fileNames: [orderProcessAsyncBpmnUrl],
          },
        ],
      },
    ],
  },
];
