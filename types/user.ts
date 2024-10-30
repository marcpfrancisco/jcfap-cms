export interface User {
  name?: string | null;
  email?: string | null;
  bio?: string | null;
  roles?: ("admin" | "user")[] | null;

  updatedAt?: string;
  createdAt?: string;
}
