import { generateWords } from './index';

describe('Utils', () => {
  describe('generateWords', () => {
    const samples = [
      {
        numbers: '2',
        includeOnlyRealWords: false,
        output: ['a', 'b', 'c'],
        description: '3 word',
      },
      {
        numbers: '356',
        includeOnlyRealWords: true,
        output: ['elm'],
        description: 'return one real word',
      },
    ];
    samples.map(({ numbers, includeOnlyRealWords, output, description }) =>
      it(`should return - ${description}`, () => {
        expect(generateWords(numbers, includeOnlyRealWords)).toStrictEqual(output);
      }),
    );
  });
});
