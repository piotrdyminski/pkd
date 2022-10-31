import { NextApiRequest, NextApiResponse } from 'next';
import { fetchAPI } from '../../lib/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }
  const viewCount = await fetchAPI<number>('/view-counter', {}, { method: req.method });
  res.status(200).json(viewCount);
}
