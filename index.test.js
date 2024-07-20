const {translateEng, translateKsw} = require ('./index');

test ('translateEng translates "abandon" correctly', () => {
  expect (translateEng ('abandon')).toEqual ({
    meaning: ' kuachana',
    type: 'Verb',
    example: {
      eng: 'They decided to abandon the project.',
      ksw: 'Waliamua kuachana na mradi.',
    },
  });
});

test ('translateKsw translates "uwezo" correctly', () => {
  expect (translateKsw ('uwezo')).toEqual ({
    meaning: ' ability',
    type: 'Noun',
    example: {
      eng: 'She has the ability to solve complex problems.',
      ksw: 'Ana uwezo wa kutatua matatizo magumu.',
    },
  });
});
