import dbConnect from "src/lib/dbConnect";
import Sites from "src/models/Sites";

export default async function handler(req: any, res: any) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const site = await Sites.insertMany(req.body, { ordered: false });
        res.status(201).json({ success: true, data: site });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
