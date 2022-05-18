import makeHamburger from "./hamburger.js";
import renderComponents from "./components.js";
import renderClassList from "./classes.js";
import getHelp from "./help.js";

(async () => {
  await renderComponents("../html/components/header.html", "header");
  await renderComponents("../html/components/footer.html", "footer");
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

  }));

  const dialogBtn = document.querySelectorAll('.close-dialog');
  const dialog = document.querySelector('dialog')

  dialogBtn.forEach(btn => btn.addEventListener('click', (e) => {
    dialog.close()
  }))
})();

