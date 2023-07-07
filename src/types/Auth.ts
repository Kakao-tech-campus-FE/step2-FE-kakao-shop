export interface AuthResponse {
  success: boolean;
  response: null;
  error: {
    message: string;
    status: number;
  } | null;
  token?: string;
}
