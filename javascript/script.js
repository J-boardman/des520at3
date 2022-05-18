import makeHamburger from "./hamburger.js";
import renderComponents from "./components.js";
import renderClassList from "./classes.js";
import getHelp from "./help.js";

(async () => {
<<<<<<< HEAD
  await renderComponents("../html/components/header.html", "header");
  await renderComponents("../html/components/footer.html", "footer");
=======
  await renderComponents("https://j-boardman.github.io/des520at3/html/components/header.html", "header");
  await renderComponents("https://j-boardman.github.io/des520at3/html/components/footer.html", "footer");
>>>>>>> cd6575e374bff17d18ff22ea5942ebbe8f7ff515
  await renderClassList();

  makeHamburger();
  getHelp();
  
  const formInput = document.querySelectorAll('.form-input');
  
  formInput.forEach(input => input.addEventListener('input', () => {
    const errMsg = input.nextElementSibling;
    if(input.value !== ''){
      input.classList.add('invalid:text-red-500','invalid:border-red-400');
      errMsg.classList.remove('invisible');
    } else {
      input.classList.remove('invalid:text-red-500', 'invalid:border-red-400');
      errMsg.classList.add('invisible');
    }

  }))
})();

