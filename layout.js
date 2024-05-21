// Function to insert the navigation bar and logo
function insertNavbar() {
    const navbarContent = `
        <nav class="navbar navbar-expand-md navbar-light">
            <a class="navbar-brand" href="index.html">
                <img src="media/logo.jpeg" id="logo" alt="Logo">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">الرئيسية</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="deals.html">عروضنا</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">من نحن</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">اتصل بنا</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;

    document.getElementById('header').innerHTML = navbarContent;
}

// Function to insert the footer
function insertFooter() {
    const footerContent = `
        <footer class="footer bg-light text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h5>من نحن</h5>
                        <p>تقدم شركتنا أفضل عروض السياحة داخل مصر وخارجها. نحن نقدم أفضل الفنادق والمنتجعات وحجز تذاكر الطيران بأسعار مناسبة. اكتشف أجمل المناطق في القاهرة، الأقصر، شرم الشيخ، والغردقة. استمتع بعروض لا تقاوم، احجز إجازتك اليوم</p>
                    </div>
                    <div class="col-md-4">
                        <h5>تابعنا</h5>
                        <a href="https://www.facebook.com" target="_blank">
                            <img src="media/facebook-icon.png" alt="Facebook" class="facebook">
                        </a>
                    </div>
                    <div class="col-md-4">
                        <h5>اتصل بنا</h5>
                        <p>Email: Info@perfecto-holiday.com</p>
                        <p>Phone: (+20) 10-0501-8712</p>
                    </div>
                </div>
                <div class="footer-copyright">
                    <p>Copyright &copy; 2024 Perfecto Holidays. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;

    // Insert the footer content into the element with ID 'footer'
    document.getElementById('footer').innerHTML = footerContent;
}

// Call the functions when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    insertNavbar();
    insertFooter();
});
