import { FeaturedImage } from "./featuredImage";

export interface FeatureNode {
  title: string;
  description: string;
  featuredImage: FeaturedImage;
}

export interface FeatureEdge {
  node: FeatureNode;
}

export interface FeaturesConnection {
  edges: FeatureEdge[];
}

export interface FeatureQueryResult {
  featuresConnection: FeaturesConnection;
  features: FeatureNode[];
}
