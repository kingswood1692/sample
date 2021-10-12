// import dbConnect from "../../src/lib/dbConnect";
// import PageInsights from "../../src/models/PageInsights";
// import PsiProvider from "src/services/psiProvider";
import service from 'src/services/serviceProvider';
import XMLParser from "react-xml-parser";

export default async function handler(req: any, res: any) {
  const { method } = req;

  //   await dbConnect();

  switch (method) {
    case "GET":
      try {
        // const pageSitesResults = await PageInsights.find({}).lean();
        const sitemaps = await service.container.content.xmlToJson("https://iona.studio/sitemap.xml")
        const xml = new XMLParser().parseFromString(sitemaps);
        console.log(xml)
        res.status(200).json({ success: true, data: JSON.stringify(sitemaps) });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    // case "POST":
    //   try {
    //     const { sites } = req.body;
    //     const pageInsights =
    //       await PsiProvider.container.psi.getSitePageInsights(sites);

    //     const pageInfo = await PageInsights.insertMany(pageInsights);
    //     res.status(201).json({ success: true, data: pageInfo });
    //   } catch (error) {
    //     res.status(400).json({ success: `false ${error}` });
    //   }
    //   break;
    // default:
    //   res.status(400).json({ success: false });
    //   break;
  }
}
