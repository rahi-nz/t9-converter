import { NextApiRequest, NextApiResponse } from 'next';
import { generateWords } from '../../utils';

export default function (req: NextApiRequest, res: NextApiResponse) {
  if (!req.body.numbers) {
    return res.status(400).send('Numbers are required');
  }

  const suggestions = generateWords(req.body.numbers, req.body.onlyRealWords);
  res.json(suggestions);
}
