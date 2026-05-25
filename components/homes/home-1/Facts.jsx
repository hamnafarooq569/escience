  import React from "react";
  import Image from "next/image";
  export default function Facts() {
    return (
      <section className="section-key">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="key-wrap flex">
                <div className="key-image">
                  <Image
                    className="lazyload"
                    data-src="/Elements-09.png"
                    alt=""
                    src="/Elements-09.png"
                    width={1370}
                    height={1301}
                  />
                </div>
  <div className="content">
    <h5 className="wow fadeInUp" data-wow-delay="0s">
      Welcome to eScience Academy,
    </h5>

    <h2 className="wow fadeInUp" data-wow-delay="0.1s">
      Your Trusted online
      <br />
      learning platform
    </h2>

    <p className="wow fadeInUp" data-wow-delay="0.2s">
      Trusted online learning platform for O &amp; A Level students around the
      world.
    </p>

    <a href="#" className="facts-btn wow fadeInUp" data-wow-delay="0.3s">
      All Services
    </a>
  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
