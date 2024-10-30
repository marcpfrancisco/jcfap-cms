import { FeaturedImage } from "./featuredImage";

export interface ShowcaseNode {
  title: string;
  description: string;
  featuredImage: FeaturedImage;
}

export interface ShowcaseEdge {
  node: ShowcaseNode;
}

export interface ShowcasesConnection {
  edges: ShowcaseEdge[];
}

export interface ShowcaseQueryResult {
  showcasesConnection: ShowcasesConnection;
  showcases: ShowcaseNode[];
}
