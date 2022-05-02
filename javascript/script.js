import makeHamburger from "./hamburger.js";
import renderComponents from "./components.js";
import renderClassList from "./classes.js"

(async () => {
  const data = await fetch('../data.json').then(res => res.json());
  await renderComponents("/html/components/header.html", "header");
  await renderComponents("/html/components/footer.html", "footer");
  await renderClassList();
  
  makeHamburger();
})();
