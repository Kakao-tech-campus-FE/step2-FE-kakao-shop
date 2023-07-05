export class EmailCheckResDto {
  success: boolean;
  response: null;
  error: {
    message: string;
    status: number;
  } | null;

  constructor(data: {
    success: boolean;
    response: null;
    error: {
      message: string;
      status: number;
    } | null;
  }) {
    this.success = data.success;
    this.response = data.response;
    this.error = data.error;
  }
}

export class SignUpResDto {
  success: boolean;
  response: null;
  error: {
    message: string;
    status: number;
  } | null;

  constructor(data: {
    success: boolean;
    response: null;
    error: {
      message: string;
      status: number;
    } | null;
  }) {
    this.success = data.success;
    this.response = data.response;
    this.error = data.error;
  }
}
