import React from "react";

const OurLanguageCourses = () => {
  return (
    <>
      <div className="courses-area pt-100 pb-70 bg-f5f7fa">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Welcome to Engsera</span>
            <h2>Our Online Courses</h2>
            <p>
              Các khóa học điển hình
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-language-courses-box">
                <img src="/images/language-courses/img1.png" alt="image" />
                <h3>IELTS</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-language-courses-box">
                <img src="/images/language-courses/img2.png" alt="image" />
                <h3>TOIEC</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-language-courses-box">
                <img src="/images/language-courses/img3.png" alt="image" />
                <h3>TOEFL</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurLanguageCourses;
