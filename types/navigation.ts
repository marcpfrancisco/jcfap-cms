import { ReactNode } from "react";

export interface NavigationNode {
  title: string;
  link: string;
  icon?: ReactNode; // ReactNode to represent an optional icon component
}

interface NavigationEdge {
  node: NavigationNode;
}

interface NavigationsConnection {
  edges: NavigationEdge[];
}

export interface NavigationQueryResult {
  navigationsConnection: NavigationsConnection;
}
