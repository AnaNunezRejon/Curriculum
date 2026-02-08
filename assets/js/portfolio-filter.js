const filterLinks = document.querySelectorAll(".portafolio__link");
const items = document.querySelectorAll(".gallery__item");

filterLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        // quitar active
        document.querySelectorAll(".portafolio__option")
            .forEach(li => li.classList.remove("portafolio__option--active"));

        link.parentElement.classList.add("portafolio__option--active");

        const filter = link.dataset.filter;

        items.forEach(item => {
            const category = item.dataset.category;

            if (filter === "all" || category === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
