const images = [];

// AUTOMATICKY VYGENERUJEME 39 OBRÁZKOV
for (let i = 1; i <= 39; i++) {
    images.push(`stavba${i}.jpg`);
}

const gallery = document.getElementById("gallery");

images.forEach(img => {
    const element = document.createElement("img");
    element.src = `images/${img}`;
    element.alt = "Ukážka práce";
    gallery.appendChild(element);
});

document.querySelectorAll(".more-btn").forEach(button => {
    button.addEventListener("click", function () {
        const id = this.getAttribute("data-target");
        const box = document.getElementById(id);

        box.classList.toggle("open");

        if (box.classList.contains("open")) {
            this.textContent = "Zobraziť menej";
        } else {
            this.textContent = "Zobraziť viac";
        }
    });
});


