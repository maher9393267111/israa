import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import React, { useEffect, useState } from "react";

const FunFacts = () => {
	const [students, setStudents] = useState(0);
	const [enrolls, setEnrolls] = useState(0);
	const [instructors, setInstractors] = useState(0);
	const [courses, setCourses] = useState(0);

	useEffect(() => {
		const fethStats = async () => {
			const url = `${baseUrl}/api/funfacts`;
			const response = await axios.get(url);
			setStudents(response.data.students);
			setEnrolls(response.data.enrolments);
			setInstractors(response.data.instructors);
			setCourses(response.data.courses);
		};

		fethStats();
	}, []);
	return (
		<>
			<div className="funfacts-area bg-fffaf3">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-3 col-md-3 col-sm-3 col-6">
							<div className="single-funfacts-item">
								<div className="content">
									<h3>{students}</h3>
									<p>Active Learners</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-3 col-sm-3 col-6">
							<div className="single-funfacts-item">
								<div className="content">
									<h3>{enrolls}</h3>
									<p>Enrolled Courses</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-3 col-sm-3 col-6">
							<div className="single-funfacts-item">
								<div className="content">
									<h3>{instructors}</h3>
									<p>Online Instructors</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-3 col-sm-3 col-6">
							<div className="single-funfacts-item">
								<div className="content">
									<h3>{courses}</h3>
									<p>On Demand Courses</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FunFacts;
