import { Link } from "react-router";
import Container from "../shared/Container";
import Button from "../ui/Button";
import exploreData from "../../app/data/exploreData.json";

export default function Explore() {
  const {
    title,
    description,
    subDescription,
    stats,
    ctaLabel,
    ctaHref,
    image,
  } = exploreData.explore;

  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={image}
                alt="Explore eLearning Institute"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Title */}
              <h2 className="font-sans text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                {title}
              </h2>

              {/* Description */}
              <p className="font-sans text-sm leading-relaxed text-slate-500 sm:text-base lg:text-lg">
                {description}
              </p>

              {/* Sub-description */}
              <p className="font-sans text-sm leading-relaxed text-slate-500 sm:text-base lg:text-lg">
                {subDescription}
              </p>

              {/* Stats Grid */}
              <div className="mt-2 grid grid-cols-3 gap-4 sm:gap-6 lg:mt-4">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="text-right flex flex-col items-start"
                  >
                    <p className="font-sans text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">
                      {stat.value}
                    </p>
                    <p className="font-sans font-bold text-xs text-slate-500 sm:text-sm lg:text-base">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-2 lg:mt-4">
                <Button
                  href={ctaHref}
                  variant="primary"
                  className="!px-6 !py-2.5 !text-sm sm:!px-8 sm:!py-3 sm:!text-base lg:!px-10 lg:!py-3.5 lg:!text-lg"
                >
                  {ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
