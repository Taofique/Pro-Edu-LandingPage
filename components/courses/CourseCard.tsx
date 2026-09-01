import { Link } from "react-router";

type CourseCardProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
};

export default function CourseCard({
  image,
  title,
  description,
  price,
  category,
}: CourseCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-dark-06 bg-white transition-shadow hover:shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-[140px] w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-[160px] lg:h-[180px]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
          {category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
        <h3 className="mb-2 font-sans text-base font-semibold text-dark-02 line-clamp-2 sm:text-lg lg:text-xl">
          {title}
        </h3>
        <p className="mb-4 flex-1 font-sans text-sm text-dark-04 line-clamp-2 sm:text-base">
          {description}
        </p>
        <div className="flex items-center justify-between border-t border-dark-06 pt-4">
          <span className="font-sans text-lg font-semibold text-brand sm:text-xl">
            ${price}
          </span>
          <Link
            to={`/courses/${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark sm:px-5 sm:py-2.5"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}
