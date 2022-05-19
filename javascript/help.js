const getHelp = () => {
  const modal = document.querySelector("dialog");
  const helpBtn = document.querySelector(".help-btn");
  if (!helpBtn) return;

  helpBtn.addEventListener("click", () => {
    modal.showModal();
  });
};

export default getHelp;
