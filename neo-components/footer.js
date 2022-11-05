// create component parent div
const footer = document.createElement('div');

//create component
footer.innerHTML = `
<!-- start footer -->
<div class="footer">
    <br><br>
    <div class="row mx-2">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h5 class="font-italic gsBold text-rampver text-center mb-0">We help people fulfill financial
                dreams.</h5>
            <br>
            <p class="text-rampver gs text-center">Ⓒ Rampver Financials 2022 | All Rights Reserved</p>
            <br>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 footer-text">
            <h5 class="gsBold text-rampver text-center mb-0 d-none d-md-block">
                <a href="https://rampver.com/terms-and-conditions/" target="_blank" class="text-rampver">Terms
                    and Conditions</a> |
                <a href="https://rampver.com/privacy" target="_blank" class="text-rampver">Data Privacy
                    Policy</a>
            </h5>
            <h5 class="gsBold text-rampver text-center mb-0 d-md-none mb-2">
                <a href="https://rampver.com/notices/terms-and-conditions.html" target="_blank" class="text-rampver">Terms
                    and Conditions</a>
            </h5>
            <h5 class="gsBold text-rampver text-center mb-0 d-md-none mb-2">
                <a href="https://rampver.com/notices/privacy-policy.html" target="_blank" class="text-rampver">Data Privacy
                    Policy</a>
            </h5>
            <p class="text-rampver text-center gs mb-0">8F PDCP Bank Centre,</p>
            <p class="text-rampver text-center gs mb-0">V.A. Rufino cor. L.P. Leviste Sts., Salcedo Village</p>
            <p class="text-rampver text-center gs mb-0">1227, Makati City, Metro Manila, Philippines</p>
            <p class="text-rampver text-center gs mb-0">(+632) 8812-1995 | (+632) 8894-1811</p>
            <p class="text-rampver text-center gs mb-0">info@rampver.com</p>
        </div>
        <br>
    </div>
    <br><br>
    <h5 class="text-rampver gsBold text-center mt-2 mb-2 mx-3">Rampver Financials is registered with:</h5>
    <div class="container">
        <div class="reg-logos row container-fluid d-none d-md-block">
            <br>
            <br>
            <div class="row mx-5">
                <div class="col-lg-3 col-md-3 text-center">
                    <img src="https://res.cloudinary.com/rampver-financials/image/upload/v1666923362/neo-website/components/regulator/sec.png" class="lazyload reg-logos-icon" alt="">
                </div>
                <div class="col-lg-3 col-md-3 text-center">
                    <img src="https://res.cloudinary.com/rampver-financials/image/upload/v1666923361/neo-website/components/regulator/ic.jpg" class="lazyload reg-logos-icon" alt="">
                </div>
                <div class="col-lg-3 col-md-3 text-center">
                    <img src="https://res.cloudinary.com/rampver-financials/image/upload/v1666923361/neo-website/components/regulator/amlc.jpg" class="lazyload reg-logos-icon" alt="">
                </div>
                <div class="col-lg-3 col-md-3 text-center">
                    <img src="https://res.cloudinary.com/rampver-financials/image/upload/v1666923361/neo-website/components/regulator/npc.jpg" class="lazyload reg-logos-icon" alt="">
                </div>
            </div>
        </div>
        <div class="text-center d-md-none">
            <img src="https://res.cloudinary.com/rampver-financials/image/upload/v1666923362/neo-website/components/regulator/reg-small.png" class="lazyload img-fluid" alt="">
            <img src="https://res.cloudinary.com/rampver-financials/image/upload/v1666923361/neo-website/components/regulator/reg-small-2.png" class="lazyload img-fluid" alt="">
        </div>
    </div>
</div>
<br>
<div class="bottombar">
    <br>
</div>
<!-- end footer -->
	`;

//append component to host page
document.getElementById('footerSet').appendChild(footer);