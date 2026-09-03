import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "../shared/Container";
import FeedbackCard from "./FeedbackCard";
import feedbackData from "../../app/data/feedbackData.json";

import awladEllipse from "../../app/assets/students/awlad-elipse.png";
import santaEllipse from "../../app/assets/students/santa-elipse.png";
import imran from "../../app/assets/students/Imran.png";
import jannatul from "../../app/assets/students/Jannatul.png";
import nishi from "../../app/assets/students/Nishi.png";

const imageMap: Record<string, string> = {
  awladEllipse,
  santaEllipse,
  imran,
  jannatul,
  nishi,
};

const feedbacks = feedbackData.feedbacks.map((f) => ({
  ...f,
  image: imageMap[f.imageKey],
}));

export default function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, feedbacks.length - visibleCount);
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= maxIndex;

  const goNext = () => {
    if (!isAtEnd) {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    }
  };

  const goPrev = () => {
    if (!isAtStart) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const visibleFeedbacks = feedbacks.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  const totalPages = Math.ceil(feedbacks.length / visibleCount);
  const currentPage = Math.floor(currentIndex / visibleCount) + 1;

  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className="mb-[50px] text-center">
          <h2 className="font-sans text-[32px] font-semibold leading-[45px] text-dark-01 sm:text-[38px] lg:text-[45px]">
            Some Students Feedback
          </h2>
          <p className="mx-auto mt-5 max-w-[606px] font-sans text-[16px] font-normal leading-[30px] text-dark-03">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="relative">
          {/* Previous Arrow - Left Side */}
          <button
            type="button"
            aria-label="Previous feedback"
            onClick={goPrev}
            disabled={isAtStart}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-dark-06 bg-white text-dark-02 transition-colors sm:-translate-x-6 ${
              isAtStart
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-dark-07"
            }`}
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>

          {/* Next Arrow - Right Side */}
          <button
            type="button"
            aria-label="Next feedback"
            onClick={goNext}
            disabled={isAtEnd}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-dark-06 bg-white text-dark-02 transition-colors sm:translate-x-6 ${
              isAtEnd
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-dark-07"
            }`}
          >
            <FaChevronRight className="h-4 w-4" />
          </button>

          {/* Feedback Cards */}
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center sm:gap-[24px] px-12 sm:px-16">
            {visibleFeedbacks.map((feedback) => (
              <FeedbackCard key={feedback.id} {...feedback} />
            ))}
          </div>
        </div>

        {/* Page Indicator */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to page ${i + 1}`}
              onClick={() => setCurrentIndex(i * visibleCount)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i + 1 === currentPage
                  ? "bg-brand"
                  : "bg-dark-05 hover:bg-dark-03"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}