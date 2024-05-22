document.addEventListener("DOMContentLoaded", function() {
    fetchDeals();
});

function fetchDeals() {
    fetch('deals.json')
        .then(response => response.json())
        .then(data => {
            generateDealCards(data);
        })
        .catch(error => console.error('Error fetching deals:', error));
}

function generateDealCards(deals) {
    var container = document.getElementById('deals-container');

    deals.forEach(deal => {
        var card = document.createElement('div');
        card.className = 'deal-card';

        var img = document.createElement('img');
        img.src = deal.image;
        img.alt = deal.destination;

        var details = document.createElement('div');
        details.className = 'deal-details';
        details.innerHTML = `<h3>${deal.destination}</h3><p>${deal.hotel}</p><p>${deal.price}</p><a href="${deal.link}" class="more-details">المزيد</a>`;

        card.appendChild(img);
        card.appendChild(details);
        container.appendChild(card);
    });
}
