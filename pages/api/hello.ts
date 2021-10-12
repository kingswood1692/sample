// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from "src/lib/dbConnect";
import Sites from "src/models/Sites";

type Data = {
  success: boolean,
  data?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: 'John Doe' })
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const getSites = await Sites.find({}).lean();
        res.status(200).json({ success: true, data: getSites });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
