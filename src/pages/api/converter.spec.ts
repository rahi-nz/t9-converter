import { createMocks } from 'node-mocks-http';
import converter from './converter';

describe('test converter', () => {
  it('returns a list with the specified number', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        numbers: '2',
        onlyRealWords: true,
      },
    });

    await converter(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(expect.objectContaining(['a', 'b', 'c']));
  });
});
