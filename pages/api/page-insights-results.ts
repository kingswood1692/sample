import dbConnect from "../../src/lib/dbConnect";
import PageInsights from "../../src/models/PageInsights";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const pageSitesResults = await PageInsights.find({}).lean();
        res.status(200).json({ success: true, data: pageSitesResults });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const pageInfo = await PageInsights.create(req.body);
        res.status(201).json({ success: true, data: pageInfo });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
