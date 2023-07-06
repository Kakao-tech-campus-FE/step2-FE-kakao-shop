interface responseDefault {
  success: boolean;
  response: null;
  error: {
    message: string;
    status: number;
  } | null;
}

class DefaultResDto {
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

export class EmailCheckResDto extends DefaultResDto {
  constructor(data: responseDefault) {
    super(data);
  }
}

export class SignUpResDto extends DefaultResDto {
  constructor(data: responseDefault) {
    super(data);
  }
}

export class SignInResDto extends DefaultResDto {
  constructor(data: responseDefault) {
    super(data);
  }
}
