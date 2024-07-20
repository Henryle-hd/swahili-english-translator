const {dictionary} = require ('./dictionary');

//function to translate English Word to Swahili

module.exports.translateEng = word => {
  const entry = dictionary.find (
    item => item.eng.trim ().toLowerCase () === word.toLowerCase ()
  );

  if (!entry) {
    return null;
  }
  return {
    meaning: entry.ksw,
    type: entry.type,
    example: {
      ksw: entry.example.ksw,
      eng: entry.example.eng,
    },
  };
};

//function to translate Swahili Word to Eng

module.exports.translateKsw = word => {
  const entry = dictionary.find (
    item => item.ksw.trim ().toLowerCase () === word.toLowerCase ()
  );

  if (!entry) {
    return null;
  }
  return {
    meaning: entry.eng,
    type: entry.type,
    example: {
      ksw: entry.example.ksw,
      eng: entry.example.eng,
    },
  };
};
