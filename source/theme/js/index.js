import { bindHandlers, executeEnhancers, makeEnhancers, makeHandlers } from "./utils";

import navLoggedIn from "./navLoggedIn";
import productsNavigation from "./productsNavigation";
import subNavigation from "./subNavigation";
import toggleClass from "./toggleClass";

const handlers = makeHandlers([toggleClass]);
const enhancers = makeEnhancers([navLoggedIn, productsNavigation, subNavigation]);

const main = () => {
  bindHandlers(handlers);
  executeEnhancers(enhancers);
};

if (document.readyState !== "loading") {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}
