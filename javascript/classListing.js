import classModal from "./classModal.js";

const classListing = async () => {
  // React state substitute
  const search = {
    results: [],
    setResults: function (data) {
      this.results = data;
    },
  };

  // Fetching and setting initial class state
  const data = await fetch("../data.json").then((res) => res.json());
  const { teachers, days } = data;

  // Map over the classes and assign a random teacher, time, day etc.
  const classes = data.classes.map((entry) => ({
    ...entry,
    teacher: teachers[Math.floor(Math.random() * teachers.length)],
    startTime: Math.floor(Math.random() * 12),
    day: days[Math.floor(Math.random() * days.length)],
    inMorning: Math.random() < 0.5,
    spotsAvailable: Math.floor(Math.random()*12)+1
  }));

  // Set initial search results
  search.setResults([...classes]);

  const searchBar = document.querySelector("#search-class-name");
  if(!searchBar) return;
  searchBar.addEventListener("input", (e) => handleSearch(e));

  const handleSearch = (e) => {
    const result = e.target.value.toLowerCase();

    const filteredResults = classes.filter(
      (listing) =>
        listing.name.toLowerCase().includes(result) ||
        listing.teacher.name.toLowerCase().includes(result) ||
        listing.day.toLowerCase().includes(result)
    );

    search.setResults(filteredResults);
    render();
  };

  // Rendering
  const render = () => {
    const classElement = document.querySelector("#classes");
    const { results } = search;
    // So new elements don't stack
    classElement.innerHTML = "";

    // Catch no search results
    if (results.length === 0)
      return (classElement.innerHTML = `<h3>Sorry, no classes found!</h3>`);

    classElement.innerHTML = results
      .map((result) => {
        const { id, name, image, teacher, startTime, day, inMorning } = result;

        return `
        <article>
          <img src=${image} alt="class" class="class-image"/>
          <div>
            <h3>${name}</h3>
            <p>${day}s ${startTime == 0 ? 12 : startTime} - ${
          startTime + 1
        } ${inMorning ? 'am' : 'pm'}</p>
            <div class="teacher-details">
              <img src=${teacher.image} alt= "teacher" class="teacher-image"/>
              <span class="teaher-name">Taught by: ${teacher.name}</span>
              </div>
              <button value=${id} class="open-modal">Book Class!</button>
          </div>
        </article>
      `;
      })
      .reduce((a, b) => a + b);
  };
  render();

  const bookingBtns = document.querySelectorAll(".open-modal");
  bookingBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const bookingData = search.results.find(item => item.id === parseInt(e.target.value));
      classModal(bookingData);
    }));

};

export default classListing;