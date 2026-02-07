// Smooth Scroll
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Scroll Animation (2D reveal)
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add("show");
        }
    });
});
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-modal");

function openCert(src) {
    modal.style.display = "flex";
    modalImg.src = src;
}

closeBtn.onclick = () => {
    modal.style.display = "none";
};

modal.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
