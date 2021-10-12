import psi from "psi";

export class PageInsightsServices {
  getSitePageInsights = async (sites: any) => {
    let results = [];

    await Promise.all(
      sites.map(async (site) => {
        const { data } = await psi(`${site.siteUrl}`, {
          nokey: "true",
          strategy: "mobile",
        });

        // Supply options to PSI and get back speed
        const data2 = await psi(`${site.siteUrl}`, {
          nokey: "true",
          strategy: "desktop",
        });

        const result = {
          requestedUrl: data.lighthouseResult.requestedUrl,
          siteId: site.siteId,
          mobile: {
            performanceScore:
              data.lighthouseResult.categories.performance.score * 100,
            fieldData: {
              cumulativeLayoutShift:
                data.lighthouseResult.audits["cumulative-layout-shift"]
                  .displayValue,
              firstContentfulPaint:
                data.lighthouseResult.audits["first-contentful-paint"]
                  .displayValue,
              firstInputDelay:
                data.lighthouseResult.audits["max-potential-fid"].displayValue,
              largestContentfulPaint:
                data.lighthouseResult.audits["largest-contentful-paint"]
                  .displayValue,
            },
            labData: {
              cumulativeLayoutShift:
                data.lighthouseResult.audits["cumulative-layout-shift"]
                  .displayValue,
              firstContentfulPaint:
                data.lighthouseResult.audits["first-contentful-paint"]
                  .displayValue,
              largestContentfulPaint:
                data.lighthouseResult.audits["largest-contentful-paint"]
                  .displayValue,
              speedIndex:
                data.lighthouseResult.audits["speed-index"].displayValue,
              TimeToInteractive:
                data.lighthouseResult.audits["interactive"].displayValue,
              totalBlockingTime:
                data.lighthouseResult.audits["total-blocking-time"]
                  .displayValue,
            },
          },
          desktop: {
            performanceScore:
              data2.data.lighthouseResult.categories.performance.score * 100,
            fieldData: {
              cumulativeLayoutShift:
                data2.data.lighthouseResult.audits["cumulative-layout-shift"]
                  .displayValue,
              firstContentfulPaint:
                data2.data.lighthouseResult.audits["first-contentful-paint"]
                  .displayValue,
              firstInputDelay:
                data2.data.lighthouseResult.audits["max-potential-fid"]
                  .displayValue,
              largestContentfulPaint:
                data2.data.lighthouseResult.audits["largest-contentful-paint"]
                  .displayValue,
            },
            labData: {
              cumulativeLayoutShift:
                data2.data.lighthouseResult.audits["cumulative-layout-shift"]
                  .displayValue,
              firstContentfulPaint:
                data2.data.lighthouseResult.audits["first-contentful-paint"]
                  .displayValue,
              largestContentfulPaint:
                data2.data.lighthouseResult.audits["largest-contentful-paint"]
                  .displayValue,
              speedIndex:
                data2.data.lighthouseResult.audits["speed-index"].displayValue,
              TimeToInteractive:
                data2.data.lighthouseResult.audits["interactive"].displayValue,
              totalBlockingTime:
                data2.data.lighthouseResult.audits["total-blocking-time"]
                  .displayValue,
            },
          },
        };

        results.push(result);
      })
    );

    return results;
  };
}
