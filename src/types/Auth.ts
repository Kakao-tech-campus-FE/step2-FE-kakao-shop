export interface AuthResponse {
  success: boolean;
  response: null;
  error: {
    message: string;
    status: number;
  } | null;
}

export interface LoginResponse {
  data: AuthResponse;
  token: string;
}
