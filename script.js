// document
//   .querySelectorAll('.input-group input[type="radio"]')
//   .forEach((radio) => {
//     radio.addEventListener("change", () => {
//       document.querySelectorAll(".details").forEach((detail) => {
//         detail.style.display = "none";
//       });
//       if (radio.checked) {
//         const parent = radio.closest(".input-group");
//         const detail = parent.querySelector(".details");
//         if (detail) {
//           detail.style.display = "block";
//         }
//       }
//     });
//   });

document.querySelectorAll(".input-radio").forEach((radio) => {
  radio.addEventListener("change", () => {
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("active");
    });
    const card = radio.closest(".card");
    card.classList.add("active");
  });
});
