const makeHamburger = () => {
  const hamburger = document.querySelector(".hamburger-wrapper");
  const nav = document.querySelector('nav');
  const header = document.querySelector('header');

  hamburger.addEventListener("click", () => {
    const top = hamburger.querySelector(":nth-child(1)");
    const middle = hamburger.querySelector(":nth-child(2)");
    const bottom = hamburger.querySelector(":nth-child(3)");

    header.classList.toggle('header-active')
    hamburger.classList.toggle("hamburger-active");
    top.classList.toggle("top-active");
    middle.classList.toggle("middle-active");
    bottom.classList.toggle("bottom-active");
    nav.classList.toggle('nav-active')
  });
};

export default makeHamburger;
