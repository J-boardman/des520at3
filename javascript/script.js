import classListing from "./classListing.js";
import classModal from "./classModal.js"
import renderComponents from "./renderComponents.js"

(async() => {
  await classListing();
  classModal();
})();

renderComponents("/html/components/header.html", "header");
renderComponents("/html/components/footer.html", "footer");