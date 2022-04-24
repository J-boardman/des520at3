const classModule = async () => {
  // State subsitutes
  const classData = {
    classList: [],
    setClassList: function (data) {
      this.classList = data;
    },
  };

  // Will be used to .filter classData results
  const searchResults = {
    results: [],
    setResults: function (data) {
      this.results = data;
    },
  };

  // Fetching and setting initial class state
  const data = await fetch("../data.json").then((res) => res.json());
  classData.setClassList([...data.classes]);

  
  searchResults.setResults([...data.classes]);
  
  // Setting random values for class times, prices and teachers

  const searchBar = document.querySelector("#class-search");

  searchBar.addEventListener("input", (e) => {
    const { value } = e.target;

    const filteredResults = classData.classList.filter((listing) =>
      listing.name.toLowerCase().includes(value.toLowerCase())
    );

    searchResults.setResults(filteredResults);
    render();
  });

  // Rendering
  const render = () => {
    const classElement = document.querySelector("#classes");

    // So new elements don't stack
    classElement.innerHTML = "";

    // Catch no search results
    if (searchResults.results.length === 0)
      classElement.innerHTML = `<h3>No classes found...</h3>`;

    // Render search results
    searchResults.results.forEach((listing) => {
      const { name, price, time } = listing;
      return (classElement.innerHTML += `
          <article>
            <h3>${name}</h3>
          </article>
        `);
    });
  };
  render();
};

export default classModule;
