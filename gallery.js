const images = [];

// AUTOMATICKY VYGENERUJEME 39 OBRÁZKOV
for (let i = 1; i <= 39; i++) {
    images.push(`stavba${i}.jpg`);
}

const gallery = document.getElementById("gallery");

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


images.forEach(img => {
    const element = document.createElement("img");
    element.src = `images/${img}`;
    element.alt = "Ukážka práce";
    gallery.appendChild(element);
});

// funkcia na zobrazenie toastu
function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.classList.add("toast-message");

    // farebné varianty
    if (type === "error") {
        toast.style.background = "#E00000";
    } else {
        toast.style.background = "#008a2e";
    }

    toast.textContent = message;

    document.getElementById("toast").appendChild(toast);

    // odstránenie po 4s
    setTimeout(() => {
        toast.remove();
    }, 4000);
}

document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        showToast("Vaša správa bola úspešne odoslaná. Ďakujeme!", "success");
        form.reset();
    } else {
        showToast("Nastala chyba pri odosielaní formulára. Skúste znova.", "error");
    }
});



