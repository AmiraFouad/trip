var slideIndex = 0;
var slideInterval;

document.addEventListener("DOMContentLoaded", function() {
    fetchDeals();
    startSlideshow();
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
        moreDetails.innerText = 'More Details';

        link.appendChild(img);
        link.appendChild(details);
        link.appendChild(moreDetails);
        slide.appendChild(link);
        wrapper.appendChild(slide);
    });
}

function startSlideshow() {
    slideInterval = setInterval(() => moveSlides(1), 3000); // Automatically move right every 3 seconds
}

function moveSlides(n) {
    clearInterval(slideInterval);
    slideIndex += n;

    var slides = document.getElementsByClassName("slideshow-slide");

    if (slideIndex >= slides.length - 2) { // Loop back to the start
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 3;
    }

    var wrapper = document.querySelector('.slideshow-wrapper');
    var offset = -(slideIndex * 100 / 3);
    wrapper.style.transform = 'translateX(' + offset + '%)';
    
    startSlideshow();
}
