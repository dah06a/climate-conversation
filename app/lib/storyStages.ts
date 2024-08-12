
type stageId =
  'start' |
  'test1' |
  'test2' |
  'test3' |
  'test4' |
  'test5' |
  'test6' |
  'test7' |
  'test8' |
  'end' |
  'error';

type storyOpt = {
  optId: number;
  text: string;
  to: stageId;
}

export type storyStage = {
  id: stageId;
  mainText: string;
  options: storyOpt[];
}

const testText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const storyStages: storyStage[] = [
  {
    id: 'start',
    mainText: 'Start here --- ' + testText,
    options: [
      {
        optId: 1,
        text: 'Reason 1 test',
        to: 'test1',
      },
      {
        optId: 2,
        text: 'Reason 2 test',
        to: 'test2',
      },
      {
        optId: 3,
        text: 'Reason 3 test',
        to: 'test3',
      },
      {
        optId: 4,
        text: 'Reason 4 test',
        to: 'test4',
      }
    ],
  },
  {  
    id: 'test1',
    mainText: 'Reason 1 page main text --- ' + testText,
    options: [
      {
        optId: 5,
        text: 'Reason 5 test',
        to: 'test5',
      },
      {
        optId: 6,
        text: 'Reason 6 test',
        to: 'test5',
      },
      {
        optId: 7,
        text: 'Reason 7 test',
        to: 'test6',
      },
    ],
  },
  {
    id: 'test2',
    mainText: 'Reason 2 page main text  --- ' + testText,
    options: [
      {
        optId: 1,
        text: 'Reason 8 test',
        to: 'test5',
      },
      {
        optId: 9,
        text: 'Reason 9 test',
        to: 'test6',
      },
      {
        optId: 10,

        text: 'Reason 10 test',
        to: 'test7',
      },
    ],
  },
  {
    id: 'test3',
    mainText: 'Reason 3 page main text  --- ' + testText,
    options: [
      {
        optId: 11,
        text: 'Reason 11 test',
        to: 'test5',
      },
      {
        optId: 12,
        text: 'Reason 12 test',
        to: 'test8',
      },
    ],
  },
  {
    id: 'test4',
    mainText: 'Reason 4 page main text  --- ' + testText,
    options: [
      {
        optId: 13,
        text: 'Reason 13 test',
        to: 'test8',
      },
    ],
  },
  {
    id: 'test5',
    mainText: 'Reason 5 page main text  --- ' + testText,
    options: [
      {
        optId: 14,
        text: 'Reason 14 test',
        to: 'test8',
      },
    ],
  },
  {
    id: 'test6',
    mainText: 'Reason 6 page main text  --- ' + testText,
    options: [
      {
        optId: 15,
        text: 'Reason 15 test',
        to: 'test7',
      },
      {
        optId: 16,
        text: 'Reason 16 test',
        to: 'test8',
      },
    ],
  },
  {
    id: 'test7',
    mainText: 'Reason 7 page main text  --- ' + testText,
    options: [
      {
        optId: 17,
        text: 'Reason 17 test',
        to: 'test8',
      },
      {
        optId: 18,
        text: 'Reason 18 test',
        to: 'test8',
      },
    ],
  },
  {
    id: 'test8',
    mainText: 'Reason 8 page main text  --- ' + testText,
    options: [
      {
        optId: 19,
        text: 'Reason 19 test',
        to: 'end',
      },
      {
        optId: 20,
        text: 'Reason 20 test',
        to: 'end',
      },
    ],
  },
  {
    id: 'end',
    mainText: 'THE END',
    options: [
    ],
  },
]