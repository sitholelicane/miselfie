const menuButton = document.querySelector("#menu-icon");
const menuIcon = menuButton?.querySelector("i");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

function closeMenu() {
    navbar?.classList.remove("active");
    menuIcon?.classList.remove("bx-x");
    menuIcon?.classList.add("bx-menu");
    menuButton?.setAttribute("aria-expanded", "false");
}

menuButton?.addEventListener("click", () => {
    const isOpen = navbar?.classList.toggle("active");
    menuIcon?.classList.toggle("bx-menu", !isOpen);
    menuIcon?.classList.toggle("bx-x", isOpen);
    menuButton.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("main section[id]");
    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        const matchingLink = document.querySelector(`.navbar a[href="#${id}"]`);

        if (scrollPosition >= top && scrollPosition < top + height) {
            navLinks.forEach((link) => link.classList.remove("active"));
            matchingLink?.classList.add("active");
        }
    });
});

document.querySelectorAll(".read-more").forEach((button) => {
    button.addEventListener("click", () => {
        const target = document.getElementById(button.dataset.target);
        if (!target) return;

        const isHidden = target.hasAttribute("hidden");
        target.toggleAttribute("hidden", !isHidden);
        button.textContent = isHidden ? "Read Less" : "Read More";
    });
});

const year = document.querySelector("#year");
if (year) {
    year.textContent = new Date().getFullYear();
}

const typedTarget = document.querySelector(".multiple-text");
if (typedTarget && window.Typed) {
    new Typed(".multiple-text", {
        strings: ["responsive websites", "PHP/MySQL systems", "Android applications", "clean user interfaces"],
        typeSpeed: 80,
        backSpeed: 55,
        backDelay: 1200,
        loop: true
    });
} else if (typedTarget) {
    typedTarget.textContent = "responsive digital experiences";
}
