import classModal from "./classModal.js";

const classListing = async () => {
  const searchBar = document.querySelector("#search-class-name");
  // Exits function if not on the right page
  if (!searchBar) return;
  
  // FUNCTIONS
  const data = await fetch("../data.json").then((res) => res.json());
  const { teachers, days, classes } = data;
  
  // Map over fetched classes and assign a random teacher, time, day etc.
  const classList = classes.map((entry) => ({
    ...entry,
    teacher: teachers[Math.floor(Math.random() * teachers.length)],
    startTime: Math.floor(Math.random() * 12),
    day: days[Math.floor(Math.random() * days.length)],
    inMorning: Math.random() < 0.5,
    spotsAvailable: Math.floor(Math.random() * 10) + 1,
  }));
  
  // Search bar logic
  searchBar.addEventListener("input", (e) => handleSearch(e));
  
  const handleSearch = (e) => {
    const result = e.target.value.toLowerCase();
    const filteredResults = classList.filter(
      (listing) =>
      listing.name.toLowerCase().includes(result) ||
      listing.teacher.name.toLowerCase().includes(result) ||
      listing.day.toLowerCase().includes(result)
      );  
      render(filteredResults);
    };

  // Render to DOM
  const render = (classList) => {
    const classElement = document.querySelector("#classes");
    // So new elements don't stack
    classElement.innerHTML = "";
    // Catch no search results
    if (classList.length === 0)
    return (classElement.innerHTML = `<h3>Sorry, no classes found!</h3>`);

    classElement.innerHTML = classList
      .map((result) => {
        const { id, name, image, teacher, startTime, day, inMorning } = result;

        return `
        <article class="class-card" style="background-color:${teacher.primaryColor}; border: 6px solid ${teacher.secondaryColor}">
          <img src=${image} alt="class" class="class-image"/>
          <div>
            <div class="class-info">
              <h3>${name}</h3>
              <div class="teacher-info">
                <img src=${teacher.image} class="teacher-image" alt="teacher" style="border: 6px solid ${teacher.secondaryColor};">
                <span>With ${teacher.name}</span>
              </div>
              <p>${day}s ${startTime == 0 ? 12 : startTime} - ${startTime + 1} ${
                inMorning ? "am" : "pm"
              }</p>
              <button value=${id} class="open-modal" style="border:6px solid ${teacher.secondaryColor}; background-color:${teacher.primaryColor}">Book Class!</button>
            </div>
          </div>
        </article>
      `;
      })
      .reduce((a, b) => a + b);
      
    const bookingBtns = document.querySelectorAll(".open-modal");
    bookingBtns.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const bookingData = classList.find(
          (item) => item.id === parseInt(e.target.value)
          );
        btn.style = `background-color: ${bookingData.teacher.secondaryColor}; border:6px solid ${bookingData.teacher.secondaryColor};`
        classModal(bookingData);

      })
    );
  };
  render(classList);
};

export default classListing;
