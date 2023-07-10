export interface responseError {
  message: string;
  status: number;
}

interface responseDefault {
  success: boolean;
  response: null;
  error: responseError | null;
}

export class DefaultResDto {
  success: boolean;
  response: null;
  error: responseError | null;

  constructor(data: responseDefault) {
    this.success = data.success;
    this.response = data.response;
    this.error = data.error;
  }
}
