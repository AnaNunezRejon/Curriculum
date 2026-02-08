
document.addEventListener("DOMContentLoaded", (event) =>{

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
            <iframe class="contacto__iframe"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Padul,Granada,Spain&output=embed">
            </iframe>
        `;
    }, 600);

});