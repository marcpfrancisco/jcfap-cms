export interface CategoryNode {
  name: string;
  slug: string;
}

export interface CategoryEdge {
  node: CategoryNode;
}

export interface CategoryConnection {
  edges: CategoryEdge[];
}

export interface CategoryQueryResult {
  categoryConnection: CategoryConnection;
  categories: CategoryNode[];
}
