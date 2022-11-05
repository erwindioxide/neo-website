// create component parent div
const navbar = document.createElement('div');

//create component
navbar.innerHTML = `
<!-- navbar LG -->
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark sticky-top shadow d-none d-md-block">
    <div class="container-fluid d-flex">
        <a class="navbar-brand" href="https://rampver.com/home">
            <img src="https://res.cloudinary.com/rampver-financials/image/upload/v1666923362/neo-website/components/rf-logo.png">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto order-2">
                <li class="nav-item mt-1 mr-2">
                    <h5><a href="https://rampver.com/about-us/rampver-mission-and-vision/"
                            class="nav-link gs font-white" style="color: #ffffff;" href="#">Who We Are</a></h5>
                </li>
                <li class="nav-item mt-1 mr-2">
                    <h5><a href="https://rampver.com/home#offer" class="nav-link gs font-white" style="color: #ffffff;" href="#">What We
                            Offer</a>
                    </h5>
                </li>
                <li class="nav-item mt-1 mr-2">
                    <h5><a href="https://rampver.com/home#learning-center" class="nav-link gs font-white" style="color: #ffffff;"
                            href="#">Learning Center</a>
                    </h5>
                </li>

                <li class="dropdown nav-item mt-1 mr-2">
                    <h5 href="#" class="dropdown-toggle nav-link gs font-white" style="color: #ffffff;"
                        data-toggle="dropdown">Support</h5>
                    <ul class="dropdown-menu navbar-dropdown">
                        <li class="nav-link"><a href="https://rampver.com/offers/mutual-funds/support/daily-navps.html">
                                <h6>NAVPS</h6>
                            </a></li>
                        <li class="nav-link"><a href="https://rampver.com/offers/mutual-funds/support/forms.html">
                                <h6>Forms and Guidelines</h6>
                            </a></li>
                        <li class="nav-link"><a href="https://rampver.com/offers/mutual-funds/support/ffs.html">
                                <h6>Fund Fact Sheets</h6>
                            </a></li>
                        <li class="nav-link"><a href="https://rampver.com/offers/mutual-funds/support/soa-request.html">
                                <h6>SOA Request</h6>
                            </a></li>
                    </ul>
                </li>

                <li class="nav-item mt-1 mr-4">
                    <h5><a href="https://rampver.com/inquire/campaign.html?id=contact"
                            class="nav-link gs font-white" style="color: #ffffff;">Contact Us</a></h5>
                </li>
                <li class="nav-item mt-1 newNavGoldSet d-none d-md-block" id="newNavGoldSetLG">
                    <h6 id="navGoldLG"><a class="nav-link gsBold font-white btn shadow inqSm-Gold"
                            href="https://rampver.com/inquire/campaign.html?id=NHP-TG"
                            style="background-color:#cc942c; color: #ffffff;">Inquire Now!</a></h6>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- navbar LG -->
<!-- navbar SM -->
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark sticky-top shadow d-md-none pl-0">
    <div class="container-fluid d-flex">
        <button class="navbar-toggler mr-2 border-0 ml-0" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand mr-auto" href="https://rampver.com/home">
            <img src="https://res.cloudinary.com/rampver-financials/image/upload/v1666923362/neo-website/components/rf-logo.png">
        </a>
        <div class="inqSm-Gold newNavGoldSet d-md-none" id="newNavGoldSetSM">
            <h6 class="ml-5 inqSm-Gold" id="navGoldSM"><a class="nav-link mt-2 gsBold font-white btn sticky-top shadow"
                    href="https://rampver.com/inquire/campaign.html?id=NHP-TG"
                    style="background-color:#cc942c; color: #ffffff;">Inquire Now!</a></h6>
        </div>
        <div class="collapse navbar-collapse ml-3" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto order-2">
                <li class="nav-item mt-1 mr-2">
                    <h5><a href="https://rampver.com/about-us/rampver-mission-and-vision/"
                            class="nav-link gs font-white" style="color: #ffffff;" href="#">Who We Are</a></h5>
                </li>
                <li class="nav-item mt-1 mr-2">
                    <h5><a href="#offer-sm" class="nav-link gs font-white" style="color: #ffffff;" href="https://rampver.com/home#offerSM">What We
                            Offer</a>
                    </h5>
                </li>
                <li class="nav-item mt-1 mr-2">
                    <h5><a href="https://rampver.com/home#learning-center" class="nav-link gs font-white" style="color: #ffffff;"
                            href="#">Learning Center</a>
                    </h5>
                </li>
                <li class="dropdown nav-item mt-1 mr-2">
                    <h5 href="#" class="dropdown-toggle nav-link gs font-white" style="color: #ffffff;"
                        data-toggle="dropdown">Support</h5>
                    <ul class="dropdown-menu navbar-dropdown">
                        <li class="nav-link"><a href="https://rampver.com/offers/mutual-funds/support/daily-navps.html">
                                <h6>NAVPS</h6>
                            </a></li>
                        <li class="nav-link"><a href="https://rampver.com/offers/mutual-funds/support/forms.html">
                                <h6>Forms and Guidelines</h6>
                            </a></li>
                        <li class="nav-link"><a href="https://rampver.com/offers/mutual-funds/support/ffs.html">
                                <h6>Fund Fact Sheets</h6>
                            </a></li>
                        <li class="nav-link"><a href="https://rampver.com/offers/mutual-funds/support/soa-request.html">
                                <h6>SOA Request</h6>
                            </a></li>
                    </ul>
                </li>
                <li class="nav-item mt-1 mr-4">
                    <h5><a href="https://rampver.com/inquire/campaign.html?id=contact"
                            class="nav-link gs font-white" style="color: #ffffff;">Contact Us</a></h5>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- navbar SM -->
	`;

//append component to host page
document.getElementById('navbarSet').appendChild(navbar);