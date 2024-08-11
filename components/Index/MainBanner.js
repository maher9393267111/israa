import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MainBanner = ({ user }) => {
  return (
    <>
      <div className="main-banner-wrapper">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="main-banner-wrapper-content">
                <h1>Best Online Courses</h1>
                <p>
                  Ở đây có những khóa học tiếng anh chất lượng
                </p>

                <motion.div whileTap={{ scale: 0.9 }}>
                  {user ? (
                    <Link href="/courses">
                      <a className="default-btn">
                        <i className="flaticon-user"></i> Browse Courses{" "}
                        <span></span>
                      </a>
                    </Link>
                  ) : (
                    <Link href="/authentication">
                      <a className="default-btn">
                        <i className="flaticon-user"></i> Join For Free{" "}
                        <span></span>
                      </a>
                    </Link>
                  )}
                </motion.div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="main-banner-wrapper-image text-center">
                <img src="/images/banner/banner-img.png" alt="image" />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="banner-shape14">
          <img src="/images/shape/banner-shape15.png" alt="image" />
        </div>
        <div className="banner-shape15">
          <img src="/images/shape/banner-shape16.png" alt="image" />
        </div>
        <div className="banner-shape16">
          <img src="/images/shape/banner-shape17.png" alt="image" />
        </div>
        <div className="banner-shape17">
          <img src="/images/shape/banner-shape18.png" alt="image" />
        </div>
        <div className="banner-shape18">
          <img src="/images/shape/banner-shape19.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
