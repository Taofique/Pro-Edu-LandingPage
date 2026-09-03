import { FaQuoteLeft } from "react-icons/fa";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";

type FeedbackCardProps = {
  text: string;
  name: string;
  role: string;
  image: string;
  rating: number;
};

export default function FeedbackCard({
  text,
  name,
  role,
  image,
  rating,
}: FeedbackCardProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="flex shrink-0 w-full flex-col rounded-[5px] border border-dark-06 bg-white p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[calc(50%-12px)]">
      <FaQuoteLeft className="mb-6 h-[45px] w-[56px] text-dark-05" />

      <p className="mb-8 font-sans text-[16px] font-normal leading-[30px] text-dark-03">
        {text}
      </p>

      <div className="mt-auto flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="h-[42px] w-[42px] rounded-full object-cover"
        />
        <div>
          <h4 className="font-sans text-[18px] font-semibold leading-[27px] text-dark-02">
            {name}
          </h4>
          <p className="font-sans text-[16px] font-normal leading-[24px] text-dark-03">
            {role}
          </p>
        </div>
      </div>

      <div className="mt-5 flex gap-1">
        {Array.from({ length: fullStars }, (_, i) => (
          <FaStar key={`full-${i}`} className="h-5 w-5 text-amber-400" />
        ))}
        {hasHalf && (
          <FaStarHalfStroke className="h-5 w-5 text-amber-100" />
        )}
      </div>
    </div>
  );
}
