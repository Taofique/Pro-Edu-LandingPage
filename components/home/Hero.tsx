import { useState, useEffect, useCallback } from "react";
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slides: Slide[] = heroData.slides;
  const slide = slides[activeIndex];

  const goTo = useCallback(
    (direction: 1 | -1) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex(
        (prev) => (prev + direction + slides.length) % slides.length,
      );
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning, slides.length],
  );

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === activeIndex) return;
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning, activeIndex],
  );

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goTo(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [goTo]);

  // Pause auto-slide on hover
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goTo(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [goTo, isPaused]);

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-width container without padding */}
      <div className="relative h-[300px] w-full sm:h-[450px] md:h-[550px] lg:h-[700px] xl:h-[800px]">
        {/* Slides with smooth transition */}
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === activeIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform: `translateX(${(index - activeIndex) * 100}%)`,
            }}
          >
            <img
              src={s.image}
              alt={s.title}
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
        ))}

        {/* Content - centered with max-width container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Container className="relative z-10 flex flex-col items-center justify-center gap-4 px-6 text-center sm:gap-6 lg:gap-8">
            {/* Animated title */}
            <h1
              className="max-w-[280px] font-sans text-[24px] font-bold leading-[1.2] text-white drop-shadow-lg sm:max-w-[500px] sm:text-[38px] md:max-w-[600px] md:text-[48px] lg:max-w-[700px] lg:text-[64px] lg:leading-[1.15] xl:text-[72px]"
              style={{
                animation: "fadeInUp 0.6s ease-out",
              }}
            >
              {slide.title}
            </h1>

            {/* Animated description */}
            <p
              className="max-w-[320px] font-sans text-[14px] leading-[1.6] text-white/90 drop-shadow sm:max-w-[550px] sm:text-[16px] md:max-w-[650px] lg:max-w-[750px] lg:text-[18px] lg:leading-[1.8]"
              style={{
                animation: "fadeInUp 0.6s ease-out 0.1s both",
              }}
            >
              {slide.description}
            </p>

            {/* Animated button */}
            <div
              style={{
                animation: "fadeInUp 0.6s ease-out 0.2s both",
              }}
            >
              <Button
                href={slide.ctaHref}
                variant="primary"
                className="!px-[24px] !py-[12px] !text-[16px] sm:!px-[32px] sm:!py-[14px] sm:!text-[18px] lg:!px-[40px] lg:!py-[16px] lg:!text-[20px] shadow-lg hover:shadow-xl transition-shadow"
              >
                {slide.ctaLabel}
              </Button>
            </div>
          </Container>
        </div>

        {/* Navigation Arrows - Only show on larger screens */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(-1)}
          className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/40 hover:scale-110 sm:flex sm:p-3 lg:left-8 lg:p-4"
        >
          <FaChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(1)}
          className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/40 hover:scale-110 sm:flex sm:p-3 lg:right-8 lg:p-4"
        >
          <FaChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
        </button>

        {/* Slide Indicators - Modern dots */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-8 lg:bottom-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
