import { NextApiRequest, NextApiResponse } from 'next';
import { StrapiWebhookEntryEvent } from '../../models/strapi';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.NEXT_REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    const route = req.query.route as string;
    if (route) {
      await res.revalidate(route);
    } else {
      await handleStrapiWebhook(req, res);
    }
    return res.json({ revalidated: true });
  } catch (err) {
    console.log(err);
    return res.status(500).send('Error revalidating');
  }
}

async function handleStrapiWebhook(req: NextApiRequest, res: NextApiResponse) {
  const { model, entry }: StrapiWebhookEntryEvent = req.body;
  if (model === 'article') {
    // homepage contains reference to articles, we should revalidate it too
    await Promise.all([res.revalidate(`/z-zycia-parafii/${entry.slug}`), res.revalidate('/')]);
  } else {
    await res.revalidate(entry.page_slug);
  }
}
