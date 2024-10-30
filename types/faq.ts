export interface FAQNode {
  title: string;
  content: { json: Record<any, any> };
}

export interface FAQEdge {
  node: FAQNode;
}

export interface FAQConnection {
  edges: FAQEdge[];
}

export interface FAQQueryResult {
  faqsConnection: FAQConnection;
  faqs: FAQNode[];
}
