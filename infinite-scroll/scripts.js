document.addEventListener("DOMContentLoaded", async function () {
    const imageContainer = document.querySelector(".image-container");

    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();

    imagesLoaded = 0;

    function loadImages() {
        for (let i = imagesLoaded; i < imagesLoaded + 30 && i < data.length; i++) {
            const imageCard = document.createElement("div");
            imageCard.classList.add("image-card");

            const image = document.createElement("img");
            image.src = data[i].url;

            const title = document.createElement("p");
            title.textContent = `Title: ${data[i].title}`;

            imageCard.appendChild(image);
            imageCard.appendChild(title);

            imageContainer.appendChild(imageCard);
        }
    }

    loadImages();

    window.addEventListener("scroll", function (ev) {
        if (window.scrollY + window.innerHeight >= document.body.clientHeight) {
            loadImages();
        }
    });
});
