import Bottle from "bottlejs";
import { PageInsightsServices } from "./psi/PageInsightsServices";

const bottle = new Bottle();
bottle.service('psi', PageInsightsServices);

export default bottle;