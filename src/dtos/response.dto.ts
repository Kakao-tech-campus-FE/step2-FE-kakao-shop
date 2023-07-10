interface responseDefault {
  success: boolean;
  response: null;
  error: {
    message: string;
    status: number;
  } | null;
}

export class DefaultResDto {
  success: boolean;
  response: null;
  error: {
    message: string;
    status: number;
  } | null;

  constructor(data: responseDefault) {
    this.success = data.success;
    this.response = data.response;
    this.error = data.error;
  }
}
