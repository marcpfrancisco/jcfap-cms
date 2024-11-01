import { InfiniteMovingCards } from "@/components/ui";
import { getTestimonials } from "@/services";
import { TestimonialNode } from "@/types";

const Quote = async () => {
  const testimonials: TestimonialNode[] = (await getTestimonials()) || [];

  return (
    <>
      <div className="flex flex-col antialiased dark:bg-white-100 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      <div className="flex flex-col antialiased dark:bg-white-100 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </>
  );
};

export default Quote;
