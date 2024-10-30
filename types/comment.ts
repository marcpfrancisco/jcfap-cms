export interface CommentNode {
  name: string;
  slug: string;
  comment: string;
  createdAt: string;
}

export interface CommentEdge {
  node: CommentNode;
}

export interface CommentConnection {
  edges: CommentEdge[];
}

export interface CommentQueryResult {
  commentConnection: CommentConnection;
  comments: CommentNode[];
}
