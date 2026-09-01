import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "../shared/Container";
import Button from "../ui/Button";
import heroData from "../../app/data/heroData.json";

type Slide = {
  id: number;
  image: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides: Slide[] = heroData.slides;
  const slide = slides[activeIndex];

  const goTo = (direction: 1 | -1) => {
    setActiveIndex(
      (prev) => (prev + direction + slides.length) % slides.length,
    );
  };

  return (
    <section className="w-full py-4 lg:py-6">
      <Container>
        <div className="relative h-[262px] w-full overflow-hidden rounded-[5px] sm:h-[420px] lg:h-[700px]">
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(29,29,29,0.7)]" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center sm:gap-6 lg:gap-8">
            <h1 className="max-w-[230px] font-sans text-[20px] font-semibold leading-[1.3] text-white sm:max-w-[460px] sm:text-[40px] sm:leading-[1.25] lg:max-w-[632px] lg:text-[65px] lg:leading-[85px]">
              {slide.title}
            </h1>
            <p className="max-w-[274px] font-sans text-[12px] leading-[1.75] text-dark-07 sm:max-w-[500px] sm:text-[15px] lg:max-w-[671px] lg:text-[18px] lg:leading-[30px]">
              {slide.description}
            </p>
            <Button
              href={slide.ctaHref}
              variant="primary"
              className="!px-[18px] !py-[11px] !text-[16px] sm:!px-[26px] sm:!py-[12px] lg:!px-[33px] lg:!py-[13px] lg:!text-[20px]"
            >
              {slide.ctaLabel}
            </Button>
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(-1)}
            className="absolute left-4 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30 lg:left-10 lg:size-10"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(1)}
            className="absolute right-4 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30 lg:right-10 lg:size-10"
          >
            <FaChevronRight size={14} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
