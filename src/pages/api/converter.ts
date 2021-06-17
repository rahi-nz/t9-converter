import wordlist from 'wordlist-english';
import { NextApiRequest, NextApiResponse } from 'next';

const englishWords = wordlist['english'];

const keyMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

const generateWords = (numbers: string, includeOnlyRealWords: boolean) => {
  const numberString = numbers.split('').map(key => keyMap[key]);
  let words = [];
  const allPossibleWords = generateWordsCombinations(numberString);

  if (includeOnlyRealWords) {
    allPossibleWords.map((word, index) => {
      if (englishWords.indexOf(word) > -1) {
        words.push(word);
      }
    });
  } else {
    words = allPossibleWords;
  }

  return words;
};

const generateWordsCombinations = (keys: string[][]) => {
  if (keys.length == 0) {
    return [];
  } else if (keys.length == 1) {
    return keys[0];
  }

  const firstKey = keys[0];
  const secondKey = keys[1];
  const result = [];

  for (let i = 0; i <= firstKey.length - 1; i++) {
    for (let j = 0; j <= secondKey.length - 1; j++) {
      result.push(firstKey[i] + secondKey[j]);
    }
  }

  return generateWordsCombinations([result, ...keys.slice(2)]);
};

export default function (req: NextApiRequest, res: NextApiResponse) {
  if (!req.body.numbers) {
    return res.status(400).send('Numbers are required');
  }

  const suggestions = generateWords(req.body.numbers, req.body.onlyRealWords);
  res.json(suggestions);
}
