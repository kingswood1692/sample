import Bottle from "bottlejs";
import { ContentService } from "./content/contentService";
// import { PageInsightsServices } from "./psi/PageInsightsService";

const bottle = new Bottle();
bottle.service('content', ContentService);
// bottle.service('psi', PageInsightsServices);

export default bottle;