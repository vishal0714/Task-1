document
  .querySelectorAll('.input-group input[type="radio"]')
  .forEach((radio) => {
    radio.addEventListener("change", () => {
      document.querySelectorAll(".details").forEach((detail) => {
        detail.style.display = "none";
      });
      if (radio.checked) {
        const parent = radio.closest(".input-group");
        const detail = parent.querySelector(".details");
        if (detail) {
          detail.style.display = "flex";
        }
        const text = parent.parentElement.querySelector(".price h4").innerText;
        document.getElementById("total").innerText = text;
      }
    });
  });
