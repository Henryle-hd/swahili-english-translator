# Swahili-English Translator 🌍🗣️

A simple npm package for translating between English and Swahili. This tool offers quick and accurate translations, complete with word meanings, grammatical types, and usage examples. Whether you're a developer building multilingual applications, a language learner, or someone working with Swahili and English content, [Swahili-English Translator](https://github.com/Henryle-hd/swahili-english-translator) provides an efficient solution for your translation needs. Let's explore how to integrate and utilize this versatile package in your projects.

## Installation 📦

To install the package, run:

```
npm install swahili-english-translator
```

## Usage 🚀

First, import the translation functions:

```
const { translateEng, translateKsw } = require('swahili-english-translator');
```

### Translating English to Swahili 🇬🇧🇹🇿

To translate an English word to Swahili:

```
const result = translateEng('abandon');
console.log(result);
```

Output: [Example 01](https://github.com/Henryle-hd/Swahili-english-translator-Example/blob/main/engToSw.js)

```
{
  meaning: ' kuachana',
  type: 'Verb',
  example: {
    eng: 'They decided to abandon the project.',
    ksw: 'Waliamua kuachana na mradi.',
  }
}
```

### Translating Swahili to English 🇹🇿🇬🇧

To translate a Swahili word to English:

```
const result = translateKsw('uwezo');
console.log(result);
```

Output: [Example 02](https://github.com/Henryle-hd/Swahili-english-translator-Example/blob/main/swToEng.js)

```
{
  meaning: ' ability',
  type: 'Noun',
  example: {
    eng: 'She has the ability to solve complex problems.',
    ksw: 'Ana uwezo wa kutatua matatizo magumu.',
  }
}
```

### Getting Specific Information 🔍

1. To get only the meaning:
   ```
   const result = translateEng('abandon');
   console.log(result.meaning); // Output: ' kuachana'
   ```

2. To get the type of word:
   ```
   const result = translateKsw('uwezo');
   console.log(result.type); // Output: 'Noun'
   ```

3. To get an example:
   ```
   const result = translateEng('abandon');
   console.log(result.example);

   // Output:
   // {
   //   eng: 'They decided to abandon the project.',
   //   ksw: 'Waliamua kuachana na mradi.'
   // }
   ```
   [Example 03](https://github.com/Henryle-hd/Swahili-english-translator-Example/blob/main/Specific%20Info.js)

## API Reference 📚

### translateEng(word)

Translates an English word to Swahili.

- Parameters:
  - `word` (string): The English word to translate
- Returns: An object containing the Swahili translation, word type, and an example

### translateKsw(word)

Translates a Swahili word to English.

- Parameters:
  - `word` (string): The Swahili word to translate
- Returns: An object containing the English translation, word type, and an example

## Development 👨‍💻👩‍💻

To set up the project for development:

1. Clone the repository:
   ```
   git clone https://github.com/Henryle-hd/swahili-english-translator.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run tests:
   ```
   npm test
   ```

## Contributing 🤝

Contributions are welcome! Please feel free to submit a [Pull Request](https://github.com/Henryle-hd/swahili-english-translator/pulls).

## License 📄

This project is licensed under the [MIT License](https://github.com/Henryle-hd/swahili-english-translator?tab=MIT-1-ov-file).
