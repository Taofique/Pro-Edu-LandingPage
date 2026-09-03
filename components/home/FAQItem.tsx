import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type FAQItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export default function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-[5px] transition-colors duration-200 ${
        isOpen ? "bg-brand/10" : "border border-dark-06 bg-white"
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-6 py-5 text-left sm:px-10"
      >
        <span className="pr-4 font-sans text-[18px] font-semibold leading-[30px] text-dark-02 sm:text-[20px]">
          {question}
        </span>
        <FaChevronDown
          className={`h-3.5 w-3.5 shrink-0 text-dark-02 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-6 sm:px-10">
          <p className="font-sans text-[16px] font-normal leading-[30px] text-dark-03">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
