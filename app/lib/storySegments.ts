
type stageId =
  'start' |
  'test1' |
  'test2' |
  'test3' |
  'test4' |
  'test5' |
  'test6' |
  'test7' |
  'test8';

type storyOpt = {
  text: string;
  to: stageId;
}

type storySeg = {
  id: stageId;
  mainText: string;
  options: storyOpt[];
}

const testText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const storySegments: storySeg[] = [
  {
    id: 'start',
    mainText: 'Start here ' + testText,
    options: [
      {
        text: 'Reason 1 test',
        to: 'test1',
      },
      {
        text: 'Reason 2 test',
        to: 'test2',
      },
      {
        text: 'Reason 3 test',
        to: 'test3',
      },
      {
        text: 'Reason 4 test',
        to: 'test4',
      }
    ],
  },
  {  
    id: 'test1',
    mainText: 'Reason 1 page main text ' + testText,
    options: [
      {
        text: 'Reason 5 test',
        to: 'test5',
      },
      {
        text: 'Reason 6 test',
        to: 'test5',
      },
      {
        text: 'Reason 7 test',
        to: 'test6',
      },
    ],
  },
  {
    id: 'test2',
    mainText: 'Reason 2 page main text ' + testText,
    options: [
      {
        text: 'Reason 8 test',
        to: 'test5',
      },
      {
        text: 'Reason 9 test',
        to: 'test6',
      },
      {
        text: 'Reason 10 test',
        to: 'test7',
      },
    ],
  },
  {
    id: 'test3',
    mainText: 'Reason 3 page main text ' + testText,
    options: [
      {
        text: 'Reason 11 test',
        to: 'test5',
      },
      {
        text: 'Reason 12 test',
        to: 'test8',
      },
    ],
  },
  {
    id: 'test4',
    mainText: 'Reason 4 page main text ' + testText,
    options: [
      {
        text: 'Reason 13 test',
        to: 'test8',
      },
    ],
  },

// ...

]