import mongoose from "mongoose";

const PageInsightsSchema = new mongoose.Schema({
  requestedUrl: String,
  siteId: String,
  mobile: {
    performanceScore: String,
    fieldData: {
      cumulativeLayoutShift: String,
      firstContentfulPaint: String,
      firstInputDelay: String,
      largestContentfulPaint: String,
    },
    labData: {
      cumulativeLayoutShift: String,
      firstContentfulPaint: String,
      largestContentfulPaint: String,
      speedIndex: String,
      TimeToInteractive: String,
      totalBlockingTime: String,
    },
  },
  desktop: {
    performanceScore: String,
    fieldData: {
      cumulativeLayoutShift: String,
      firstContentfulPaint: String,
      firstInputDelay: String,
      largestContentfulPaint: String,
    },
    labData: {
      cumulativeLayoutShift: String,
      firstContentfulPaint: String,
      largestContentfulPaint: String,
      speedIndex: String,
      TimeToInteractive: String,
      totalBlockingTime: String,
    },
  },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

export default module.exports =
  mongoose.models.page_speed_insight ||
  mongoose.model("page_speed_insight", PageInsightsSchema);
