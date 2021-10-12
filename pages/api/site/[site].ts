import dbConnect from "src/lib/dbConnect";
import PageInsights from "src/models/PageInsights";
import Sites from "src/models/Sites";

export default async function handler(req, res) {
  const { method } = req;
  const { site } = req.query;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const getSiteDetails = await Sites.find({
          name: { $regex: `^${site.replace("-", " ")}$`, $options: "i" },
        });

        const getSitePsiResults = await PageInsights.find({
          siteId: getSiteDetails[0]._id,
        }).sort({created_at: 'desc'}).lean();
        res
          .status(200)
          .json({ success: true, data: { getSitePsiResults, getSiteDetails } });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
