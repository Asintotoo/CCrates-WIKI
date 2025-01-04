document.addEventListener("DOMContentLoaded", function () {
    const crateMenu = document.querySelector('aside.sidebar li a[href="#"]'); // Crates link
    const subMenu = crateMenu.nextElementSibling; // The sub-menu for Openings

    // Toggle the display of sub-menu when Crates is clicked
    crateMenu.addEventListener('click', function (e) {
        e.preventDefault();
        if (subMenu.style.display === "block") {
            subMenu.style.display = "none";
        } else {
            subMenu.style.display = "block";
        }
    });
});
