import { Member } from "./member";

export interface Testimonial {
  member: Member;
  quote: string;
}

export interface TestimonialQueryResult {
  testimonial: Testimonial;
  testimonials: Testimonial[];
}
