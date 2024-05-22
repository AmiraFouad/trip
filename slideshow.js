var slideIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    fetchDeals();
});

function fetchDeals() {
    fetch('deals.json')
        .then(response => response.json())
        .then(data => {
            generateSlides(data);
        })
        .catch(error => console.error('Error fetching deals:', error));
}

function generateSlides(deals) {
    var container = document.getElementById('slideshow-container');
    var wrapper = document.createElement('div');
    wrapper.className = 'slideshow-wrapper';
    container.appendChild(wrapper);

    deals.forEach(deal => {
        var slide = document.createElement('div');
        slide.className = 'slideshow-slide';

        var link = document.createElement('a');
        link.href = deal.link;
        link.className = 'slide-link';

        var img = document.createElement('img');
        img.className = 'slideshow-img';
        img.src = deal.image;
        img.alt = deal.destination;

        var details = document.createElement('div');
        details.className = 'deal-details';
        details.innerHTML = `<h3>${deal.destination}</h3><p>${deal.hotel}</p><p>${deal.price}</p>`;

        var moreDetails = document.createElement('span');
        moreDetails.className = 'more-details';
        moreDetails.innerText = 'المزيد';

        link.appendChild(img);
        link.appendChild(details);
        link.appendChild(moreDetails);
        slide.appendChild(link);
        wrapper.appendChild(slide);
    });

    showSlides(slideIndex); // Initialize the slide position
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slideshow-slide");
    var totalSlides = slides.length;

    // Hide all slides initially
    for (var i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }

    // Show the current set of slides (3 slides)
    for (var i = 0; i < 3; i++) {
        var index = (n + i) % totalSlides;
        slides[index].style.display = "block";
    }
}

function moveSlides(n) {
    slideIndex += n;
    var slides = document.getElementsByClassName("slideshow-slide");
    var totalSlides = slides.length;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    showSlides(slideIndex);
}