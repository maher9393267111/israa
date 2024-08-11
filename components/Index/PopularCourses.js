import React from "react";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import CourseCard from "../Courses/CourseCard";
import { toast } from "react-hot-toast";

const PopularCourses = ({ user, courses }) => {
  const handleFav = async (courseId, fav) => {
    if (!user) {
      toast.error("Need to login first.", {
        style: {
          border: "1px solid #ff0033",
          padding: "16px",
          color: "#ff0033",
        },
        iconTheme: {
          primary: "#ff0033",
          secondary: "#FFFAEE",
        },
      });
      return;
    }
    try {
      const payload = {
        userId: user.id,
        courseId: courseId,
        fav: fav,
      };
      const url = `${baseUrl}/api/favourites/new`;
      const response = await axios.post(url, payload);

      toast.success(response.data.message, {
        style: {
          border: "1px solid #42ba96",
          padding: "16px",
          color: "#42ba96",
        },
        iconTheme: {
          primary: "#42ba96",
          secondary: "#ffffff",
        },
      });
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <>
      <div className="courses-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Learn At Your Own Pace</span>
            <h2 className="font-weight-black">Popular Courses</h2>
            <p>
              Explore all of our courses and pick your suitable ones to enroll
              and start learning with us! We ensure that you will never regret
              it!
            </p>
          </div>

          <div className="row justify-content-center">
            {courses &&
              courses.map((course) => (
                <CourseCard
                  key={course.id}
                  {...course}
                  onFav={() => handleFav(course.id, true)}
                  onUnFav={() => handleFav(course.id, false)}
                  userId={user && user.id}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCourses;
