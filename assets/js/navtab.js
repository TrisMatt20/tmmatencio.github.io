document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".home, .about, .projects, .pr, .contact");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove "active" class from all links
            navLinks.forEach(item => item.classList.remove("active"));

            // Add "active" class to the clicked link
            this.classList.add("active");
        });
    });
});