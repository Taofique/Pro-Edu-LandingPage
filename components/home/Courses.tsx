import { useState } from "react";
import { Link } from "react-router";
import Container from "../shared/Container";
import Button from "../ui/Button";
import CourseCard from "../courses/CourseCard";
import coursesData from "../../app/data/courseData.json";

const COURSES_PER_PAGE = 6;

export default function Courses() {
  const [visibleCount, setVisibleCount] = useState(COURSES_PER_PAGE);
  const courses = coursesData.courses;
  const visibleCourses = courses.slice(0, visibleCount);
  const hasMore = visibleCount < courses.length;

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + COURSES_PER_PAGE, courses.length),
    );
  };

  return (
    <section className="py-12 lg:py-20">
      <Container>
        {/* Header */}
        <div className="mb-10 text-center lg:mb-14">
          <h2 className="font-sans text-2xl font-semibold text-dark-02 sm:text-3xl lg:text-4xl">
            Discover Our Popular Courses
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-sans text-sm text-dark-04 sm:text-base lg:mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-10 text-center lg:mt-14">
          {hasMore ? (
            <Button
              onClick={loadMore}
              variant="outline"
              className="!px-8 !py-3 !text-base lg:!px-10 lg:!py-3.5 lg:!text-lg"
            >
              See More Courses
            </Button>
          ) : (
            <Link
              to="/courses"
              className="inline-block rounded-md bg-brand px-8 py-3 font-sans text-base font-medium text-white transition-colors hover:bg-brand-dark lg:px-10 lg:py-3.5 lg:text-lg"
            >
              View All Courses
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
