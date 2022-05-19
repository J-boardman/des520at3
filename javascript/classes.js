const renderClassList = async () => {
  // Return if not on the right page
  const template = document.querySelector("template");
  if (!template) return;

  // Fetch data / cache dom
  const data = await fetch(
    "https://j-boardman.github.io/des520at3/data.json"
  ).then((res) => res.json());
  const main = document.querySelector("main");
  const searchbar = document.querySelector("#searchbar");
  const modal = document.querySelector("dialog");
  const bookingBtn = document.querySelector(".book-class");
  const bookingDetails = document.querySelector(".booking-details");

  // Search bar logic
  searchbar.addEventListener("input", (e) => {
    const result = e.target.value.toLowerCase();
    const filteredResults = data.classes.filter((listing) =>
      listing.name.toLowerCase().includes(result)
    );
    render(filteredResults);
  });

  // Rendering
  const render = (classList = data.classes) => {
    main.innerHTML = "";
    classList.forEach((result) => {
      const { id, name, image } = result;
      let temp = document.importNode(template, true);

      temp.content.querySelector("h1").textContent = name;
      temp.content.querySelector("img").src = `https://j-boardman.github.io/des520at3${image}`;

      const btn = temp.content.querySelector("button");
      btn.value = id;

      btn.addEventListener("click", (e) => openModal(e.target.value));

      main.appendChild(temp.content);
    });
  };
  render();

  // Fake booking logic
  const openModal = (id) => {
    const bookedClass = data.classes.find(
      (result) => result.id === parseInt(id)
    );
    modal.showModal();
    modal.querySelector("span").textContent = bookedClass.name;
  };
};

export default renderClassList;
