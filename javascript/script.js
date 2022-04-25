import classListing from "./classListing.js";
import classModal from "./classModal.js"
import renderComponents from "./renderComponents.js"

(async() => {
  await classListing();
  classModal();
  await renderComponents("/html/components/footer.html", "footer");
  await renderComponents("/html/components/header.html", "header");
  await renderComponents("/html/components/nav.html", ".desktop-nav");
  await renderComponents("/html/components/nav.html", ".mobile-nav");
  
  const hamburger = document.querySelector('.hamburger-wrapper');
  const mobileNav = document.querySelector('#mobile-nav');

  hamburger.addEventListener('click', () => {
    const top = hamburger.querySelector(':nth-child(1)');
    
    const middle = hamburger.querySelector(':nth-child(2)');
    
    const bottom = hamburger.querySelector(':nth-child(3)');
    hamburger.classList.toggle('hamburger-active')
    top.classList.toggle('top-active');
    middle.classList.toggle('middle-active');
    bottom.classList.toggle('bottom-active');

    
    mobileNav.classList.toggle('mobile-nav-active');
    mobileNav.classList.toggle('mobile-nav');

    
  })
})();


