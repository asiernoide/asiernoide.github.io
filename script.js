// Dark mode toggle
const toggle = document.getElementById("theme-toggle");

function updateToggleIcon() {
    const isLight = document.body.classList.contains("light");
    toggle.textContent = isLight ? "☀️" : "🌙";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    updateToggleIcon();
});

// Fade-in animation
const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.08 });

elements.forEach(el => observer.observe(el));
