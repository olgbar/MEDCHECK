window.addEventListener("load", function () {
    document.getElementById("btnSubmit").addEventListener("click", function () {
        alert("Gracias por contactarnos.");
    });
});

document.querySelectorAll('.navbar-nav .nav-link').forEach(function (item) {
    item.addEventListener('click', function () {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navbarToggler = document.querySelector('.navbar-toggler');

        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});
