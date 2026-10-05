const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".card");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter;
    chips.forEach((c) => {
      const active = c === chip;
      c.classList.toggle("active", active);
      c.setAttribute("aria-pressed", String(active));
    });
    cards.forEach((card) => {
      card.hidden = !(filter === "all" || card.dataset.cat === filter || card.dataset.cat === "all");
    });
  });
});
