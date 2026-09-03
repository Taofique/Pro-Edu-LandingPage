import Container from "../shared/Container";
import Button from "../ui/Button";

export default function Join() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className="rounded-lg bg-brand px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-8 lg:text-left">
            {/* Left side - Text */}
            <div className="flex-1">
              <h2 className="font-sans text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                Ready to join?
              </h2>
              <p className="mt-2 max-w-2xl font-sans text-sm text-white/80 sm:text-base lg:mt-3 lg:text-lg">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            {/* Right side - Button */}
            <div className="flex-shrink-0">
              <Button
                href="/register"
                variant="outline"
                className="!border-white !px-6 !py-2.5 !text-sm !text-white hover:!bg-white hover:!text-brand sm:!px-8 sm:!py-3 sm:!text-base lg:!px-10 lg:!py-3.5 lg:!text-lg"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
