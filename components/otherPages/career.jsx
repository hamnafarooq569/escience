import React from "react";

export default function Career() {
  return (
    <section className="career-page tf-spacing-5 bg-white">
      <div className="tf-container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <div className="career-form-box">
              <div className="heading-section text-center">
                <h2 className="fw-7 font-cardo">Apply For Career</h2>
                <div className="sub fs-15">
                  Submit your details and our team will contact you soon.
                </div>
              </div>

              <form className="career-form">
                <div className="cols">
                  <fieldset className="tf-field">
                    <input
                      className="tf-input style-1"
                      type="text"
                      placeholder=""
                      name="name"
                      required
                    />
                    <label className="tf-field-label fs-15">
                      Enter Your Name
                    </label>
                  </fieldset>
                </div>

                <div className="cols">
                  <fieldset className="tf-field">
                    <input
                      className="tf-input style-1"
                      type="email"
                      placeholder=""
                      name="email"
                      required
                    />
                    <label className="tf-field-label fs-15">
                      Enter Your Email
                    </label>
                  </fieldset>
                </div>

                <div className="cols">
                  <fieldset className="tf-field">
                    <input
                      className="tf-input style-1"
                      type="text"
                      placeholder=""
                      name="position"
                      required
                    />
                    <label className="tf-field-label fs-15">
                      Preferred Position
                    </label>
                  </fieldset>
                </div>

                <div className="cols">
                  <fieldset className="tf-field">
                    <input
                      className="tf-input style-1"
                      type="tel"
                      placeholder=""
                      name="contact"
                      required
                    />
                    <label className="tf-field-label fs-15">
                      Enter Your Contact Number
                    </label>
                  </fieldset>
                </div>

                <div className="career-upload">
                  <label className="fs-15">Upload Your Resume</label>
                  <input type="file" accept=".pdf,.doc,.docx" required />
                </div>

                <fieldset className="tf-field">
                  <textarea
                    className="tf-input style-1"
                    name="cover_letter"
                    rows={5}
                    placeholder=""
                    required
                  />
                  <label className="tf-field-label type-textarea fs-15">
                    Cover Letter
                  </label>
                </fieldset>

                <div className="career-check">
                  <input type="checkbox" id="careerTerms" required />
                  <label htmlFor="careerTerms">
                    By clicking Submit, you confirm that the information provided
                    is accurate and complete to the best of your knowledge. You
                    agree to be bound by our <strong>Terms and Conditions</strong>{" "}
                    and acknowledge that you have read our{" "}
                    <strong>Privacy Policy</strong>.
                  </label>
                </div>

                <button type="submit" className="button-submit tf-btn w-100">
                  Submit
                  <i className="icon-arrow-top-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}