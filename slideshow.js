var slideIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    fetchDeals();
});

function fetchDeals() {
    fetch('deals.json')
        .then(response => response.json())
        .then(data => {
            generateSlides(data);
            showSlides();
        })
        .catch(error => console.error('Error fetching deals:', error));
}

function generateSlides(deals) {
    var container = document.getElementById('slideshow-container');

    deals.forEach(deal => {
        var slide = document.createElement('div');
        slide.className = 'slideshow-slide';

        var img = document.createElement('img');
        img.className = 'slideshow-img';
        img.src = deal.image;
        img.alt = deal.destination;

        var details = document.createElement('div');
        details.className = 'deal-details';
        details.innerHTML = `<h3>${deal.destination}</h3><p>${deal.hotel}</p><p>${deal.price}</p>`;

        var moreDetails = document.createElement('a');
        moreDetails.className = 'more-details';
        moreDetails.href = deal.link;
        moreDetails.innerText = 'More Details';

        slide.appendChild(img);
        slide.appendChild(details);
        slide.appendChild(moreDetails);
        container.appendChild(slide);
    });
}

function showSlides() {
    var slides = document.getElementsByClassName("slideshow-slide");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function moveSlides(n) {
    slideIndex += n - 1;
    showSlides();
}
