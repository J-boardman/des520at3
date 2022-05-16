import makeHamburger from "./hamburger.js";
import renderComponents from "./components.js";
import renderClassList from "./classes.js"

(async () => {
  await renderComponents("https://j-boardman.github.io/des520at3/html/components/header.html", "header");
  await renderComponents("https://j-boardman.github.io/des520at3/html/components/footer.html", "footer");
  await renderClassList();
  
  makeHamburger();
})();
