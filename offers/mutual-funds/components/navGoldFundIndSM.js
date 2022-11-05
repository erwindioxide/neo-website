// create component parent div
let newNavGoldSM = document.createElement('div');

// create the sticky btn and modal component
newNavGoldSM.innerHTML = `
  <h6 class="ml-5"><a class="nav-link mt-2 gsBold font-white btn sticky-top shadow"
  style="background-color:#cc942c; color: #ffffff;" data-toggle="modal" data-target="#inquireformSM">Inquire Now!</a></h6>

  <div class="modal fade" id="inquireformSM" role="dialog">
  <div class="modal-dialog" role="document">
          <div class="modal-content">
                  <div class="modal-header d-flex align-items-center">
                  <h5 class="text-left claimHeader">Fill out to know more!</h5>
                  <h5 class="text-secondary font-weight-bold text-right ml-auto p-2" data-dismiss="modal">
                  X
                  </h5>
                  </div>
                  <div class="modal-body">
                  <h4 class="text-left claimHeader text-center" id="inquireModalSM"></h4>
                  <br>
                          <div role="document">
                                  <form action="https://rampver.com/mfinquiryform2/#wpcf7-f11985-o1" method="post"
                                          id="formstring">
                                          <div style="display: none;">
                                                  <input type="hidden" name="_wpcf7" value="11985" />
                                                  <input type="hidden" name="_wpcf7_version" value="5.1.4" />
                                                  <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                                  <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f11985-o1" />
                                                  <input type="hidden" name="_wpcf7_container_post" value="0" />
                                          </div>
                                          <input type="hidden" name="fundname" id="fundnamevalueSM" />
                                          <input type="hidden" name="prospectus" id="prospectusSM" />
                                          <input type="hidden" name="ffs" id="ffsSM" />
                                          <input type="hidden" name="initialamt" id="initialamtSM" />
                                          <input type="hidden" name="additionalamt" id="additionalamtSM" />
                                          <input type="hidden" name="urlGet" id="urlGetSM" />
                                          <input type="hidden" name="imgGet" id="imgGetSM" />
                                          <input type="hidden" name="suitability" id="suitabilitySM" />
                                          <input type="hidden" name="intro_email" id="intro_emailSM" />
                                          <input type="hidden" name="reason1" id="reason1SM" />
                                          <input type="hidden" name="reason2" id="reason2SM" />
                                          <input type="hidden" name="reason3" id="reason3SM" />
                                          <input type="hidden" name="guidelines" id="guidelinesSM" />
  
                                          <div class="form-group">
                                                  <label for="salutation" class="claimHeader">Salutation*</label>
                                                  <select class="form-control" id="salutation" name="salutation" required>
                                                  <option selected="true" disabled="disabled" class="font-italic">(Choose one)</option>
                                                  <option value="Mr.">Mr.</option>
                                                  <option value="Ms.">Ms.</option>
                                                  <option value="Mrs.">Mrs.</option>
                                                  <option value="M.">M.</option>
                                                  </select>
                                          </div>
                                          <div class="form-group">
                                                  <label for="fullname" class="claimHeader">Full Name*</label>
                                                  <input type="text" class="form-control" name="fullname" required
                                                          placeholder="Full Name" id="fullname" onkeyup="validatorFN()" />
                                                  <small class="d-none text-danger font-italic" id="errMsgFullName">Invalid
                                                          input.</small>
                                          </div>
                                          <div class="form-group">
                                                  <label for="email" class="claimHeader">Email Address*</label>
                                                  <input type="email" class="form-control" name="email" required
                                                          placeholder="Email Address" id="email" onkeyup="validatorEmail()" />
                                                  <small class="d-none text-danger font-italic" id="errMsgEmail">Invalid
                                                          input.</small>
                                          </div>
                                          <div class="form-group">
                                                  <label for="contact" class="claimHeader">Contact Number*</label>
                                                  <input type="number" class="form-control" required
                                                          placeholder="Contact Number" name="contact" id="contact" />
                                          </div>
                                          <div class="form-group">
                                                  <label for="referral" class="claimHeader">How did you know about Rampver
                                                          Financials?</label>
                                                  <select name="referral" id="referral" class="form-control">
                                                  <option selected="true" disabled="disabled" class="font-italic">(Choose one)</option>
                                                  <option value="FB/Social Media">Facebook/Social Media</option>
                                                  <option value="Youtube">Youtube Videos</option>
                                                  <option value="Tiktok">Tiktok</option>
                                                  <option value="Website">Rampver Website</option>
                                                  <option value="Blogs/Articles">Blogs/Articles</option>
                                                  <option value="Talks/Conferences/Live Events">Talks/Conferences/Live Events</option>
                                                  <option value="IMG">IMG - International Marketing Group</option>
                                                  <option value="Google Search">Google Search</option>
                                                  <option value="Friend/Family Referral">Friend/Family Referral</option>
                                                  <option value="Flyers/Printed Materials">Flyers/Printed Materials </option>
                                                  <option value="Others">Others</option>
                                                  </select>
                                          </div>
                                          <div class="form-group">
                                                  <label class="claimHeader" for="question">Any questions for us?
                                                  </label>
                                                  <br />
                                                  <textarea type="text" name="question" class="form-control" cols="30"
                                                          rows="3" placeholder="Your Message" id="message"
                                                          onkeyup="validatorMessage()"></textarea>
                                                  <small class="d-none text-danger font-italic" id="errMsgMessage">Invalid
                                                          input.</small>
                                          </div>
                                          <div class="form-check">
                                                  <input type="checkbox" class="form-check-input" name="consent" id="consent"
                                                          required />
                                                  <small class="text-secondary font-italic form-check-label" for="consent">
                                                          I agree to receive regular updates, promotions, and
                                                          recommendations from Rampver
                                                          Financials. Visit
                                                          <a href="rampver.com/privacy">rampver.com/privacy</a> for more info.
                                                  </small>
                                          </div>
                                          <div class="text-center mt-4 mb-4">
                                                  <input type="submit" id="trigger" value="I want to invest!"
                                                          class="text-white btn rfbtn font-weight-bold btn-lg"
                                                          onclick="submitDetailsSM()" />
                                                  <br />
                                                  <img src="../img/preloader.gif" class="d-none pulse-load" id="pulse-loadSM"
                                                  style="width: 23%"/>
                                          </div>
                                  </form>
                          </div>
                  </div>
          </div>
  </div>
  </div>
  `;

//append component to host page
document.getElementById('newNavGoldSetSM').appendChild(newNavGoldSM);

function submitDetailsSM() {
	document.getElementById('pulse-loadSM').classList.remove('d-none');
	setTimeout(function submitDetails() {
	  document.getElementById('pulse-loadSM').classList.add('d-none');
	}, 15000);
  }
  