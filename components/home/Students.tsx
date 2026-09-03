import { useState } from "react";
import Container from "../shared/Container";
import Button from "../ui/Button";
import StudentCard from "./StudentCard";

import awlad from "../../app/assets/students/awlad.png";
import imran from "../../app/assets/students/Imran.png";
import jannatul from "../../app/assets/students/Jannatul.png";
import nishi from "../../app/assets/students/Nishi.png";

const students = [
  { id: 1, image: awlad, name: "Awlad Hossain", role: "UIUX Designer" },
  { id: 2, image: jannatul, name: "Jannatul Islam", role: "Motion Design" },
  { id: 3, image: imran, name: "Imran Hossain", role: "Graphic Designer" },
  { id: 4, image: nishi, name: "Nishi Akter", role: "Web Developer" },
  { id: 5, image: awlad, name: "Rafiq Hasan", role: "Frontend Developer" },
  { id: 6, image: jannatul, name: "Tasnia Rahman", role: "Data Analyst" },
  { id: 7, image: imran, name: "Sakib Ahmed", role: "Backend Developer" },
  { id: 8, image: nishi, name: "Maliha Khan", role: "Digital Marketer" },
  { id: 9, image: awlad, name: "Tanvir Islam", role: "Project Manager" },
  { id: 10, image: jannatul, name: "Nusrat Jahan", role: "Content Strategist" },
];

export default function Students() {
  const [showAll, setShowAll] = useState(false);

  const visibleStudents = showAll ? students : students.slice(0, 4);

  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className="mb-[50px]">
          <h2 className="font-sans text-[32px] font-semibold leading-[45px] text-dark-01 sm:text-[38px] lg:text-[45px]">
            Meet Our Successful Students
          </h2>
          <p className="mt-5 max-w-[556px] font-sans text-[16px] font-normal leading-[30px] text-dark-03">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[24px]">
          {visibleStudents.map((student) => (
            <StudentCard key={student.id} {...student} />
          ))}
        </div>

        <div className="mt-[50px] flex justify-center">
          <Button
            variant="primary"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "View Less" : "View All"}
          </Button>
        </div>
      </Container>
    </section>
  );
}
