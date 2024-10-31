import { Author } from "./author";

export interface TestimonialNode {
  author: Author;
  quote: string;
  title: string;
}

export interface TestimonialEdge {
  node: TestimonialNode;
}

export interface TestimonialsConnection {
  edges: TestimonialEdge[];
}

export interface TestimonialQueryResult {
  testimonialsConnection: TestimonialsConnection;
  testimonial: TestimonialNode;
}
