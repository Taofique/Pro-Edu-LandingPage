import Container from "../shared/Container";
import FAQItem from "./FAQItem";
import faqData from "../../app/data/faqData.json";

export default function FAQ() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className="mx-auto max-w-[872px]">
          <div className="mb-[50px] text-center">
            <h2 className="font-sans text-[32px] font-semibold leading-[45px] text-dark-01 sm:text-[38px] lg:text-[45px]">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-5 max-w-[606px] font-sans text-[16px] font-normal leading-[30px] text-dark-03">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {faqData.faqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
