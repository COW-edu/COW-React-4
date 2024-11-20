export interface AuthResponse {
  message: string;
  token: string;
}

export interface Todo {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
