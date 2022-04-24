const classModal = (classInfo) => {
  // CACHE DOM
  const bookingForm = document.querySelector("#book-class");
  const modal = document.querySelector("dialog");
  const openBtn = document.querySelectorAll(".open-modal");
  const modalElement = document.querySelector("#class-booking-details");

  // Allow for modal to be opened
  openBtn.forEach((btn) =>
    btn.addEventListener("click", () => {
      bookingForm.classList.remove("hide");
      modal.showModal();
    })
  );

  
  if (!classInfo) return;

  // Dynamic class choices
  modalElement.innerHTML = `
    <h2>You are booking the ${classInfo.name} class with ${
    classInfo.teacher.name
  }</h2>
    <p>Date: next ${classInfo.day} at ${classInfo.startTime} - ${
    classInfo.startTime + 1
  } ${classInfo.inMorning ? "am" : "pm"}</p>
    
    <p>We have ${
      classInfo.spotsAvailable
    } spots left for this class! Get in quick!</p>
      
    `;

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
          We'll see you next ${classInfo.day} ${
        classInfo.inMorning ? "morning" : "afternoon"
      }. 
          ${classInfo.teacher.name} will collect your payment then.
        </p>
        <p>A confirmation message has been sent to ${contact.value}.</p>
        `;
        name.value = contact.value = ''
    }, 3000);

  };

  const exitBtn = document.querySelectorAll(".close-modal");
  exitBtn.forEach((btn) =>
    btn.addEventListener("click", () => {
      bookingForm.classList.remove("hide");
      modal.close();
    })
  );
};

export default classModal;
