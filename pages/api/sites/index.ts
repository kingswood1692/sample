import dbConnect from "src/lib/dbConnect";
import Sites from "src/models/Sites";

export default async function handler(req: any, res: any) {
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
