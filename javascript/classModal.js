const classModal = (classInfo) => {
  // CACHE DOM
  const bookingForm = document.querySelector("#book-class");
  const modal = document.querySelector("dialog");
  const openBtn = document.querySelectorAll(".open-modal");
  const modalElement = document.querySelector("#class-booking-details");

  if (!classInfo) return;
  const { name, teacher, startTime, inMorning, day, spotsAvailable } =
    classInfo;

  const opening = () => {
    bookingForm.classList.remove("hide");
    modal.showModal();
  };
  // Allow for modal to be opened
  openBtn.forEach((btn) => btn.addEventListener("click", opening));

  // Show modal details depending on class clicked
  modalElement.innerHTML = `
    <h2>You are booking the ${name} class with ${teacher.name}</h2>
    <p>Date: next ${day} at ${startTime} - ${startTime + 1} ${
    inMorning ? "am" : "pm"
  }</p>
    
    <p>We have ${spotsAvailable} spots left for this class! Get in quick!</p>
      
    `;

  // Confirm booking functions
  bookingForm.addEventListener("submit", (e) => handleSubmit(e));

  const handleSubmit = (e) => {
    e.preventDefault();
    const [name, contact] = e.target;
    bookingForm.classList.add("hide");

    modalElement.innerHTML = `
        <h2>Confirming your booking...</h2>
        <progress/>
      `;
    setTimeout(() => {
      modalElement.innerHTML = `
        <h2>Thanks for booking ${name.value}!</h2>
        <p>
          We'll see you next ${day} ${inMorning ? "morning" : "afternoon"}. 
          ${teacher.name} will collect your payment then.
        </p>
        <p>A confirmation message has been sent to ${contact.value}.</p>

        <form method="dialog">
          <button>Close</button>
        </form>
        `;
    }, 3000);
  };
};

export default classModal;
