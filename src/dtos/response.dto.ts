export interface responseError {
  message: string;
  status: number;
}

export class DefaultResDto {
  success: boolean;
  response: null;
  error: responseError | null;

  constructor(data: DefaultResDto) {
    this.success = data.success;
    this.response = data.response;
    this.error = data.error;
  }
}
